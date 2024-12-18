export enum ChainId {
    BSC = 56,
    BTC="btc",
    TON='ton'
}



export const rpcProviders = {
    [ChainId.BSC]: process.env.RPC_56 || "https://bsc-dataseed2.bnbchain.org",
    [ChainId.BTC]: process.env.RPC_BTC || "",
    [ChainId.TON]: process.env.RPC_TON || "https://toncenter.com/api/v2/jsonRPC"
}