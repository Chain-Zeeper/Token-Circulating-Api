import { ethers } from "ethers";
import { ERC20__factory } from "../typechain-types";
import { ChainId, rpcProviders } from "./utils/constants";
import { response } from "express";
import { flattSum, memoize, rpc_provider } from "./utils/lib";
import tokens from "../tokens.json"
import { token } from "../typechain-types/@openzeppelin/contracts";

export type Token ={
    name:String
    chains:ChainId[],
    watch:{
        [key in ChainId]?:string[]
    }
    address:{
        [key in ChainId]?:string
    },
    flexible_supply?:{
        [key in ChainId]?:boolean
    }
    burn_or_bridge?:{
        [key in ChainId]?:string[]
    }
}

/**
 * 
 * @param token 
 * @returns max suppply possible regardless of architecture or burned amt in wei 1e18
 */
async function max_supply(token:Token){
    let _total = BigInt(0)
    const amounts =await Promise.all(token.chains.map(async (chain:ChainId)=>{
        let address = token.address[chain]
        if(!address) throw Error(`address not found for ${token.name} chain ${chain} token.json misconfigured`)
        if(Number.isNaN(Number(chain))){
            if(chain=='btc'){             
                return  await get_BRC20_supply(address)
            }
            else{
                throw Error("only btc non evm chain supported")
            }
        }
        else{  
            return  await get_ERC20_supply(token,chain)
        }      
    }))

    for (const value of amounts) {
        _total += BigInt(value);
    }
    return _total
}

async function total_supply(token:Token){
    let _max_supply = max_supply(token)
    const amounts = await Promise.all(token.chains.map(async (chain:ChainId)=>{
        let address = token.address[chain]
        if(!address) throw Error(`address not found for ${token.name} chain ${chain} token.json misconfigured`)
        if(Number.isNaN(Number(chain))){
            let addressToWatch = token.burn_or_bridge?.[chain]  
            if(chain=='btc'){          
                if(addressToWatch){
                   return await BRC20BalanceBatch(address,addressToWatch)
                }

            }
            else{
                throw Error("only btc non evm chain supported")
            }
        }
        else{  
            let addressToWatch = token.burn_or_bridge?.[chain]  
            if(addressToWatch){
                return await ERC20BatchBalances(address,addressToWatch,chain)
            }
            
        }      
    }))
    const total = flattSum(amounts) as bigint
    console.log(amounts)
    const _total_supply = (await _max_supply )- total
    return _total_supply
}

/**
 * 
 * @param contract 
 * @param chain 
 * @param wallet 
 * @returns wallet balacne erc20
 */
async function _ERC20Balance(contract:string,chain:ChainId,wallet:string){
    let provider = rpc_provider(chain)
    const ERC20 = ERC20__factory.connect(contract,provider)
    let [balance,decimals] = await Promise.all([ERC20.balanceOf(wallet),get_decimals(contract,chain)])
    if(decimals < 18){
        let diff = 18 - decimals
        balance = ethers.parseUnits(balance.toString(),diff)
    }
    else if(decimals > 18){
        let diff = decimals -18
        balance = BigInt(ethers.formatUnits(balance.toString(),diff))
    }
    return balance
}

/**
 * 
 * @param ticker brc20 ticker
 * @param wallet 
 * @returns balance of brc20 token  in bitcoin chain scaled to 10^18
 */
async function BRC20Balance(ticker:string,wallet:string):Promise<BigInt>{
    const res = await fetch(`https://api.hiro.so/ordinals/v1/brc-20/balances/${wallet}?ticker=${ticker}`)
    if(res.ok){
        const data = await res.json()
        let overall_balance = data?.results?.[0].overall_balance  
        if(!overall_balance) return BigInt(0)
        overall_balance = ethers.parseUnits(overall_balance,18)
        return overall_balance
    }
    else{
        throw Error(`fetch ordinals api  ${wallet} balance for ${ticker} failed`)
    }     
}

/**
 * 
 * @param ticker 
 * @param wallets 
 * @returns array of brc20 balances 
 */
async function BRC20BalanceBatch(ticker:string,wallets:string[]){
    let balances = await Promise.all(wallets.map(async(wallet)=>{
        return await BRC20Balance(ticker,wallet)
    }))
    return balances
}

