async function T(s,b={}){const U={env:Object.assign(Object.create(globalThis),b.env||{},{abort(t,e,a,r){t=h(t>>>0),e=h(e>>>0),a=a>>>0,r=r>>>0,(()=>{throw Error(`${t} in ${e}:${a}:${r}`)})()},seed(){return(()=>Date.now()*Math.random())()}})},{exports:f}=await WebAssembly.instantiate(s,U),u=f.memory||b.env.memory,d=Object.setPrototypeOf({trace(t){return t=_(m,4,2,t,Float32Array)||y(),g($,2,f.trace(t)>>>0)},format(t,e,a){t=A(_(m,4,2,t,Float32Array)||y()),e=_(D,5,0,e,Uint8Array)||y();try{return g(S,0,f.format(t,e,a)>>>0)}finally{F(t)}}},f);function h(t){if(!t)return null;const e=t+new Uint32Array(u.buffer)[t-4>>>2]>>>1,a=new Uint16Array(u.buffer);let r=t>>>1,c="";for(;e-r>1024;)c+=String.fromCharCode(...a.subarray(r,r+=1024));return c+String.fromCharCode(...a.subarray(r,e))}function g(t,e,a){if(!a)return null;const r=V(a-4)>>>e,c=new Array(r);for(let i=0;i<r;++i)c[i]=t(a+(i<<e>>>0));return c}function _(t,e,a,r,c){if(r==null)return 0;const i=r.length,l=f.__pin(f.__new(i<<a,e))>>>0;if(c)new c(u.buffer,l,i).set(r);else for(let w=0;w<i;w++)t(l+(w<<a>>>0),r[w]);return f.__unpin(l),l}const o=new Map;function A(t){if(t){const e=o.get(t);e?o.set(t,e+1):o.set(f.__pin(t),1)}return t}function F(t){if(t){const e=o.get(t);if(e===1)f.__unpin(t),o.delete(t);else if(e)o.set(t,e-1);else throw Error(`invalid refcount '${e}' for reference '${t}'`)}}function y(){throw TypeError("value must not be null")}let n=new DataView(u.buffer);function D(t,e){try{n.setUint8(t,e,!0)}catch{n=new DataView(u.buffer),n.setUint8(t,e,!0)}}function m(t,e){try{n.setFloat32(t,e,!0)}catch{n=new DataView(u.buffer),n.setFloat32(t,e,!0)}}function S(t){try{return n.getUint8(t,!0)}catch{return n=new DataView(u.buffer),n.getUint8(t,!0)}}function V(t){try{return n.getUint32(t,!0)}catch{return n=new DataView(u.buffer),n.getUint32(t,!0)}}function $(t){try{return n.getFloat32(t,!0)}catch{return n=new DataView(u.buffer),n.getFloat32(t,!0)}}return d}const{memory:E,trace:O,format:j}=await(async s=>T(await(async()=>{try{return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(s))}catch{return globalThis.WebAssembly.compile(await(await import("./__vite-browser-external-4ed993c7.js")).readFile(s))}})(),{}))(new URL(""+new URL("release-88bb8cfb.wasm",import.meta.url).href,self.location));export{j as format,E as memory,O as trace};
