import{_ as T}from"./index-918c0474.js";async function C(s,w={}){const d={env:Object.assign(Object.create(globalThis),w.env||{},{abort(t,e,n,r){t=m(t>>>0),e=m(e>>>0),n=n>>>0,r=r>>>0,(()=>{throw Error(`${t} in ${e}:${n}:${r}`)})()},seed(){return(()=>Date.now()*Math.random())()}})},{exports:a}=await WebAssembly.instantiate(s,d),i=a.memory||w.env.memory,h=Object.setPrototypeOf({trace(t){return t=l(Float32Array,5,2,t)||y(),b(Float32Array,a.trace(t)>>>0)},format(t,e,n){t=U(l(Uint8ClampedArray,4,0,t)||y()),e=l(Float32Array,5,2,e)||y();try{return b(Uint8ClampedArray,a.format(t,e,n)>>>0)}finally{g(t)}}},a);function m(t){if(!t)return null;const e=t+new Uint32Array(i.buffer)[t-4>>>2]>>>1,n=new Uint16Array(i.buffer);let r=t>>>1,o="";for(;e-r>1024;)o+=String.fromCharCode(...n.subarray(r,r+=1024));return o+String.fromCharCode(...n.subarray(r,e))}function b(t,e){return e?new t(i.buffer,E(e+4),f.getUint32(e+8,!0)/t.BYTES_PER_ELEMENT).slice():null}function l(t,e,n,r){if(r==null)return 0;const o=r.length,_=a.__pin(a.__new(o<<n,1))>>>0,c=a.__new(12,e)>>>0;return A(c+0,_),f.setUint32(c+4,_,!0),f.setUint32(c+8,o<<n,!0),new t(i.buffer,_,o).set(r),a.__unpin(_),c}const u=new Map;function U(t){if(t){const e=u.get(t);e?u.set(t,e+1):u.set(a.__pin(t),1)}return t}function g(t){if(t){const e=u.get(t);if(e===1)a.__unpin(t),u.delete(t);else if(e)u.set(t,e-1);else throw Error(`invalid refcount '${e}' for reference '${t}'`)}}function y(){throw TypeError("value must not be null")}let f=new DataView(i.buffer);function A(t,e){try{f.setUint32(t,e,!0)}catch{f=new DataView(i.buffer),f.setUint32(t,e,!0)}}function E(t){try{return f.getUint32(t,!0)}catch{return f=new DataView(i.buffer),f.getUint32(t,!0)}}return h}const{memory:v,trace:D,format:O}=await(async s=>C(await(async()=>{try{return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(s))}catch{return globalThis.WebAssembly.compile(await(await T(()=>import("./__vite-browser-external-b25bb000.js"),[],import.meta.url)).readFile(s))}})(),{}))(new URL(""+new URL("release-a3d495f2.wasm",import.meta.url).href,self.location));export{O as format,v as memory,D as trace};