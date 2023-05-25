var ht=Object.defineProperty;var ct=(s,t,e)=>t in s?ht(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var c=(s,t,e)=>(ct(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();let Y=Z;const y=1,A=2,K={owned:null,cleanups:null,context:null,owner:null};var m=null;let D=null,w=null,g=null,v=null,k=0;function at(s,t){const e=w,i=m,n=s.length===0,r=n?K:{owned:null,cleanups:null,context:null,owner:t===void 0?i:t},h=n?s:()=>s(()=>T(()=>_(r)));m=r,w=null;try{return L(h,!0)}finally{w=e,m=i}}function R(s,t,e){const i=Q(s,t,!1,y);$(i)}function lt(s,t,e){Y=gt;const i=Q(s,t,!1,y);(!e||!e.render)&&(i.user=!0),v?v.push(i):$(i)}function T(s){if(w===null)return s();const t=w;w=null;try{return s()}finally{w=t}}function ut(s){lt(()=>T(s))}function dt(s,t,e){let i=s.value;return(!s.comparator||!s.comparator(i,t))&&(s.value=t,s.observers&&s.observers.length&&L(()=>{for(let n=0;n<s.observers.length;n+=1){const r=s.observers[n],h=D&&D.running;h&&D.disposed.has(r),(h?!r.tState:!r.state)&&(r.pure?g.push(r):v.push(r),r.observers&&J(r)),h||(r.state=y)}if(g.length>1e6)throw g=[],new Error},!1)),t}function $(s){if(!s.fn)return;_(s);const t=m,e=w,i=k;w=m=s,ft(s,s.value,i),w=e,m=t}function ft(s,t,e){let i;try{i=s.fn(t)}catch(n){return s.pure&&(s.state=y,s.owned&&s.owned.forEach(_),s.owned=null),s.updatedAt=e+1,tt(n)}(!s.updatedAt||s.updatedAt<=e)&&(s.updatedAt!=null&&"observers"in s?dt(s,i):s.value=i,s.updatedAt=e)}function Q(s,t,e,i=y,n){const r={fn:s,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:e};return m===null||m!==K&&(m.owned?m.owned.push(r):m.owned=[r]),r}function C(s){if(s.state===0)return;if(s.state===A)return B(s);if(s.suspense&&T(s.suspense.inFallback))return s.suspense.effects.push(s);const t=[s];for(;(s=s.owner)&&(!s.updatedAt||s.updatedAt<k);)s.state&&t.push(s);for(let e=t.length-1;e>=0;e--)if(s=t[e],s.state===y)$(s);else if(s.state===A){const i=g;g=null,L(()=>B(s,t[0]),!1),g=i}}function L(s,t){if(g)return s();let e=!1;t||(g=[]),v?e=!0:v=[],k++;try{const i=s();return pt(e),i}catch(i){e||(v=null),g=null,tt(i)}}function pt(s){if(g&&(Z(g),g=null),s)return;const t=v;v=null,t.length&&L(()=>Y(t),!1)}function Z(s){for(let t=0;t<s.length;t++)C(s[t])}function gt(s){let t,e=0;for(t=0;t<s.length;t++){const i=s[t];i.user?s[e++]=i:C(i)}for(t=0;t<e;t++)C(s[t])}function B(s,t){s.state=0;for(let e=0;e<s.sources.length;e+=1){const i=s.sources[e];if(i.sources){const n=i.state;n===y?i!==t&&(!i.updatedAt||i.updatedAt<k)&&C(i):n===A&&B(i,t)}}}function J(s){for(let t=0;t<s.observers.length;t+=1){const e=s.observers[t];e.state||(e.state=A,e.pure?g.push(e):v.push(e),e.observers&&J(e))}}function _(s){let t;if(s.sources)for(;s.sources.length;){const e=s.sources.pop(),i=s.sourceSlots.pop(),n=e.observers;if(n&&n.length){const r=n.pop(),h=e.observerSlots.pop();i<n.length&&(r.sourceSlots[h]=i,n[i]=r,e.observerSlots[i]=h)}}if(s.owned){for(t=s.owned.length-1;t>=0;t--)_(s.owned[t]);s.owned=null}if(s.cleanups){for(t=s.cleanups.length-1;t>=0;t--)s.cleanups[t]();s.cleanups=null}s.state=0,s.context=null}function tt(s){throw s}function mt(s,t){return T(()=>s(t||{}))}function wt(s,t,e){let i=e.length,n=t.length,r=i,h=0,o=0,a=t[n-1].nextSibling,u=null;for(;h<n||o<r;){if(t[h]===e[o]){h++,o++;continue}for(;t[n-1]===e[r-1];)n--,r--;if(n===h){const d=r<i?o?e[o-1].nextSibling:e[r-o]:a;for(;o<r;)s.insertBefore(e[o++],d)}else if(r===o)for(;h<n;)(!u||!u.has(t[h]))&&t[h].remove(),h++;else if(t[h]===e[r-1]&&e[o]===t[n-1]){const d=t[--n].nextSibling;s.insertBefore(e[o++],t[h++].nextSibling),s.insertBefore(e[--r],d),t[n]=e[r]}else{if(!u){u=new Map;let f=o;for(;f<r;)u.set(e[f],f++)}const d=u.get(t[h]);if(d!=null)if(o<d&&d<r){let f=h,x=1,M;for(;++f<n&&f<r&&!((M=u.get(t[f]))==null||M!==d+x);)x++;if(x>d-o){const U=t[h];for(;o<d;)s.insertBefore(e[o++],U)}else s.replaceChild(e[o++],t[h++])}else h++;else t[h++].remove()}}}function vt(s,t,e,i={}){let n;return at(r=>{n=r,t===document?s():bt(t,s(),t.firstChild?null:void 0,e)},i.owner),()=>{n(),t.textContent=""}}function xt(s,t,e){let i;const n=()=>{const h=document.createElement("template");return h.innerHTML=s,e?h.content.firstChild.firstChild:h.content.firstChild},r=t?()=>(i||(i=n())).cloneNode(!0):()=>T(()=>document.importNode(i||(i=n()),!0));return r.cloneNode=r,r}function W(s,t,e){e==null?s.removeAttribute(t):s.setAttribute(t,e)}function yt(s,t,e){return T(()=>s(t,e))}function bt(s,t,e,i){if(e!==void 0&&!i&&(i=[]),typeof t!="function")return I(s,t,i,e);R(n=>I(s,t(),n,e),i)}function I(s,t,e,i,n){for(;typeof e=="function";)e=e();if(t===e)return e;const r=typeof t,h=i!==void 0;if(s=h&&e[0]&&e[0].parentNode||s,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),h){let o=e[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),e=b(s,e,i,o)}else e!==""&&typeof e=="string"?e=s.firstChild.data=t:e=s.textContent=t;else if(t==null||r==="boolean")e=b(s,e,i);else{if(r==="function")return R(()=>{let o=t();for(;typeof o=="function";)o=o();e=I(s,o,e,i)}),()=>e;if(Array.isArray(t)){const o=[],a=e&&Array.isArray(e);if(z(o,t,e,n))return R(()=>e=I(s,o,e,i,!0)),()=>e;if(o.length===0){if(e=b(s,e,i),h)return e}else a?e.length===0?G(s,o,i):wt(s,e,o):(e&&b(s),G(s,o));e=o}else if(t.nodeType){if(Array.isArray(e)){if(h)return e=b(s,e,i,t);b(s,e,null,t)}else e==null||e===""||!s.firstChild?s.appendChild(t):s.replaceChild(t,s.firstChild);e=t}else console.warn("Unrecognized value. Skipped inserting",t)}return e}function z(s,t,e,i){let n=!1;for(let r=0,h=t.length;r<h;r++){let o=t[r],a=e&&e[r],u;if(!(o==null||o===!0||o===!1))if((u=typeof o)=="object"&&o.nodeType)s.push(o);else if(Array.isArray(o))n=z(s,o,a)||n;else if(u==="function")if(i){for(;typeof o=="function";)o=o();n=z(s,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||n}else s.push(o),n=!0;else{const d=String(o);a&&a.nodeType===3&&a.data===d?s.push(a):s.push(document.createTextNode(d))}}return n}function G(s,t,e=null){for(let i=0,n=t.length;i<n;i++)s.insertBefore(t[i],e)}function b(s,t,e,i){if(e===void 0)return s.textContent="";const n=i||document.createTextNode("");if(t.length){let r=!1;for(let h=t.length-1;h>=0;h--){const o=t[h];if(n!==o){const a=o.parentNode===s;!r&&!h?a?s.replaceChild(n,o):s.insertBefore(n,e):a&&o.remove()}else r=!0}}else s.insertBefore(n,e);return[n]}var p;(s=>{s.Scene={pixelRatio:1,maxDepth:50,samples:500,backEnd:"2d",height:400,width:600}})(p||(p={}));function Et(){return new Worker(""+new URL("worker-23b6ede3.js",import.meta.url).href)}let St=class{constructor(){c(this,"events",new Map);c(this,"worker",new Et);this.worker.onmessage=this.onMessage.bind(this),this.worker.onerror=this.onError.bind(this)}add(t,e,i){this.events.set(t,{callback:e,params:i})}transfer(t,e){this.worker.postMessage({event:"Transfer::Offscreen",params:{canvas:t,...e}},[t])}post(t,e){var n;const i=(n=this.events.get(t))==null?void 0:n.params;this.worker.postMessage({event:t,params:{...i,...e}})}onMessage(t){var n,r,h;const{name:e,response:i}=t.data;(h=(r=(n=this.events)==null?void 0:n.get(e))==null?void 0:r.callback)==null||h.call(r,i)}onError(t){console.error(t)}remove(t){this.events.delete(t)}dispose(){this.events.clear()}};class Tt{downloadImage(t,e="image"){const i=document.createElement("a");i.href=URL.createObjectURL(new Blob([t],{type:"text/plain; charset=UTF-8"})),i.download=`${e}.ppm`,i.click(),URL.revokeObjectURL(i.href)}}const Mt=`#version 300 es

precision mediump float;

uniform vec2 resolution;

in  vec2 position;
in  vec2 coords;
out vec2 uv;

void main (void)
{
  gl_Position = vec4((
    position / resolution * 2.0 - 1.0
  ) * vec2(1.0, -1.0), 0.0, 1.0);

  uv = coords;
}
`,Pt=`#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

uniform sampler2D tex;

in  vec2 uv;
out vec4 fragColor;

void main (void)
{
  fragColor = texture(tex, uv);
}
`,E=(s,t=0,e=1)=>Math.max(t,Math.min(s,e)),P=(s,t)=>Math.random()*(t-s)+s,At=s=>s*Math.PI/180,q=(s,t=2)=>{const e=Math.pow(10,t);return~~(e*s)/e},Rt=({r:s,g:t,b:e})=>E(s*255,0,255)<<16^E(t*255,0,255)<<8^E(e*255,0,255)<<0,Ct=(s,t=1)=>(s=typeof s=="string"?kt(s):s,{r:s>>16&t,g:s>>8&t,b:s&t}),It=(s,t)=>{const e=1/t;return s.multiply(e).sqrt,s.set(E(s.x,0,.999)*256|0,E(s.y,0,.999)*256|0,E(s.z,0,.999)*256|0)},et=s=>(s=typeof s=="number"?s:Rt(s),`#${`000000${s.toString(16)}`.slice(-6)}`),kt=s=>(s=typeof s=="string"?s:et(s),parseInt(s.slice(1),16));class st{constructor(t,e){c(this,"context");c(this,"backEnd");c(this,"clearColor",0);c(this,"channels");c(this,"height");c(this,"width");c(this,"side");this.backEnd=e;const i=e==="2d",{canvas:n,offscreen:r}=t;this.context=n.getContext(e,this.getOptions(e,r)),this.width=n.width,this.height=n.height,this.channels=+i+3,this.side=this.width*this.channels}getOptions(t,e=!1){switch(t){case"2d":return{willReadFrequently:!e,desynchronized:e,colorSpace:"srgb",alpha:!1};case"webgpu":return{};default:return{powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,premultipliedAlpha:!1,desynchronized:!0,antialias:!0,stencil:!1,depth:!1,alpha:!1}}}getPixel(t,e){return e*this.side+t*this.channels}}const Lt=`precision mediump float;

uniform vec2 resolution;

attribute vec2 position;
attribute vec2 coords;
varying   vec2 uv;

void main (void)
{
  gl_Position = vec4((
    position / resolution * 2.0 - 1.0
  ) * vec2(1.0, -1.0), 0.0, 1.0);

  uv = coords;
}
`,_t=`#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

uniform sampler2D tex;

varying vec2 uv;

void main (void)
{
  gl_FragColor = texture2D(tex, uv);
}
`;class it extends st{constructor(e,i="webgl",n=_t,r=Lt){super(e,i);c(this,"textureData",new Uint8ClampedArray(this.width*this.height*this.channels));c(this,"texture");c(this,"program");this.createProgram(n,r),this.createScene()}loadShader(e,i){const n=this.context.createShader(i);return this.context.shaderSource(n,e),this.context.compileShader(n),this.context.getShaderParameter(n,this.context.COMPILE_STATUS)?n:(console.error(`An error occurred compiling the shaders: ${this.context.getShaderInfoLog(n)}`),this.context.deleteShader(n))}setBufferData(e=this.width,i=this.height){this.context.bufferData(this.context.ARRAY_BUFFER,new Float32Array([0,0,e,0,0,i,0,i,e,0,e,i]),this.context.STATIC_DRAW)}createProgram(e,i){const n=this.loadShader(e,this.context.FRAGMENT_SHADER),r=this.loadShader(i,this.context.VERTEX_SHADER);if(this.program=this.context.createProgram(),r&&n&&(this.context.attachShader(this.program,n),this.context.attachShader(this.program,r),this.context.linkProgram(this.program)),!this.context.getProgramParameter(this.program,this.context.LINK_STATUS))return console.error(`Unable to initialize shader program: ${this.context.getProgramInfoLog(this.program)}`);this.context.clear(this.context.COLOR_BUFFER_BIT);const{r:h,g:o,b:a}=Ct(this.clearColor,1);this.context.clearColor(h,o,a,1),this.context.useProgram(this.program)}updateTexture(){this.context.activeTexture(this.context.TEXTURE0),this.context.bindTexture(this.context.TEXTURE_2D,this.texture),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.RGB,this.width,this.height,0,this.context.RGB,this.context.UNSIGNED_BYTE,this.textureData)}createScene(){const e=this.context.getAttribLocation(this.program,"coords");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(1,1),this.context.enableVertexAttribArray(e),this.context.vertexAttribPointer(e,2,this.context.FLOAT,!1,0,0);const i=this.context.getAttribLocation(this.program,"position");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(),this.context.enableVertexAttribArray(i),this.context.vertexAttribPointer(i,2,this.context.FLOAT,!1,0,0);const n=this.context.getUniformLocation(this.program,"resolution");this.context.uniform2f(n,this.width,this.height),this.texture=this.context.createTexture(),this.setBufferData(),this.updateTexture(),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_S,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_T,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MIN_FILTER,this.context.NEAREST),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MAG_FILTER,this.context.NEAREST)}drawImage(e){this.textureData=e,this.updateTexture(),this.context.drawArrays(this.context.TRIANGLES,0,6)}clear(){this.context.clear(this.context.COLOR_BUFFER_BIT)}}class Ut extends it{constructor(t){super(t,"webgl2",Pt,Mt)}}class Dt extends st{constructor(e){super(e,"2d");c(this,"image");this.context.imageSmoothingEnabled=!0,this.context.imageSmoothingQuality="high",this.image=this.context.getImageData(0,0,this.width,this.height)}drawImage(e){for(let i=0,n=0;i<e.length;i+=3,n+=4)this.image.data[n+0]=e[i+0],this.image.data[n+1]=e[i+1],this.image.data[n+2]=e[i+2],this.image.data[n+3]=255;this.context.putImageData(this.image,0,0)}clear(){this.context.fillStyle=et(this.clearColor),this.context.clearRect(0,0,this.width,this.height),this.context.fillRect(0,0,this.width,this.height)}}class l{constructor(t=0,e,i){c(this,"vec",[0,0,0]);this.vec[0]=t,this.vec[1]=e??t,this.vec[2]=i??t}multiply(t){if(typeof t!="number")return this.set(this.vec[0]*t.x,this.vec[1]*t.y,this.vec[2]*t.z);const e=t;return this.vec[0]*=e,this.vec[1]*=e,this.vec[2]*=e,this}divide(t){return typeof t=="number"?this.multiply(1/t):this.set(this.vec[0]/t.x,this.vec[1]/t.y,this.vec[2]/t.z)}get(t){return t===void 0?this.vec:this.vec[t]}refract(t,e){const i=Math.min(this.clone.negate.dot(t),1);this.copy(t.clone.multiply(i).add(this).multiply(e));const n=Math.abs(1-this.lengthSquared);return this.add(t.multiply(-Math.sqrt(n)))}set(t,e,i){return this.vec[0]=t,this.vec[1]=e,this.vec[2]=i,this}randomHemisphere(t){return this.randomUnitSphere,this.dot(t)>0?this:this.negate}random(t=0,e=1){return this.set(P(t,e),P(t,e),P(t,e))}reflect(t){return this.sub(t.clone.multiply(this.dot(t)*2))}get randomUnitVector(){return this.randomUnitSphere.unitVector}get randomUnitSphere(){for(;;)if(this.random(-1).lengthSquared<1)return this}get lengthSquared(){return this.dot(this)}get randomUnitDisk(){for(;;)if(this.random(-1),this.vec[2]=0,this.lengthSquared<1)return this}cross(t){return this.set(this.vec[1]*t.z-this.vec[2]*t.y,this.vec[2]*t.x-this.vec[0]*t.z,this.vec[0]*t.y-this.vec[1]*t.x)}dot(t){return this.vec[0]*t.x+this.vec[1]*t.y+this.vec[2]*t.z}copy(t){const{x:e,y:i,z:n}=t;return this.set(e,i,n)}add(t){return this.vec[0]+=t.x,this.vec[1]+=t.y,this.vec[2]+=t.z,this}sub(t){return this.vec[0]-=t.x,this.vec[1]-=t.y,this.vec[2]-=t.z,this}get nearZero(){return Math.abs(this.vec[0])<1e-8&&Math.abs(this.vec[1])<1e-8&&Math.abs(this.vec[2])<1e-8}get unitVector(){return this.divide(this.length)}get length(){return Math.sqrt(this.lengthSquared)}get clone(){return new l(this.vec[0],this.vec[1],this.vec[2])}reset(t=0){return this.set(t,t,t)}get print(){const[t,e,i]=this.vec;return`Vector3 { x: ${t}, y: ${e}, z: ${i} }`}get negate(){return this.vec[0]*=-1,this.vec[1]*=-1,this.vec[2]*=-1,this}get sqrt(){return this.set(Math.sqrt(this.vec[0]),Math.sqrt(this.vec[1]),Math.sqrt(this.vec[2]))}get x(){return this.vec[0]}get y(){return this.vec[1]}get z(){return this.vec[2]}}class Ft{constructor(){c(this,"t",0);c(this,"frontFace",!1);c(this,"material");c(this,"point",new l);c(this,"normal",new l)}copy(t){this.frontFace=t.frontFace,this.normal.copy(t.normal),this.point.copy(t.point),this.t=t.t}setFaceNormal(t,e){this.frontFace=t.direction.dot(e)<0,this.normal.copy(this.frontFace?e:e.negate)}}const S=new Ft;class nt{}class Bt extends nt{constructor(e){super();c(this,"objects",[]);e&&this.add(e)}add(e){this.objects.push(e)}hit(e,i,n,r){let h=!1,o=n;for(let a=0,u=this.objects.length;a<u;a++)this.objects[a].hit(e,i,o,S)&&(o=S.t,r.copy(S),h=!0);return h}clear(){this.objects.length=0}}class N{}class j extends N{constructor(e,i){super();c(this,"fuzz");c(this,"albedo");c(this,"direction",new l);this.albedo=e.clone,this.fuzz=Math.min(i,1)}scatter(e,i,n,r){const h=e.direction.unitVector.reflect(i.normal);return this.direction.randomUnitSphere.multiply(this.fuzz).add(h),n.direction=this.direction,n.origin=i.point,r.copy(this.albedo),this.direction.dot(i.normal)>0}}class F extends N{constructor(e){super();c(this,"albedo");c(this,"direction",new l);this.albedo=e.clone}scatter(e,i,n,r){const h=i.normal.add(this.direction.randomUnitVector);return h.nearZero&&h.copy(i.normal),n.direction=h,n.origin=i.point,r.copy(this.albedo),!0}}class H extends N{constructor(t){super(),this.refraction=t}reflectance(t,e){const i=Math.pow((1-e)/(1+e),2);return Math.pow(1-t,5)*(1-i)+i}scatter(t,e,i,n){const r=t.direction.unitVector,h=Math.min(r.clone.negate.dot(e.normal),1),o=e.frontFace?1/this.refraction:this.refraction;return Math.sqrt(1-h*h)*o>1||Math.random()<this.reflectance(h,o)?r.reflect(e.normal):r.refract(e.normal,o),i.direction=r,i.origin=e.point,n.reset(1),!0}}class zt{constructor(){c(this,"hittables",new Bt);c(this,"color",new l);this.addSphere(new l(0,-1e3,0),1e3,new F(new l(.5))),this.generateSmallSpheres(),this.addSphere(new l(0,1,0),1,new H(1.5)),this.addSphere(new l(-4,1,0),1,new F(new l(.4,.2,.1))),this.addSphere(new l(4,1,0),1,new j(new l(.7,.6,.5),0))}addSphere(t,e,i){this.hittables.add(new Ot(t,e,i))}generateSmallSpheres(){for(let t=-11;t<11;t++)for(let e=-11;e<11;e++){const i=new l(Math.random()*.9+t,.2,Math.random()*.9+e),n=new l(4,.2,0);if(i.clone.sub(n).length>.9){const r=Math.random();if(r<.8){this.color.random().multiply(this.color.random());const h=new F(this.color);this.addSphere(i,.2,h)}else if(r<.95){this.color.random(.5);const h=P(0,.5),o=new j(this.color,h);this.addSphere(i,.2,o)}else{const h=new H(1.5);this.addSphere(i,.2,h)}}}}get objects(){return this.hittables}}class Ot extends nt{constructor(t,e,i){super(),this.center=t,this.radius=e,this.material=i}hit(t,e,i,n){const r=t.origin.clone.sub(this.center),h=t.direction.lengthSquared,o=r.dot(t.direction),a=r.lengthSquared-this.radius*this.radius,u=o*o-h*a;if(u<0)return!1;const d=Math.sqrt(u);let f=(-o-d)/h;if((f<e||f>i)&&(f=(-o+d)/h,f<e||f>i))return!1;n.t=f,n.point.copy(t.at(n.t));const x=n.point.clone.sub(this.center).divide(this.radius);return n.setFaceNormal(t,x),n.material=this.material,!0}}class $t{constructor(){c(this,"width",p.Scene.width);c(this,"height",p.Scene.height);c(this,"ratio",this.width/this.height);c(this,"callbacks",[])}addResizeCallback(t){this.callbacks.indexOf(t)===-1&&this.callbacks.push(t)}removeResizeCallback(t){const e=this.callbacks.indexOf(t);e!==-1&&this.callbacks.splice(e,1)}update(t=p.Scene.width,e=p.Scene.height){this.width=t,this.height=e,this.ratio=this.width/this.height;for(let i=this.callbacks.length;i--;)this.callbacks[i](this.width,this.height,this.ratio)}dispose(){this.callbacks.length=0}get size(){return{height:this.height,width:this.width,ratio:this.ratio}}}const Nt=new $t;class Vt{constructor(t,e,i,n,r,h,o){c(this,"u");c(this,"v");c(this,"width");c(this,"height");c(this,"origin");c(this,"vertical");c(this,"lensRadius");c(this,"horizontal");c(this,"random",new l);c(this,"lowerLeftCorner");const a=t.clone.sub(e).unitVector,u=Math.tan(At(n)*.5);this.u=i.cross(a).unitVector,this.v=a.clone.cross(this.u),this.origin=t,this.height=u*2,this.width=r*this.height,this.lensRadius=h*.5,this.horizontal=this.u.clone.multiply(this.width).multiply(o),this.vertical=this.v.clone.multiply(this.height).multiply(o),this.lowerLeftCorner=this.origin.clone.sub(this.horizontal.clone.divide(2)).sub(this.vertical.clone.divide(2)).sub(a.multiply(o))}setRay(t,e,i){const n=this.random.randomUnitDisk.multiply(this.lensRadius),r=this.u.clone.multiply(n.x).add(this.v.clone.multiply(n.y));return t.direction=this.lowerLeftCorner.clone.add(this.horizontal.clone.multiply(e)).add(this.vertical.clone.multiply(i)).sub(this.origin).sub(r),t.origin=r.add(this.origin),t}}class V{constructor(t=new l,e=new l){c(this,"color",new l(1));c(this,"far",1/0);c(this,"near",.001);this.orig=t,this.dir=e}at(t){return this.orig.clone.add(this.dir.clone.multiply(t))}getColor(t,e,i){if(!i)return this.color.reset();if(e.hit(t,this.near,this.far,S)){const r=new l,h=new V;return S.material.scatter(t,S,h,r)?this.getColor(h,e,i-1).multiply(r):this.color.reset()}const n=(t.dir.unitVector.y+1)*.5;return this.color.reset(1).multiply(1-n).add(new l(.5,.7,1).multiply(n))}set direction(t){this.dir.copy(t)}get direction(){return this.dir}set origin(t){this.orig.copy(t)}get origin(){return this.orig}}class rt{constructor(){c(this,"camera");c(this,"world",new zt);c(this,"color",new l);c(this,"width",p.Scene.width);c(this,"height",p.Scene.height);c(this,"depth",p.Scene.maxDepth);c(this,"samples",p.Scene.samples);this.camera=new Vt(new l(13,2,3),new l(0,0,0),new l(0,1,0),20,Nt.size.ratio,.1,10)}createPPMImage(){const t=new Uint8ClampedArray(this.width*this.height*3),e=Date.now(),i=new V;for(let n=0,r=this.height-1,h=this.width-1,o=r;r>-1;r--){console.info(`Progress: ${q((1-r/o)*100)}%`);for(let a=0;a<this.width;a++,n+=3){this.color.reset();for(let x=0;x<this.samples;x++){const M=(a+Math.random())/h,U=(r+Math.random())/o;this.camera.setRay(i,M,U),this.color.add(i.getColor(i,this.world.objects,this.depth))}const{x:u,y:d,z:f}=It(this.color,this.samples);t[n+0]=u,t[n+1]=d,t[n+2]=f}}return console.info(`Time: ${q((Date.now()-e)/1e3)} sec.`),t}}class ot{constructor(t){c(this,"canvas");c(this,"tracer");c(this,"worker");this.canvas=this.createCanvas(t),(this.worker=t.worker)?this.createWorkerEvents():this.tracer=new rt,this.canvas.clear(),this.createPPMImage()}createCanvas(t){switch(t.backEnd){case"webgl2":return new Ut(t);case"webgl":return new it(t);default:return new Dt(t)}}createWorkerEvents(){var t;(t=this.worker)==null||t.add("Create::PPMImage",this.showPPMImage.bind(this))}createPPMImage(t=!1){var e;this.worker?this.worker.post("Create::PPMImage",{download:t}):this.showPPMImage({download:t,pixels:(e=this.tracer)==null?void 0:e.createPPMImage()},!0)}showPPMImage(t,e){const{download:i,pixels:n}=t;i&&this.downloadPPMImage(n,e),this.canvas.drawImage(n)}downloadPPMImage(t,e){let i=`P3
${this.canvas.width} ${this.canvas.height}
255
`;for(let n=0;n<t.length;n+=3)i+=`${t[n]} ${t[n+1]} ${t[n+2]}
`;O.dispatch("Download::PPMImage",{image:i},e)}}self.onerror=s=>console.error(s);self.onmessage=s=>{const{event:t}=s.data;let{params:e}=s.data;const i=new rt;switch(t){case"Transfer::Offscreen":return new ot({offscreen:!0,...e});case"Create::PPMImage":{const n=i.createPPMImage();e={...e,pixels:n};break}}self.postMessage({response:e,name:t})};const Wt=self;class Gt extends CustomEvent{constructor(){super(...arguments);c(this,"data")}}class qt{constructor(){c(this,"target",new EventTarget);c(this,"events",new Map);c(this,"callbacks",new Map)}add(t,e){const i=this.callbacks.get(t);i?i.push(e):this.callbacks.set(t,[e]),this.events.set(t,new Gt(t)),this.target.addEventListener(t,e,!1)}dispatch(t,e){const i=this.events.get(t);i&&(i.data=e,this.target.dispatchEvent(i))}remove(t,e){const i=this.callbacks.get(t);if(i&&e){const n=i.indexOf(e),r=e;n!==-1&&i.splice(n,1),this.target.removeEventListener(t,r,!1)}e||(i==null||i.forEach(n=>this.target.removeEventListener(t,n,!1)),this.callbacks.delete(t),this.events.delete(t))}dispose(){this.callbacks.clear(),this.events.clear()}}class X{constructor(t){this.worker=t}add(t,e){this.worker.add(t,e)}static dispatch(t,e){Wt.postMessage({name:t,response:{data:e}})}remove(t){this.worker.remove(t)}dispose(){this.worker.dispose()}}class jt extends qt{constructor(){super(...arguments);c(this,"offscreen",!1);c(this,"workerEvents")}createWorkerEvents(e,i){this.workerEvents=new X(e),this.offscreen=i}add(e,i){var n;this.offscreen?(n=this.workerEvents)==null||n.add(e,i):super.add(e,i)}dispatch(e,i,n=!1){n?X.dispatch(e,i):super.dispatch(e,i)}remove(e,i){var n;this.offscreen?(n=this.workerEvents)==null||n.remove(e):super.remove(e,i)}dispose(){var e;(e=this.workerEvents)==null||e.dispose(),super.dispose()}}const O=new jt;class Ht{constructor(t){c(this,"client",new Tt);c(this,"worker",new St);c(this,"offscreen",typeof HTMLCanvasElement<"u"&&!!HTMLCanvasElement.prototype.transferControlToOffscreen);O.createWorkerEvents(this.worker,this.offscreen);const{backEnd:e,pixelRatio:i=devicePixelRatio}=p.Scene;O.add("Download::PPMImage",this.downloadPPMImage.bind(this)),this.offscreen?this.worker.transfer(t.transferControlToOffscreen(),{backEnd:e,pixelRatio:i}):new ot({canvas:t,worker:this.worker,backEnd:e,pixelRatio:i})}downloadPPMImage(t){const{image:e}=t.data;this.client.downloadImage(e)}}const Xt=xt("<canvas>"),Yt=()=>{let s;return ut(()=>new Ht(s)),(()=>{const t=Xt(),e=s;return typeof e=="function"?yt(e,t):s=t,R(i=>{const n=p.Scene.height,r=p.Scene.width;return n!==i._v$&&W(t,"height",i._v$=n),r!==i._v$2&&W(t,"width",i._v$2=r),i},{_v$:void 0,_v$2:void 0}),t})()};vt(()=>mt(Yt,{}),document.getElementById("root"));
