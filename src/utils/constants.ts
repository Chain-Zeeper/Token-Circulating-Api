export enum ChainId {
    BSC = 56,
    BTC="btc"
}



export const rpcProviders:{ [key: number]: string; btc: string; } = {
    [ChainId.BSC]: process.env.RPC_56 || "https://bsc-dataseed2.bnbchain.org",
    [ChainId.BTC]: process.env.RPC_BTC || ""
}