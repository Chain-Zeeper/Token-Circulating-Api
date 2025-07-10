"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattSum = exports.memoize = exports.rpc_provider = void 0;
const ethers_1 = require("ethers");
const constants_1 = require("./constants");
/**
 * @notice nonevm and wss rpc not supported as of yet
 * @param chain
 */
const rpc_provider = (chain) => {
    if (Number.isNaN(Number(chain)))
        throw Error(" non evm rpc not supported");
    let rpcurl = constants_1.rpcProviders[chain];
    if (!rpcurl)
        throw Error("missing rpc url");
    let provider = new ethers_1.ethers.JsonRpcProvider(rpcurl, Number(chain));
    return provider;
};
exports.rpc_provider = rpc_provider;
const expiryMinutes = 60; // expiry in minutes
/**
 *
 * @param fn function to cache
 * @returns caches instance of the function use for performance upgrades to expensive funtions
 */
function memoize(fn) {
    const cache = new Map();
    const now = Date.now();
    return function (...args) {
        const key = `${fn.name}${JSON.stringify(args)}`;
        if (cache.has(key)) {
            const cached = cache.get(key);
            if (now < cached.expiry) {
                return cached.value;
            }
            else {
                cache.delete(key);
            }
        }
        const result = fn(...args);
        cache.set(key, {
            value: result,
            expiry: now + expiryMinutes * 60 * 1000
        });
        return result;
    };
}
exports.memoize = memoize;
/**
 *
 * @param arr array of values single or multidimen
 * @returns sum of all values and nested values
 */
function flattSum(arr) {
    let sum = BigInt(0);
    function traverse(subArr) {
        for (const element of subArr) {
            if (Array.isArray(element)) {
                traverse(element);
            }
            else {
                if (element) {
                    sum += element;
                }
            }
        }
    }
    traverse(arr);
    return sum;
}
exports.flattSum = flattSum;
