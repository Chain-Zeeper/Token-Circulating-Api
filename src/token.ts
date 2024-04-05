import { ethers } from "ethers";
import { ERC20__factory } from "../typechain-types";
import { ChainId, rpcProviders } from "./utils/constants";
import { response } from "express";
import { memoize, rpc_provider } from "./utils/lib";
import tokens from "../tokens.json"
import { token } from "../typechain-types/@openzeppelin/contracts";

export type Token ={
    name:String
    chains:ChainId[],
    watch:{
        [key in ChainId]?:string
    }
    address:{
        [key in ChainId]?:string
    },
    flexible_supply?:{
        [key in ChainId]?:boolean
    }
}

export const totalSupplpy = async (token:Token)=>{
    let _total = BigInt(0)
    const amounts =await Promise.all(token.chains.map(async (chain:ChainId)=>{
        let address = token.address[chain]
        if(!address) throw Error(`address not found for ${token.name} chain ${chain} token.json misconfigured`)
        if(Number.isNaN(Number(chain))){
            if(chain=='btc'){             
                return await get_BRC20_supply(address)
            }
            else{
                throw Error("only btc non evm chain supported")
            }
        }
        else{  
            return await get_ERC20_supply(token,chain)
        }      
    }))

    for (const value of amounts) {
        _total += BigInt(value);
    }
    return _total
}

/**
 * 
 * @param address 
 * @param chain 
 * @returns returns total supply in 18 decimals WEI
 */

const _ERC20Supply =async (contract:string,chain:ChainId)=>{
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
    console.log("not cached")
    return supply
}
const _ERC20SupplyCached =memoize(_ERC20Supply);



export const get_decimals = memoize(async(contract:string,chain:ChainId)=>{
    let provider = rpc_provider(chain)
    const ERC20 = ERC20__factory.connect(contract,provider)
    return Number(await ERC20.decimals())
})

export const get_ERC20_supply =  (token:Token,chain:ChainId)=>{
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


export const get_BRC20_supply= async (ticker:string)=>{
    let {minted_supply, fullMint}= await  _BRC20SupplyCached(ticker)
    if(fullMint){
        minted_supply = await _BRC20Supply(ticker)
        return minted_supply
    }
    return minted_supply
}