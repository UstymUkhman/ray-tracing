import{_ as U}from"./index-12647cf7.js";async function A(s,l={}){const w={env:Object.assign(Object.create(globalThis),l.env||{},{abort(t,e,n,r){t=c(t>>>0),e=c(e>>>0),n=n>>>0,r=r>>>0,(()=>{throw Error(`${t} in ${e}:${n}:${r}`)})()},"Date.now"(){return Date.now()},"console.info"(t){t=c(t>>>0),console.info(t)},seed(){return(()=>Date.now()*Math.random())()}})},{exports:o}=await WebAssembly.instantiate(s,w),i=o.memory||l.env.memory,y=Object.setPrototypeOf({trace(t,e,n){return e=h(Float32Array,18,2,e)||m(),o.__setArgumentsLength(arguments.length),b(Float32Array,o.trace(t,e,n)>>>0)}},o);function c(t){if(!t)return null;const e=t+new Uint32Array(i.buffer)[t-4>>>2]>>>1,n=new Uint16Array(i.buffer);let r=t>>>1,u="";for(;e-r>1024;)u+=String.fromCharCode(...n.subarray(r,r+=1024));return u+String.fromCharCode(...n.subarray(r,e))}function b(t,e){return e?new t(i.buffer,d(e+4),a.getUint32(e+8,!0)/t.BYTES_PER_ELEMENT).slice():null}function h(t,e,n,r){if(r==null)return 0;const u=r.length,f=o.__pin(o.__new(u<<n,1))>>>0,_=o.__new(12,e)>>>0;return g(_+0,f),a.setUint32(_+4,f,!0),a.setUint32(_+8,u<<n,!0),new t(i.buffer,f,u).set(r),o.__unpin(f),_}function m(){throw TypeError("value must not be null")}let a=new DataView(i.buffer);function g(t,e){try{a.setUint32(t,e,!0)}catch{a=new DataView(i.buffer),a.setUint32(t,e,!0)}}function d(t){try{return a.getUint32(t,!0)}catch{return a=new DataView(i.buffer),a.getUint32(t,!0)}}return y}const{memory:T,trace:p}=await(async s=>A(await(async()=>{try{return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(s))}catch{return globalThis.WebAssembly.compile(await(await U(()=>import("./__vite-browser-external-b25bb000.js"),[],import.meta.url)).readFile(s))}})(),{}))(new URL(""+new URL("release-86655654.wasm",import.meta.url).href,self.location));export{T as memory,p as trace};