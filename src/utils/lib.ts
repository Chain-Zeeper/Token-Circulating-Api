import { ethers } from "ethers"
import { ChainId, rpcProviders } from "./constants"

/**
 * @notice nonevm and wss rpc not supported as of yet
 * @param chain 
 */
export const rpc_provider =(chain:ChainId)=>{
    if(Number.isNaN(Number(chain))) throw Error(" non evm rpc not supported")
    let rpcurl = rpcProviders[chain as ChainId]
    if(!rpcurl) throw Error("missing rpc url")
    let provider = new ethers.JsonRpcProvider(rpcurl,Number(chain))
    return provider
}
const expiryMinutes = 60 // expiry in minutes
/**
 * 
 * @param fn function to cache
 * @returns caches instance of the function use for performance upgrades to expensive funtions
 */
export function memoize<T extends (...args: any[]) => any>(fn: T): T {
    const cache = new Map<string, {
      value:ReturnType<T>
      expiry:number}
      >();
    const now = Date.now();
    return function (...args: Parameters<T>): ReturnType<T> {
      const key = `${fn.name}${JSON.stringify(args)}`;
  
      if (cache.has(key)) {
        const cached = cache.get(key)!;
        if (now < cached.expiry) {
          return cached.value;
        } else {
          cache.delete(key);
        }
      }
  
      const result = fn(...args);
      cache.set(key, {
        value:result,
        expiry: now + expiryMinutes *60 *1000
      });
  
      return result;
    } as T;
}

/**
 * 
 * @param arr array of values single or multidimen
 * @returns sum of all values and nested values
 */
export function flattSum(arr: any[]): number |bigint {
    let sum = BigInt(0);
    function traverse(subArr: any[]) {
      for (const element of subArr) {
        if (Array.isArray(element)) {
          traverse(element);
        } else {
          if(element){
            sum += element;
          }
          
        }
      }
    }
    traverse(arr);
    return sum;
}
