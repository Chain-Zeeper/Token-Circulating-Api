"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rpcProviders = exports.ChainId = void 0;
var ChainId;
(function (ChainId) {
    ChainId[ChainId["BSC"] = 56] = "BSC";
    ChainId["BTC"] = "btc";
})(ChainId || (exports.ChainId = ChainId = {}));
exports.rpcProviders = {
    [ChainId.BSC]: process.env.RPC_56 || "https://bsc-dataseed2.bnbchain.org",
    [ChainId.BTC]: process.env.RPC_BTC || ""
};