/**
 * 
 * @param token 
 * @returns return the circulating supply of toke in wei
 */
async function circulating_supply(token:Token){
    let __totalSupply =  total_supply(token);
    const amounts = await Promise.all(token.chains.map(async (chain:ChainId)=>{
        let address = token.address[chain]
        if(!address) throw Error(`address not found for ${token.name} chain ${chain} token.json misconfigured`)
        if(Number.isNaN(Number(chain))){
            let addressToWatch = token.watch[chain]  
            if(chain=='btc'){          
                if(addressToWatch){
                   return await BRC20BalanceBatch(address,addressToWatch)
                }

            }
            else{
                throw Error("only btc non evm chain supported")
            }
        }
        else{  
            let addressToWatch = token.watch[chain]
            if(addressToWatch){
                return await ERC20BatchBalances(address,addressToWatch,chain)
            }
            
        }      
    }))
    const total = flattSum(amounts) as bigint

    const circulating = (await __totalSupply )- total
    return circulating
}


/**
 * 
 * @param contract 
 * @param addresses 
 * @param chain 
 * @returns Batch erc20 balances in an array
 */
async function ERC20BatchBalances(contract:string,addresses:string[],chain:ChainId){
    let balances = await Promise.all(addresses.map(async(wallet)=>{
        return await _ERC20Balance(contract,chain,wallet)
    }))
    return balances
}

/**
 * 
 * @param address 
 * @param chain 
 * @returns returns total supply in 18 decimals WEI
 */

async function _ERC20Supply(contract:string,chain:ChainId){
    let provider = rpc_provider(chain)
    const ERC20 = ERC20__factory.connect(contract,provider)
    let [supply,decimals] = await Promise.all([ERC20.totalSupply(),get_decimals(contract,chain)])
    if(decimals < 18){
        let diff = 18 - decimals
        supply = ethers.parseUnits(supply.toString(),diff)
    }
    else if(decimals > 18){
        let diff = decimals -18
        supply = BigInt(ethers.formatUnits(supply.toString(),diff))
    }
    return supply
}

const _ERC20SupplyCached =memoize(_ERC20Supply);



const get_decimals = memoize(async(contract:string,chain:ChainId)=>{
    let provider = rpc_provider(chain)
    const ERC20 = ERC20__factory.connect(contract,provider)
    return Number(await ERC20.decimals())
})


/**
 * 
 * @param token 
 * @param chain 
 * @returns returns ERC20 supply for a given chain
 */
function get_ERC20_supply(token:Token,chain:ChainId){
    let address = token.address[chain]
    if(!address) throw Error(`address not found for ${token.name} chain ${chain} token.json misconfigured`)
    return token?.flexible_supply?.[chain] ? _ERC20Supply(address,chain) : _ERC20SupplyCached(address,chain) 
}

/**
 * @notice only minted_supply is considered part of supply do not use for max_supply fetch
 * @param ticker 
 * @returns max supply of brc20 in wei for interop with erc20 also returs true falg to indita if fully minted
 */
const _BRC20Supply= async(ticker:String)=>{
    const res = await fetch(`https://api.hiro.so/ordinals/v1/brc-20/tokens/${ticker}`)
    if(res.ok){
        const data = await res.json()
        let minted_supply = data?.supply?.minted_supply
        let max_supply = data?.supply?.max_supply
        if(!minted_supply) throw Error("failed to get max_supply")
        minted_supply = ethers.parseUnits(minted_supply,18)
        if(max_supply === minted_supply){
            return {minted_supply,fullMint:true}
        }      
        return {minted_supply}
    }
    else{
        throw Error(`fetch ordinals api for ${ticker} failed`)
    }
}

const _BRC20SupplyCached = memoize(_BRC20Supply)


async function get_BRC20_supply(ticker:string){
    let {minted_supply, fullMint}= await  _BRC20SupplyCached(ticker)
    if(fullMint){
        minted_supply = await _BRC20Supply(ticker)
        return minted_supply
    }
    return minted_supply
}

export {total_supply,circulating_supply,get_BRC20_supply}