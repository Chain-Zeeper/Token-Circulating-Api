"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_BRC20_supply = exports.circulating_supply = exports.total_supply = void 0;
const ethers_1 = require("ethers");
const typechain_types_1 = require("../typechain-types");
const lib_1 = require("./utils/lib");
/**
 *
 * @param token
 * @returns total suppply at time of calling the contract
 */
async function total_supply(token) {
    let _total = BigInt(0);
    const amounts = await Promise.all(token.chains.map(async (chain) => {
        let address = token.address[chain];
        if (!address)
            throw Error(`address not found for ${token.name} chain ${chain} token.json misconfigured`);
        if (Number.isNaN(Number(chain))) {
            if (chain == 'btc') {
                return await get_BRC20_supply(address);
            }
            else {
                throw Error("only btc non evm chain supported");
            }
        }
        else {
            return await get_ERC20_supply(token, chain);
        }
    }));
    for (const value of amounts) {
        _total += BigInt(value);
    }
    return _total;
}
exports.total_supply = total_supply;
/**
 *
 * @param contract
 * @param chain
 * @param wallet
 * @returns wallet balacne erc20
 */
async function _ERC20Balance(contract, chain, wallet) {
    let provider = (0, lib_1.rpc_provider)(chain);
    const ERC20 = typechain_types_1.ERC20__factory.connect(contract, provider);
    let [balance, decimals] = await Promise.all([ERC20.balanceOf(wallet), get_decimals(contract, chain)]);
    if (decimals < 18) {
        let diff = 18 - decimals;
        balance = ethers_1.ethers.parseUnits(balance.toString(), diff);
    }
    else if (decimals > 18) {
        let diff = decimals - 18;
        balance = BigInt(ethers_1.ethers.formatUnits(balance.toString(), diff));
    }
    return balance;
}
/**
 *
 * @param ticker brc20 ticker
 * @param wallet
 * @returns balance of brc20 token  in bitcoin chain scaled to 10^18
 */
async function BRC20Balance(ticker, wallet) {
    const res = await fetch(`https://api.hiro.so/ordinals/v1/brc-20/balances/${wallet}?ticker=${ticker}`);
    if (res.ok) {
        const data = await res.json();
        let overall_balance = data?.results?.[0].overall_balance;
        if (!overall_balance)
            return BigInt(0);
        overall_balance = ethers_1.ethers.parseUnits(overall_balance, 18);
        return overall_balance;
    }
    else {
        throw Error(`fetch ordinals api  ${wallet} balance for ${ticker} failed`);
    }
}
/**
 *
 * @param ticker
 * @param wallets
 * @returns array of brc20 balances
 */
async function BRC20BalanceBatch(ticker, wallets) {
    let balances = await Promise.all(wallets.map(async (wallet) => {
        return await BRC20Balance(ticker, wallet);
    }));
    return balances;
}
/**
 *
 * @param token
 * @returns return the circulating supply of toke in wei
 */
async function circulating_supply(token) {
    let __totalSupply = total_supply(token);
    const amounts = await Promise.all(token.chains.map(async (chain) => {
        let address = token.address[chain];
        if (!address)
            throw Error(`address not found for ${token.name} chain ${chain} token.json misconfigured`);
        if (Number.isNaN(Number(chain))) {
            let addressToWatch = token.watch[chain];
            if (chain == 'btc') {
                if (addressToWatch) {
                    return await BRC20BalanceBatch(address, addressToWatch);
                }
            }
            else {
                throw Error("only btc non evm chain supported");
            }
        }
        else {
            let addressToWatch = token.watch[chain];
            if (addressToWatch) {
                return await ERC20BatchBalances(address, addressToWatch, chain);
            }
        }
    }));
    const total = (0, lib_1.flattSum)(amounts);
    const circulating = (await __totalSupply) - total;
    return circulating;
}
exports.circulating_supply = circulating_supply;
/**
 *
 * @param contract
 * @param addresses
 * @param chain
 * @returns Batch erc20 balances in an array
 */
async function ERC20BatchBalances(contract, addresses, chain) {
    let balances = await Promise.all(addresses.map(async (wallet) => {
        return await _ERC20Balance(contract, chain, wallet);
    }));
    return balances;
}
/**
 *
 * @param address
 * @param chain
 * @returns returns total supply in 18 decimals WEI
 */
async function _ERC20Supply(contract, chain) {
    let provider = (0, lib_1.rpc_provider)(chain);
    const ERC20 = typechain_types_1.ERC20__factory.connect(contract, provider);
    let [supply, decimals] = await Promise.all([ERC20.totalSupply(), get_decimals(contract, chain)]);
    if (decimals < 18) {
        let diff = 18 - decimals;
        supply = ethers_1.ethers.parseUnits(supply.toString(), diff);
    }
    else if (decimals > 18) {
        let diff = decimals - 18;
        supply = BigInt(ethers_1.ethers.formatUnits(supply.toString(), diff));
    }
    return supply;
}
const _ERC20SupplyCached = (0, lib_1.memoize)(_ERC20Supply);
const get_decimals = (0, lib_1.memoize)(async (contract, chain) => {
    let provider = (0, lib_1.rpc_provider)(chain);
    const ERC20 = typechain_types_1.ERC20__factory.connect(contract, provider);
    return Number(await ERC20.decimals());
});
/**
 *
 * @param token
 * @param chain
 * @returns returns ERC20 supply for a given chain
 */
function get_ERC20_supply(token, chain) {
    let address = token.address[chain];
    if (!address)
        throw Error(`address not found for ${token.name} chain ${chain} token.json misconfigured`);
    return token?.flexible_supply?.[chain] ? _ERC20Supply(address, chain) : _ERC20SupplyCached(address, chain);
}
/**
 * @notice only minted_supply is considered part of supply do not use for max_supply fetch
 * @param ticker
 * @returns max supply of brc20 in wei for interop with erc20 also returs true falg to indita if fully minted
 */
const _BRC20Supply = async (ticker) => {
    const res = await fetch(`https://api.hiro.so/ordinals/v1/brc-20/tokens/${ticker}`);
    if (res.ok) {
        const data = await res.json();
        let minted_supply = data?.supply?.minted_supply;
        let max_supply = data?.supply?.max_supply;
        if (!minted_supply)
            throw Error("failed to get max_supply");
        minted_supply = ethers_1.ethers.parseUnits(minted_supply, 18);
        if (max_supply === minted_supply) {
            return { minted_supply, fullMint: true };
        }
        return { minted_supply };
    }
    else {
        throw Error(`fetch ordinals api for ${ticker} failed`);
    }
};
const _BRC20SupplyCached = (0, lib_1.memoize)(_BRC20Supply);
async function get_BRC20_supply(ticker) {
    let { minted_supply, fullMint } = await _BRC20SupplyCached(ticker);
    if (fullMint) {
        minted_supply = await _BRC20Supply(ticker);
        return minted_supply;
    }
    return minted_supply;
}
exports.get_BRC20_supply = get_BRC20_supply;
