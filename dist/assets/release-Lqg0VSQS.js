async function T(s,b={}){const U={env:Object.assign(Object.create(globalThis),b.env||{},{abort(t,e,a,r){t=h(t>>>0),e=h(e>>>0),a=a>>>0,r=r>>>0,(()=>{throw Error(`${t} in ${e}:${a}:${r}`)})()},seed(){return Date.now()*Math.random()}})},{exports:f}=await WebAssembly.instantiate(s,U),u=f.memory||b.env.memory,d=Object.setPrototypeOf({trace(t){return t=w(m,4,2,t,Float32Array)||y(),g($,2,f.trace(t)>>>0)},format(t,e,a){t=A(w(m,4,2,t,Float32Array)||y()),e=w(D,5,0,e,Uint8Array)||y();try{return g(V,0,f.format(t,e,a)>>>0)}finally{F(t)}},collect(){f.__collect()}},f);function h(t){if(!t)return null;const e=t+new Uint32Array(u.buffer)[t-4>>>2]>>>1,a=new Uint16Array(u.buffer);let r=t>>>1,c="";for(;e-r>1024;)c+=String.fromCharCode(...a.subarray(r,r+=1024));return c+String.fromCharCode(...a.subarray(r,e))}function g(t,e,a){if(!a)return null;const r=S(a-4)>>>e,c=new Array(r);for(let o=0;o<r;++o)c[o]=t(a+(o<<e>>>0));return c}function w(t,e,a,r,c){if(r==null)return 0;const o=r.length,l=f.__pin(f.__new(o<<a,e))>>>0;if(c)new c(u.buffer,l,o).set(r);else for(let _=0;_<o;_++)t(l+(_<<a>>>0),r[_]);return f.__unpin(l),l}const i=new Map;function A(t){if(t){const e=i.get(t);e?i.set(t,e+1):i.set(f.__pin(t),1)}return t}function F(t){if(t){const e=i.get(t);if(e===1)f.__unpin(t),i.delete(t);else if(e)i.set(t,e-1);else throw Error(`invalid refcount '${e}' for reference '${t}'`)}}function y(){throw TypeError("value must not be null")}let n=new DataView(u.buffer);function D(t,e){try{n.setUint8(t,e,!0)}catch{n=new DataView(u.buffer),n.setUint8(t,e,!0)}}function m(t,e){try{n.setFloat32(t,e,!0)}catch{n=new DataView(u.buffer),n.setFloat32(t,e,!0)}}function V(t){try{return n.getUint8(t,!0)}catch{return n=new DataView(u.buffer),n.getUint8(t,!0)}}function S(t){try{return n.getUint32(t,!0)}catch{return n=new DataView(u.buffer),n.getUint32(t,!0)}}function $(t){try{return n.getFloat32(t,!0)}catch{return n=new DataView(u.buffer),n.getFloat32(t,!0)}}return d}const{memory:C,trace:E,format:O,collect:j}=await(async s=>T(await(async()=>{try{return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(s))}catch{return globalThis.WebAssembly.compile(await(await import("./__vite-browser-external-w40geAFS.js")).readFile(s))}})(),{}))(new URL(""+new URL("release-VmKLCsXx.wasm",import.meta.url).href,import.meta.url));export{j as collect,O as format,C as memory,E as trace};