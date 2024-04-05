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

export function memoize<T extends (...args: any[]) => any>(fn: T): T {
    const cache = new Map<string, ReturnType<T>>();
    return function (...args: Parameters<T>): ReturnType<T> {
      const key = `${fn.name}${JSON.stringify(args)}`;
  
      if (cache.has(key)) {
        return cache.get(key) as ReturnType<T>;
      }
  
      const result = fn(...args);
      cache.set(key, result);
  
      return result;
    } as T;
}