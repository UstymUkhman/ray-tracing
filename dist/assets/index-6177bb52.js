(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const dt=(n,e)=>n===e,O={equals:dt};let Le=ke;const C=1,z=2,Fe={owned:null,cleanups:null,context:null,owner:null};var x=null;let Q=null,m=null,b=null,T=null,j=0;function ut(n,e){const t=m,r=x,i=n.length===0,s=i?Fe:{owned:null,cleanups:null,context:null,owner:e===void 0?r:e},a=i?n:()=>n(()=>U(()=>X(s)));x=s,m=null;try{return F(a,!0)}finally{m=t,x=r}}function A(n,e){e=e?Object.assign({},O,e):O;const t={value:n,observers:null,observerSlots:null,comparator:e.equals||void 0},r=i=>(typeof i=="function"&&(i=i(t.value)),Be(t,i));return[Ge.bind(t),r]}function S(n,e,t){const r=le(n,e,!1,C);L(r)}function ft(n,e,t){Le=bt;const r=le(n,e,!1,C);(!t||!t.render)&&(r.user=!0),T?T.push(r):L(r)}function mt(n,e,t){t=t?Object.assign({},O,t):O;const r=le(n,e,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=t.equals||void 0,L(r),Ge.bind(r)}function U(n){if(m===null)return n();const e=m;m=null;try{return n()}finally{m=e}}function pt(n){ft(()=>U(n))}function vt(n){return x===null||(x.cleanups===null?x.cleanups=[n]:x.cleanups.push(n)),n}function Ge(){if(this.sources&&this.state)if(this.state===C)L(this);else{const n=b;b=null,F(()=>q(this),!1),b=n}if(m){const n=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(n)):(m.sources=[this],m.sourceSlots=[n]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function Be(n,e,t){let r=n.value;return(!n.comparator||!n.comparator(r,e))&&(n.value=e,n.observers&&n.observers.length&&F(()=>{for(let i=0;i<n.observers.length;i+=1){const s=n.observers[i],a=Q&&Q.running;a&&Q.disposed.has(s),(a?!s.tState:!s.state)&&(s.pure?b.push(s):T.push(s),s.observers&&Ne(s)),a||(s.state=C)}if(b.length>1e6)throw b=[],new Error},!1)),e}function L(n){if(!n.fn)return;X(n);const e=x,t=m,r=j;m=x=n,gt(n,n.value,r),m=t,x=e}function gt(n,e,t){let r;try{r=n.fn(e)}catch(i){return n.pure&&(n.state=C,n.owned&&n.owned.forEach(X),n.owned=null),n.updatedAt=t+1,Oe(i)}(!n.updatedAt||n.updatedAt<=t)&&(n.updatedAt!=null&&"observers"in n?Be(n,r):n.value=r,n.updatedAt=t)}function le(n,e,t,r=C,i){const s={fn:n,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:x,context:null,pure:t};return x===null||x!==Fe&&(x.owned?x.owned.push(s):x.owned=[s]),s}function W(n){if(n.state===0)return;if(n.state===z)return q(n);if(n.suspense&&U(n.suspense.inFallback))return n.suspense.effects.push(n);const e=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<j);)n.state&&e.push(n);for(let t=e.length-1;t>=0;t--)if(n=e[t],n.state===C)L(n);else if(n.state===z){const r=b;b=null,F(()=>q(n,e[0]),!1),b=r}}function F(n,e){if(b)return n();let t=!1;e||(b=[]),T?t=!0:T=[],j++;try{const r=n();return xt(t),r}catch(r){t||(T=null),b=null,Oe(r)}}function xt(n){if(b&&(ke(b),b=null),n)return;const e=T;T=null,e.length&&F(()=>Le(e),!1)}function ke(n){for(let e=0;e<n.length;e++)W(n[e])}function bt(n){let e,t=0;for(e=0;e<n.length;e++){const r=n[e];r.user?n[t++]=r:W(r)}for(e=0;e<t;e++)W(n[e])}function q(n,e){n.state=0;for(let t=0;t<n.sources.length;t+=1){const r=n.sources[t];if(r.sources){const i=r.state;i===C?r!==e&&(!r.updatedAt||r.updatedAt<j)&&W(r):i===z&&q(r,e)}}}function Ne(n){for(let e=0;e<n.observers.length;e+=1){const t=n.observers[e];t.state||(t.state=z,t.pure?b.push(t):T.push(t),t.observers&&Ne(t))}}function X(n){let e;if(n.sources)for(;n.sources.length;){const t=n.sources.pop(),r=n.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),a=t.observerSlots.pop();r<i.length&&(s.sourceSlots[a]=r,i[r]=s,t.observerSlots[r]=a)}}if(n.owned){for(e=n.owned.length-1;e>=0;e--)X(n.owned[e]);n.owned=null}if(n.cleanups){for(e=n.cleanups.length-1;e>=0;e--)n.cleanups[e]();n.cleanups=null}n.state=0,n.context=null}function Oe(n){throw n}function D(n,e){return U(()=>n(e||{}))}function wt(n,e,t){let r=t.length,i=e.length,s=r,a=0,o=0,h=e[i-1].nextSibling,c=null;for(;a<i||o<s;){if(e[a]===t[o]){a++,o++;continue}for(;e[i-1]===t[s-1];)i--,s--;if(i===a){const l=s<r?o?t[o-1].nextSibling:t[s-o]:h;for(;o<s;)n.insertBefore(t[o++],l)}else if(s===o)for(;a<i;)(!c||!c.has(e[a]))&&e[a].remove(),a++;else if(e[a]===t[s-1]&&t[o]===e[i-1]){const l=e[--i].nextSibling;n.insertBefore(t[o++],e[a++].nextSibling),n.insertBefore(t[--s],l),e[i]=t[s]}else{if(!c){c=new Map;let d=o;for(;d<s;)c.set(t[d],d++)}const l=c.get(e[a]);if(l!=null)if(o<l&&l<s){let d=a,$=1,G;for(;++d<i&&d<s&&!((G=c.get(e[d]))==null||G!==l+$);)$++;if($>l-o){const y=e[a];for(;o<l;)n.insertBefore(t[o++],y)}else n.replaceChild(t[o++],e[a++])}else a++;else e[a++].remove()}}}const Ce="_$DX_DELEGATE";function yt(n,e,t,r={}){let i;return ut(s=>{i=s,e===document?n():g(e,n(),e.firstChild?null:void 0,t)},r.owner),()=>{i(),e.textContent=""}}function P(n,e,t){let r;const i=()=>{const a=document.createElement("template");return a.innerHTML=n,t?a.content.firstChild.firstChild:a.content.firstChild},s=e?()=>(r||(r=i())).cloneNode(!0):()=>U(()=>document.importNode(r||(r=i()),!0));return s.cloneNode=s,s}function St(n,e=window.document){const t=e[Ce]||(e[Ce]=new Set);for(let r=0,i=n.length;r<i;r++){const s=n[r];t.has(s)||(t.add(s),e.addEventListener(s,Et))}}function _(n,e,t){t==null?n.removeAttribute(e):n.setAttribute(e,t)}function J(n,e){e==null?n.removeAttribute("class"):n.className=e}function B(n,e,t){return U(()=>n(e,t))}function g(n,e,t,r){if(t!==void 0&&!r&&(r=[]),typeof e!="function")return V(n,e,r,t);S(i=>V(n,e(),i,t),r)}function Et(n){const e=`$$${n.type}`;let t=n.composedPath&&n.composedPath()[0]||n.target;for(n.target!==t&&Object.defineProperty(n,"target",{configurable:!0,value:t}),Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return t||document}});t;){const r=t[e];if(r&&!t.disabled){const i=t[`${e}Data`];if(i!==void 0?r.call(t,i,n):r.call(t,n),n.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function V(n,e,t,r,i){for(;typeof t=="function";)t=t();if(e===t)return t;const s=typeof e,a=r!==void 0;if(n=a&&t[0]&&t[0].parentNode||n,s==="string"||s==="number")if(s==="number"&&(e=e.toString()),a){let o=t[0];o&&o.nodeType===3?o.data=e:o=document.createTextNode(e),t=R(n,t,r,o)}else t!==""&&typeof t=="string"?t=n.firstChild.data=e:t=n.textContent=e;else if(e==null||s==="boolean")t=R(n,t,r);else{if(s==="function")return S(()=>{let o=e();for(;typeof o=="function";)o=o();t=V(n,o,t,r)}),()=>t;if(Array.isArray(e)){const o=[],h=t&&Array.isArray(t);if(oe(o,e,t,i))return S(()=>t=V(n,o,t,r,!0)),()=>t;if(o.length===0){if(t=R(n,t,r),a)return t}else h?t.length===0?Pe(n,o,r):wt(n,t,o):(t&&R(n),Pe(n,o));t=o}else if(e.nodeType){if(Array.isArray(t)){if(a)return t=R(n,t,r,e);R(n,t,null,e)}else t==null||t===""||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);t=e}else console.warn("Unrecognized value. Skipped inserting",e)}return t}function oe(n,e,t,r){let i=!1;for(let s=0,a=e.length;s<a;s++){let o=e[s],h=t&&t[s],c;if(!(o==null||o===!0||o===!1))if((c=typeof o)=="object"&&o.nodeType)n.push(o);else if(Array.isArray(o))i=oe(n,o,h)||i;else if(c==="function")if(r){for(;typeof o=="function";)o=o();i=oe(n,Array.isArray(o)?o:[o],Array.isArray(h)?h:[h])||i}else n.push(o),i=!0;else{const l=String(o);h&&h.nodeType===3&&h.data===l?n.push(h):n.push(document.createTextNode(l))}}return i}function Pe(n,e,t=null){for(let r=0,i=e.length;r<i;r++)n.insertBefore(e[r],t)}function R(n,e,t,r){if(t===void 0)return n.textContent="";const i=r||document.createTextNode("");if(e.length){let s=!1;for(let a=e.length-1;a>=0;a--){const o=e[a];if(i!==o){const h=o.parentNode===n;!s&&!a?h?n.replaceChild(i,o):n.insertBefore(i,t):h&&o.remove()}else s=!0}}else n.insertBefore(i,t);return[i]}const ee=(n,e=0,t=1)=>Math.max(e,Math.min(n,t)),N=(n,e)=>Math.random()*(e-n)+n,an=n=>n*Math.PI/180,Re=(n,e=3)=>{const t=Math.pow(10,e);return~~(t*n)/t},Tt=1/.06,_t="modulepreload",Ct=function(n,e){return new URL(n,e).href},Ae={},H=function(e,t,r){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=Ct(s,r),s in Ae)return;Ae[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!r)for(let l=i.length-1;l>=0;l--){const d=i[l];if(d.href===s&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":_t,a||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),a)return new Promise((l,d)=>{c.addEventListener("load",l),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},f={maxDepth:50,samples:500,height:240,width:360,log:!1};class p{vec=[0,0,0];constructor(e=0,t=e,r=e){this.vec[0]=e,this.vec[1]=t,this.vec[2]=r}refract(e,t){const r=Math.min(this.clone.negate.dot(e),1);this.copy(e.clone.multiply(r).add(this).multiply(t));const i=Math.abs(1-this.lengthSquared);return this.add(e.multiply(-Math.sqrt(i)))}set(e,t,r){return this.vec[0]=e,this.vec[1]=t,this.vec[2]=r,this}multiply(e){if(typeof e!="number")return this.set(this.vec[0]*e.x,this.vec[1]*e.y,this.vec[2]*e.z);const t=e;return this.vec[0]*=t,this.vec[1]*=t,this.vec[2]*=t,this}divide(e){return typeof e=="number"?this.multiply(1/e):this.set(this.vec[0]/e.x,this.vec[1]/e.y,this.vec[2]/e.z)}random(e=0,t=1){return this.set(N(e,t),N(e,t),N(e,t))}reflect(e){return this.sub(e.clone.multiply(this.dot(e)*2))}get randomNormalized(){return this.randomUnitSphere.normalize}get randomUnitSphere(){for(;;)if(this.random(-1).lengthSquared<1)return this}get lengthSquared(){return this.dot(this)}get randomUnitDisk(){for(;;)if(this.random(-1),this.vec[2]=0,this.lengthSquared<1)return this}cross(e){return this.set(this.vec[1]*e.z-this.vec[2]*e.y,this.vec[2]*e.x-this.vec[0]*e.z,this.vec[0]*e.y-this.vec[1]*e.x)}dot(e){return this.vec[0]*e.x+this.vec[1]*e.y+this.vec[2]*e.z}copy(e){const{x:t,y:r,z:i}=e;return this.set(t,r,i)}add(e){return this.vec[0]+=e.x,this.vec[1]+=e.y,this.vec[2]+=e.z,this}sub(e){return this.vec[0]-=e.x,this.vec[1]-=e.y,this.vec[2]-=e.z,this}get nearZero(){return Math.abs(this.vec[0])<1e-8&&Math.abs(this.vec[1])<1e-8&&Math.abs(this.vec[2])<1e-8}get normalize(){return this.divide(this.length)}get length(){return Math.sqrt(this.lengthSquared)}get clone(){return new p(this.vec[0],this.vec[1],this.vec[2])}reset(e=0){return this.set(e,e,e)}get negate(){return this.multiply(-1)}get sqrt(){return this.set(Math.sqrt(this.vec[0]),Math.sqrt(this.vec[1]),Math.sqrt(this.vec[2]))}get rgb(){return this.set(ee(this.vec[0]*256|0,0,255),ee(this.vec[1]*256|0,0,255),ee(this.vec[2]*256|0,0,255))}get x(){return this.vec[0]}get y(){return this.vec[1]}get z(){return this.vec[2]}get(){return[...this.vec]}}const ze=(n,e=1)=>new Map([["r",n>>16&e],["g",n>>8&e],["b",n&e]]),Pt=(n,e)=>n.divide(e).sqrt.rgb,Rt=n=>`#${`000000${n.toString(16)}`.slice(-6)}`,cn=(n,e,t)=>{const r=new p;for(let i=0;i<n.length;i+=3){const{x:s,y:a,z:o}=Pt(r.set(n[i],n[i+1],n[i+2]),t);e[i]=s,e[i+1]=a,e[i+2]=o}return e};class he{textureData;context;image;clearColor=0;height;width;constructor(e){const{canvas:t,context:r,offscreen:i}=e;this.width=t.width,this.height=t.height,this.context=t.getContext(this.getContextId(r),this.getOptions(r,i)),this.textureData=new Uint8ClampedArray(this.width*this.height*4),this.image=new ImageData(this.textureData,this.width,this.height)}getContextId(e){switch(e){case"WebGPU":return"webgpu";case"WebGL2":return"webgl2";case"WebGL":return"webgl";default:return"2d"}}getOptions(e,t=!1){switch(e){case"WebGPU":return;case"Canvas2D":return{willReadFrequently:!t,desynchronized:t,colorSpace:"srgb",alpha:!1};default:return{powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,desynchronized:!t,premultipliedAlpha:!1,antialias:!0,stencil:!1,depth:!1,alpha:!0}}}setImageData(e){for(let t=0,r=0;t<e.length;t+=3,r+=4)this.image.data[r]=e[t],this.image.data[r+1]=e[t+1],this.image.data[r+2]=e[t+2],this.image.data[r+3]=255}}var At=`struct VertexOutput {
  @location(0) coords: vec2f,
  @builtin(position) position: vec4f
};

@group(0) @binding(0) var texture: texture_2d<f32>;
@group(0) @binding(1) var textureSampler: sampler;

@vertex
fn mainVert(@builtin(vertex_index) index: u32) -> VertexOutput
{
  let position = array(
    vec2f(0.0,  1.0),
    vec2f(1.0,  1.0),
    vec2f(0.0,  0.0),

    vec2f(0.0,  0.0),
    vec2f(1.0,  0.0),
    vec2f(1.0,  1.0)
  );

  var output: VertexOutput;
  let coords = position[index];

  output.position = vec4f(coords * 2 - 1, 0, 1);
  output.coords = coords;

  return output;
}

@fragment
fn mainFrag(@location(0) coords: vec2f) -> @location(0) vec4f
{
  return textureSample(texture, textureSampler, coords);
}`;class We extends he{device;adapter;format;imageTexture;imageBindGroup;imagePipeline;tracerPipeline;constructor(e,t,r=At){super(e),this.initializeWebGPU().then(this.createRenderPipeline.bind(this,r,e.tracer,t)).catch(i=>u.dispatch("WebGPU::Init::Fail",i.message))}async initializeWebGPU(){if(!navigator.gpu)throw new Error("WebGPU is not supported on this browser.");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance",forceFallbackAdapter:!1});if(e)this.adapter=e;else throw new Error("No appropriate GPUAdapter found.");if(!this.context)throw new Error("Failed to initialize WebGPU context.");this.device=await this.adapter.requestDevice(),this.format=navigator.gpu.getPreferredCanvasFormat(),this.context.configure({device:this.device,format:this.format})}createRenderPipeline(e,t,r){this.clear(),t==="WebGPU"?this.createTracerPipeline(e):this.createImagePipeline(e),r?.()}createTracerPipeline(e){const t=this.device.createShaderModule({label:"Tracer Shader",code:e});this.tracerPipeline=this.device.createRenderPipeline({label:"Tracer Pipeline",layout:"auto",vertex:{entryPoint:"mainVert",module:t},fragment:{targets:[{format:this.format}],entryPoint:"mainFrag",module:t}})}createImagePipeline(e){const{width:t,height:r}=f,i=this.device.createSampler({addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",minFilter:"nearest",magFilter:"nearest"});this.imageTexture=this.device.createTexture({label:"CPU Computed Image",size:[t,r],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const s=this.device.createShaderModule({label:"Main Shader",code:e});this.imagePipeline=this.device.createRenderPipeline({label:"Image Pipeline",layout:"auto",vertex:{entryPoint:"mainVert",module:s},fragment:{targets:[{format:this.format}],entryPoint:"mainFrag",module:s}}),this.imageBindGroup=this.device.createBindGroup({layout:this.imagePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.imageTexture.createView()},{binding:1,resource:i}]})}setActiveTexture(e){const{width:t,height:r}=f;this.setImageData(e),this.device.queue.copyExternalImageToTexture({source:this.image,flipY:!0},{texture:this.imageTexture},{width:t,height:r});const i=this.device.createCommandEncoder({label:"Renderer Command Encoder"}),s=i.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),storeOp:"store",loadOp:"clear"}]});s.setBindGroup(0,this.imageBindGroup),s.setPipeline(this.imagePipeline),s.draw(6),s.end(),this.device.queue.submit([i.finish()])}drawImage(e){if(e)return this.setActiveTexture(e);const t=this.device.createCommandEncoder({label:"Renderer Command Encoder"}),r=t.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),storeOp:"store",loadOp:"clear"}]});r.setPipeline(this.tracerPipeline),r.draw(6),r.end(),this.device.queue.submit([t.finish()])}clear(){const e=this.device.createCommandEncoder(),t=ze(this.clearColor,1),r=t.get("r")??0,i=t.get("g")??0,s=t.get("b")??0;e.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:[r,i,s,1],storeOp:"store",loadOp:"clear"}]}).end(),this.device.queue.submit([e.finish()])}get ready(){return!!this.imagePipeline}}class de{}class Ut{t=0;frontFace=!1;material;point=new p;normal=new p;setFaceNormal(e,t){this.frontFace=e.direction.dot(t)<0,this.normal.copy(this.frontFace?t:t.negate)}}const v=new Ut;class qe{}class $t extends qe{objects=[];constructor(){super()}add(e){this.objects.push(e)}hit(e,t,r){let i=!1,s=r;for(let a=0,o=this.objects.length;a<o;a++)this.objects[a].hit(e,t,s)&&(s=v.t,i=!0);return i}get hittables(){return this.objects}dispose(){this.objects.length=0}}class It{list=new $t;color=new p;constructor(){this.addSphere(1e3,new p(0,-1e3,0),new te(new p(.5))),this.generateSmallSpheres(),this.addSphere(1,new p(0,1,0),new ce(1.5)),this.addSphere(1,new p(-4,1,0),new te(new p(.4,.2,.1))),this.addSphere(1,new p(4,1,0),new ae(new p(.7,.6,.5),0))}addSphere(e,t,r){this.list.add(new Mt(e,t,r))}generateSmallSpheres(){for(let e=-11;e<11;e++)for(let t=-11;t<11;t++){const r=new p(Math.random()*.9+e,.2,Math.random()*.9+t),i=new p(4,.2,0);if(r.clone.sub(i).length>.9){const s=Math.random();if(s<.8){this.color.random().multiply(this.color.random());const a=new te(this.color);this.addSphere(.2,r,a)}else if(s<.95){this.color.random(.5);const a=N(0,.5),o=new ae(this.color,a);this.addSphere(.2,r,o)}else{const a=new ce(1.5);this.addSphere(.2,r,a)}}}}get hittables(){return this.list.hittables}get objects(){return this.list}dispose(){this.list.dispose(),this.color.reset()}}class Mt extends qe{constructor(e,t,r){super(),this.radius=e,this.center=t,this.material=r}hit(e,t,r){const i=e.origin.clone.sub(this.center),s=e.direction.lengthSquared,a=i.dot(e.direction),o=i.lengthSquared-this.radius*this.radius,h=a*a-s*o;if(h<0)return!1;const c=Math.sqrt(h);let l=(-a-c)/s;if((l<t||l>r)&&(l=(-a+c)/s,l<t||l>r))return!1;v.point.copy(e.at(l));const d=v.point.clone.sub(this.center).divide(this.radius);return v.setFaceNormal(e,d),v.material=this.material,v.t=l,!0}}class ae extends de{fuzz;albedo;direction=new p;constructor(e,t){super(),this.albedo=e.clone,this.fuzz=Math.min(t,1)}scatter(e,t,r){const i=e.direction.normalize.reflect(v.normal);return this.direction.randomUnitSphere.multiply(this.fuzz).add(i),t.direction=this.direction,t.origin=v.point,r.copy(this.albedo),this.direction.dot(v.normal)>0}}class te extends de{albedo;direction=new p;constructor(e){super(),this.albedo=e.clone}scatter(e,t,r){const i=v.normal.clone.add(this.direction.randomNormalized);return i.nearZero&&i.copy(v.normal),t.direction=i,t.origin=v.point,r.copy(this.albedo),!0}}class ce extends de{constructor(e){super(),this.refraction=e}reflectance(e,t){const r=Math.pow((1-t)/(1+t),2);return Math.pow(1-e,5)*(1-r)+r}scatter(e,t,r){const i=e.direction.normalize,s=Math.min(i.clone.negate.dot(v.normal),1),a=v.frontFace?1/this.refraction:this.refraction;return Math.sqrt(1-s*s)*a>1||Math.random()<this.reflectance(s,a)?i.reflect(v.normal):i.refract(v.normal,a),t.direction=i,t.origin=v.point,r.reset(1),!0}}const Dt=`#ifndef GL_FRAGMENT_PRECISION_HIGH
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
`,Lt=`precision mediump float;

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
`;class Ve extends he{texture;program;constructor(e,t=Dt,r=Lt){super(e),this.createProgram(t,r),this.createScene(),this.clear()}loadShader(e,t){const r=this.context.createShader(t);return this.context.shaderSource(r,e),this.context.compileShader(r),this.context.getShaderParameter(r,this.context.COMPILE_STATUS)?r:(console.error(`An error occurred compiling the shaders: ${this.context.getShaderInfoLog(r)}`),this.context.deleteShader(r))}setBufferData(e=this.width,t=this.height){this.context.bufferData(this.context.ARRAY_BUFFER,new Float32Array([0,0,e,0,0,t,0,t,e,0,e,t]),this.context.STATIC_DRAW)}createProgram(e,t){const r=this.loadShader(e,this.context.FRAGMENT_SHADER),i=this.loadShader(t,this.context.VERTEX_SHADER);if(this.program=this.context.createProgram(),i&&r&&(this.context.attachShader(this.program,r),this.context.attachShader(this.program,i),this.context.linkProgram(this.program)),!this.context.getProgramParameter(this.program,this.context.LINK_STATUS))return console.error(`Unable to initialize shader program: ${this.context.getProgramInfoLog(this.program)}`);this.context.clear(this.context.COLOR_BUFFER_BIT);const s=ze(this.clearColor,1),a=s.get("r")??0,o=s.get("g")??0,h=s.get("b")??0;this.context.clearColor(a,o,h,1),this.context.useProgram(this.program)}setTextureParameters(){this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_S,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_T,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MIN_FILTER,this.context.NEAREST),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MAG_FILTER,this.context.NEAREST)}setActiveTexture(e=this.textureData,t=this.texture){this.context.activeTexture(this.context.TEXTURE0),this.context.bindTexture(this.context.TEXTURE_2D,t),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.RGB,this.width,this.height,0,this.context.RGB,this.context.UNSIGNED_BYTE,e)}createScene(){const e=this.context.getAttribLocation(this.program,"coords");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(1,1),this.context.enableVertexAttribArray(e),this.context.vertexAttribPointer(e,2,this.context.FLOAT,!1,0,0);const t=this.context.getAttribLocation(this.program,"position");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(),this.context.enableVertexAttribArray(t),this.context.vertexAttribPointer(t,2,this.context.FLOAT,!1,0,0);const r=this.context.getUniformLocation(this.program,"resolution");this.context.uniform2f(r,this.width,this.height),this.texture=this.context.createTexture(),this.setBufferData(),this.setActiveTexture(),this.setTextureParameters()}drawImage(e){this.setActiveTexture(e),this.context.drawArrays(this.context.TRIANGLES,0,6)}clear(){this.context.clear(this.context.COLOR_BUFFER_BIT)}}var Ft=`#version 300 es

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
}`,Ue=`#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

uniform vec2 resolution;

in  vec2 position;
in  vec2 coords;
out vec2 uv;

#ifdef CAMERA
  struct Ray
{
  vec3 origin;
  vec3 direction;
};

vec3 at (in Ray ray, in float t)
{
  return ray.origin + ray.direction * t;
}
struct Config
{
  float width;
  float height;
  uint samples;
  uint maxDepth;
}

config = Config(
  360.0,
  240.0,
  500u,
  50u
);
#define INFINITY 1.0 / 0.0
#define PI 3.14159265358979323846

float random (in vec2 seed) {
  return fract(sin(dot(seed.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float random (in vec2 seed, in float mi, in float ma) {
  return random(seed) * (ma - mi) + mi;
}

float degToRad (in float deg) {
  return deg * PI / 180.0;
}

bool nearZero (in vec3 vec) {
  return (abs(vec.x) < 1e-8) &&
    (abs(vec.y) < 1e-8) &&
    (abs(vec.z) < 1e-8);
}

vec3 randomVec (in vec2 seed) {
  return vec3(
    random(seed * 0.123),
    random(seed * 0.456),
    random(seed * 0.789)
  );
}

vec3 randomVec (in vec2 seed, in float mi, in float ma) {
  return vec3(
    random(seed * 0.123, mi, ma),
    random(seed * 0.456, mi, ma),
    random(seed * 0.789, mi, ma)
  );
}

float lengthSquared (in vec3 vec) {
  return dot(vec, vec);
}

vec3 randomUnitDisk (in vec2 seed) {
  
  

  
  float rand = random(seed * 0.02468);
  float x = rand * 2.0 - 1.0;
  float y = random(seed * 0.13579, -2.0, 2.0) *
    sqrt(rand * -rand + rand);

  return vec3(x, y, 0.0);
}

vec3 randomUnitSphere (in vec2 seed) {
  for ( ; ; ) {
    vec3 rand = randomVec(seed, -1.0, 1.0);
    if (lengthSquared(rand) < 1.0) return rand;
  }
}

vec3 randomNormalized (in vec2 seed) {
  return normalize(randomUnitSphere(seed));
}

vec3 randomHemisphere (in vec3 normal, in vec2 seed) {
  vec3 unitSphere = randomUnitSphere(seed);

  return dot(unitSphere, normal) > 0.0
    ? unitSphere : -unitSphere;
}

struct Camera
{
  vec3 u;
  vec3 v;
  vec3 origin;
  vec3 vertical;
  vec3 horizontal;
  float lensRadius;
  vec3 lowerLeftCorner;
};

Camera createCamera (
  const in vec3 origin,
  const in vec3 lookAt,
  const in vec3 vUp,
  const in vec2 res,
  const in float fov,
  const in float aperture,
  const in float focusDist
) {
  float height = tan(degToRad(fov) * 0.5) * 2.0;
  float width = res.x / res.y * height;

  vec3 w = normalize(origin - lookAt);
  vec3 u = normalize(cross(vUp, w));
  vec3 v = cross(w, u);

  vec3 vertical = v * height * focusDist;
  vec3 horizontal = u * width * focusDist;

  return Camera(
    u,
    v,
    origin,
    vertical,
    horizontal,
    aperture * 0.5,
    origin -
      horizontal * 0.5 -
      vertical * 0.5 -
      focusDist * w
  );
}

Ray getRay (Camera camera, in float s, in float t, in vec2 seed)
{
  vec3 randomDisk = randomUnitDisk(seed) * camera.lensRadius;
  vec3 offset = camera.u * randomDisk.x + camera.v * randomDisk.y;

  return Ray(
    camera.origin + offset,
    camera.lowerLeftCorner +
    camera.horizontal * s +
    camera.vertical * t -
    camera.origin -
    offset
  );
}

  out Camera camera;
#endif

void main (void)
{
  #ifdef CAMERA
    vec2 res = vec2(config.width, config.height);

    camera = createCamera(
      vec3(13.0, 2.0, 3.0),
      vec3(0.0, 0.0, 0.0),
      vec3(0.0, 1.0, 0.0),
      res,
      20.0,
      0.1,
      10.0
    );
  #endif

  gl_Position = vec4((
    position / resolution * 2.0 - 1.0
  ) * vec2(1.0, -1.0), 0.0, 1.0);

  uv = coords;
}`;class He extends Ve{samples=0;texture1;texture2;frameBuffer1;frameBuffer2;draw=this.drawImage.bind(this,void 0);samplesUniform;constructor(e,t=Ft){if(e.tracer!=="WebGL2")super(e,t,Ue);else{const r=new It,i=r.hittables.length;super(e,t.replace("#version 300 es",`#version 300 es
#define SPHERES ${i}u`),Ue.replace("#version 300 es",`#version 300 es
#define CAMERA`)),this.createWorld(r),this.createFrameBufferTextures(),this.samplesUniform=this.context.getUniformLocation(this.program,"samples")}}bindFrameBufferTextures(e,t){this.context.bindFramebuffer(this.context.FRAMEBUFFER,e),this.context.framebufferTexture2D(this.context.FRAMEBUFFER,this.context.COLOR_ATTACHMENT0,this.context.TEXTURE_2D,t,0)}createWorld(e){const t=[];for(let r=0,i=e.hittables.length;r<i;r++){const s=e.hittables[r],a={albedo:[1,1,1],extra:-1,type:0};s.material instanceof ae?(a.albedo=s.material.albedo.get(),a.extra=s.material.fuzz,a.type=1):s.material instanceof ce?(a.extra=s.material.refraction,a.type=2):a.albedo=s.material.albedo.get(),t.push({center:s.center.get(),radius:s.radius,material:a})}e.dispose(),this.updateUniforms(t)}createFrameBufferTextures(){this.texture1=this.context.createTexture(),this.setActiveTexture(this.textureData,this.texture1),this.setTextureParameters(),this.texture2=this.context.createTexture(),this.setActiveTexture(null,this.texture2),this.setTextureParameters(),this.frameBuffer1=this.context.createFramebuffer(),this.bindFrameBufferTextures(this.frameBuffer1,this.texture1),this.frameBuffer2=this.context.createFramebuffer(),this.bindFrameBufferTextures(this.frameBuffer2,this.texture2)}updateUniforms(e){for(let t=0,r=e.length;t<r;t++){const i=this.context.getUniformLocation(this.program,`spheres[${t}].transform`),s=this.context.getUniformLocation(this.program,`spheres[${t}].material`);this.context.uniform4fv(i,[...e[t].center,e[t].radius]),this.context.uniform4fv(s,[...e[t].material.albedo,e[t].material.extra])}}drawImage(e){if(e)return super.drawImage(e);this.context.uniform1ui(this.samplesUniform,++this.samples),this.samples<f.samples&&requestAnimationFrame(this.draw),this.context.bindFramebuffer(this.context.FRAMEBUFFER,this.frameBuffer2),this.context.bindTexture(this.context.TEXTURE_2D,this.texture1),this.context.drawArrays(this.context.TRIANGLES,0,6),this.context.bindFramebuffer(this.context.FRAMEBUFFER,null),this.context.bindTexture(this.context.TEXTURE_2D,this.texture2),this.context.drawArrays(this.context.TRIANGLES,0,6);const t=this.frameBuffer1;this.frameBuffer1=this.frameBuffer2,this.frameBuffer2=t;const r=this.texture1;this.texture1=this.texture2,this.texture2=r,u.dispatch("WebGL2::Stats::Update",{sample:this.samples})}}class Gt extends he{constructor(e){super(e),this.clear(),this.context.imageSmoothingEnabled=!0,this.context.imageSmoothingQuality="high",this.image=this.context.getImageData(0,0,this.width,this.height)}drawImage(e){this.setImageData(e),this.context.putImageData(this.image,0,0)}clear(){this.context.fillStyle=Rt(this.clearColor),this.context.clearRect(0,0,this.width,this.height),this.context.fillRect(0,0,this.width,this.height)}}class je{sample=0;trace;format;collect;tracer;context;f32=new Float32Array(f.width*f.height*3);u8=new Uint8ClampedArray(f.width*f.height*3);canvas;worker;samples=f.samples;constructor(e){this.canvas=this.createCanvas(e),this.tracer=this.getTracer(e),this.context=e.context,(this.worker=e.worker)?this.createWorkerEvents():this.loadTracer()}createCanvas(e){switch(e.context){case"WebGPU":return new We(e,e.worker?this.onCreateTracer.bind(this):this.onLoadTracer.bind(this));case"WebGL2":return new He(e);case"WebGL":return new Ve(e);default:return new Gt(e)}}getTracer(e){return e.tracer!=="AssemblyScript"?"TypeScript":"AssemblyScript"}createWorkerEvents(){this.worker?.post("Create::Tracer",{tracer:this.tracer}),this.worker?.add("Create::Tracer",this.onCreateTracer.bind(this))}onCreateTracer(){this.canvasContextReady&&(this.worker?.add("Create::PPMImage",this.showPPMImage.bind(this)),u.dispatch(`${this.tracer}::Start`),this.createPPMImage())}loadTracer(){(this.tracer==="AssemblyScript"?H(()=>import("./release-362faf06.js"),[],import.meta.url):H(()=>import("./Tracer-8e25e67e.js"),[],import.meta.url)).then(({trace:e,format:t,collect:r})=>{this.collect=r,this.format=t,this.trace=e,this.onLoadTracer()})}onLoadTracer(){this.canvasContextReady&&(u.dispatch(`${this.tracer}::Start`,null,!0),this.createPPMImage())}createPPMImage(e=!1){if(this.worker)return this.worker.post("Create::PPMImage",{download:e});this.tracer==="AssemblyScript"?(this.f32=Float32Array.from(this.trace(this.f32)),this.u8=Uint8ClampedArray.from(this.format(this.f32,this.u8,++this.sample)),!(this.sample%100)&&this.collect()):this.format(this.trace(this.f32),this.u8,++this.sample),this.showPPMImage({pixels:this.u8,sample:this.sample,download:e},!0)}showPPMImage(e,t){const r=e;this.canvas.drawImage(r.pixels),this.samples===r.sample||!(this.worker?r.sample:this.sample)?r.download&&this.downloadPPMImage(r.pixels,t):setTimeout(this.createPPMImage.bind(this,r.download),Tt),u.dispatch(`${this.tracer}::Stats::Update`,{sample:r.sample},t)}downloadPPMImage(e,t){let r=`P3
${this.canvas.width} ${this.canvas.height}
255
`;for(let i=0;i<e.length;i+=3)r+=`${e[i]} ${e[i+1]} ${e[i+2]}
`;u.dispatch("PPMImage::Download",{image:r},t)}get canvasContextReady(){return this.context==="WebGPU"?this.canvas.ready:!0}}var Bt=`struct Config {
  height: u32,
  width: u32
};

const config = Config(
  240,
  360
);

struct VertexOutput {
  @location(0) coords: vec2f,
  @builtin(position) position: vec4f
};

@vertex
fn mainVert(@builtin(vertex_index) index: u32) -> VertexOutput
{
  let position = array(
    vec2f(0.0,  1.0),
    vec2f(1.0,  1.0),
    vec2f(0.0,  0.0),

    vec2f(0.0,  0.0),
    vec2f(1.0,  0.0),
    vec2f(1.0,  1.0)
  );

  var output: VertexOutput;
  let coords = position[index];

  output.position = vec4f(coords * 2 - 1, 0, 1);
  output.coords = coords;

  return output;
}

@fragment
fn mainFrag(@location(0) coords: vec2f) -> @location(0) vec4f
{
  return vec4f(coords, 0.25, 1.0);
}`,kt=`#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

struct Ray
{
  vec3 origin;
  vec3 direction;
};

vec3 at (in Ray ray, in float t)
{
  return ray.origin + ray.direction * t;
}
struct Config
{
  float width;
  float height;
  uint samples;
  uint maxDepth;
}

config = Config(
  360.0,
  240.0,
  500u,
  50u
);
#define INFINITY 1.0 / 0.0
#define PI 3.14159265358979323846

float random (in vec2 seed) {
  return fract(sin(dot(seed.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float random (in vec2 seed, in float mi, in float ma) {
  return random(seed) * (ma - mi) + mi;
}

float degToRad (in float deg) {
  return deg * PI / 180.0;
}

bool nearZero (in vec3 vec) {
  return (abs(vec.x) < 1e-8) &&
    (abs(vec.y) < 1e-8) &&
    (abs(vec.z) < 1e-8);
}

vec3 randomVec (in vec2 seed) {
  return vec3(
    random(seed * 0.123),
    random(seed * 0.456),
    random(seed * 0.789)
  );
}

vec3 randomVec (in vec2 seed, in float mi, in float ma) {
  return vec3(
    random(seed * 0.123, mi, ma),
    random(seed * 0.456, mi, ma),
    random(seed * 0.789, mi, ma)
  );
}

float lengthSquared (in vec3 vec) {
  return dot(vec, vec);
}

vec3 randomUnitDisk (in vec2 seed) {
  
  

  
  float rand = random(seed * 0.02468);
  float x = rand * 2.0 - 1.0;
  float y = random(seed * 0.13579, -2.0, 2.0) *
    sqrt(rand * -rand + rand);

  return vec3(x, y, 0.0);
}

vec3 randomUnitSphere (in vec2 seed) {
  for ( ; ; ) {
    vec3 rand = randomVec(seed, -1.0, 1.0);
    if (lengthSquared(rand) < 1.0) return rand;
  }
}

vec3 randomNormalized (in vec2 seed) {
  return normalize(randomUnitSphere(seed));
}

vec3 randomHemisphere (in vec3 normal, in vec2 seed) {
  vec3 unitSphere = randomUnitSphere(seed);

  return dot(unitSphere, normal) > 0.0
    ? unitSphere : -unitSphere;
}

struct Camera
{
  vec3 u;
  vec3 v;
  vec3 origin;
  vec3 vertical;
  vec3 horizontal;
  float lensRadius;
  vec3 lowerLeftCorner;
};

Camera createCamera (
  const in vec3 origin,
  const in vec3 lookAt,
  const in vec3 vUp,
  const in vec2 res,
  const in float fov,
  const in float aperture,
  const in float focusDist
) {
  float height = tan(degToRad(fov) * 0.5) * 2.0;
  float width = res.x / res.y * height;

  vec3 w = normalize(origin - lookAt);
  vec3 u = normalize(cross(vUp, w));
  vec3 v = cross(w, u);

  vec3 vertical = v * height * focusDist;
  vec3 horizontal = u * width * focusDist;

  return Camera(
    u,
    v,
    origin,
    vertical,
    horizontal,
    aperture * 0.5,
    origin -
      horizontal * 0.5 -
      vertical * 0.5 -
      focusDist * w
  );
}

Ray getRay (Camera camera, in float s, in float t, in vec2 seed)
{
  vec3 randomDisk = randomUnitDisk(seed) * camera.lensRadius;
  vec3 offset = camera.u * randomDisk.x + camera.v * randomDisk.y;

  return Ray(
    camera.origin + offset,
    camera.lowerLeftCorner +
    camera.horizontal * s +
    camera.vertical * t -
    camera.origin -
    offset
  );
}
#define LAMBERTIAN 0u
#define METAL      1u
#define DIELECTRIC 2u

struct Record
{
  float t;
  vec3 point;
  vec3 normal;
  vec4 material;
  bool frontFace;
} record;

void setFaceNormal (
  const in Ray ray,
  const in vec3 outwardNormal
) {
  record.frontFace = dot(ray.direction, outwardNormal) < 0.0;
  record.normal = record.frontFace ? outwardNormal : -outwardNormal;
}

struct Sphere
{
  
  
  vec4 transform;

  
  
  
  
  
  vec4 material;
};

bool sphereHit (
  const in Ray ray,
  const in float tMin,
  const in float tMax,
  const in Sphere sphere
) {
  vec3 oc = ray.origin - sphere.transform.xyz;

  float a = lengthSquared(ray.direction);
  float halfB = dot(oc, ray.direction);
  float radius = sphere.transform.w;

  float c = lengthSquared(oc) - radius * radius;
  float d = halfB * halfB - a * c;

  if (d < 0.0) return false;

  float sqrtD = sqrt(d);
  float root = (-halfB - sqrtD) / a;

  if (root < tMin || root > tMax) {
    root = (-halfB + sqrtD) / a;

    if (root < tMin || root > tMax)
      return false;
  }

  record.t = root;
  record.point = at(ray, root);
  record.material = sphere.material;
  setFaceNormal(ray, (record.point - sphere.transform.xyz) / radius);

  return true;
}

struct Hittable
{
  Sphere objects[SPHERES];
  uint length;
} list;

void addObject (const in Sphere object)
{
  list.objects[list.length++] = object;
}

bool hitObject (
  const in Ray ray,
  const in float tMin,
  const in float tMax
) {
  bool hit = false;
  float closest = tMax;

  for (uint o = 0u, l = list.length; o < l; ++o) {
    Sphere sphere = list.objects[o];

    if (sphereHit(ray, tMin, closest, sphere)) {
      closest = record.t;
      hit = true;
    }
  }

  return hit;
}
bool metalScatter (
  out vec3 attenuation,
  out Ray scattered,
  in vec4 material,
  in vec2 seed,
  in Ray ray
) {
  vec3 reflected = reflect(normalize(ray.direction), record.normal);
  reflected += randomUnitSphere(seed) * material.a;

  scattered = Ray(record.point, reflected);
  attenuation = material.rgb;

  return dot(scattered.direction, record.normal) > 0.0;
}
float reflectance (in float cosine, in float ratio)
{
  float reflectance = (1.0 - ratio) / (1.0 + ratio);
  reflectance = reflectance * reflectance;
  return pow((1.0 - cosine), 5.0) * (1.0 - reflectance) + reflectance;
}

bool dielectricScatter (
  out vec3 attenuation,
  out Ray scattered,
  in vec4 material,
  in vec2 seed,
  in Ray ray
) {
  vec3 direction = normalize(ray.direction);
  float tCos = min(dot(-direction, record.normal), 1.0);
  float ratio = record.frontFace ? 1.0 / material.a : material.a;

  bool willReflect =
    sqrt(1.0 - tCos * tCos) * ratio > 1.0 ||
    random(seed) < reflectance(tCos, ratio);

  direction = willReflect
    ? reflect(direction, record.normal)
    : refract(direction, record.normal, ratio);

  scattered = Ray(record.point, direction);
  attenuation = material.rgb;

  return true;
}
bool lambertianScatter (
  out vec3 attenuation,
  out Ray scattered,
  in vec4 material,
  in vec2 seed
) {
  vec3 direction = record.normal + randomNormalized(seed);
  if (nearZero(direction)) direction = record.normal;

  scattered = Ray(record.point, direction);
  attenuation = material.rgb;

  return true;
}

#define WHITE vec3(1.0, 1.0, 1.0)
#define SKY vec3(0.5, 0.7, 1.0)

vec3 skyColor (in Ray ray)
{
  vec3 direction = normalize(ray.direction);
  float t = (direction.y + 1.0) * 0.5;

  return (1.0 - t) * WHITE + SKY * t;
}

vec3 getColor (in Ray ray, uint depth, in vec2 seed)
{
  vec3 color = WHITE;

  for (uint d = depth; d > 0u; --d)
  {
    if (hitObject(ray, 0.001, INFINITY))
    {
      Ray scattered;
      vec3 attenuation;
      bool scatter = false;

      scatter = record.material.a > 1.0
        ? dielectricScatter(attenuation, scattered, record.material, seed, ray)
        : record.material.a > -1.0
          ? metalScatter(attenuation, scattered, record.material, seed, ray)
          : lambertianScatter(attenuation, scattered, record.material, seed);

      if (scatter) {
        color *= attenuation;
        ray = scattered;
      }
    }

    else {
      color *= skyColor(ray);
      break;
    }
  }

  return color;
}

void inputColor (inout vec3 color, const in uint samples)
{
  color *= color;
  color *= float(samples - 1u);
}

void outputColor (inout vec3 color, const in uint samples)
{
  color /= float(samples);
  color = sqrt(color);
}

in  vec2 uv;
in  Camera camera;
out vec4 fragColor;

uniform uint samples;
uniform sampler2D frame;
uniform Sphere spheres[SPHERES];

void addSpheres (void)
{
  for (uint s = 0u; s < SPHERES; s++)
    addObject(Sphere(spheres[s].transform, spheres[s].material));
}

void main (void)
{
  vec2 mappedUV = vec2(uv.x, 1.0 - uv.y);
  vec3 color = texture(frame, mappedUV).rgb;
  vec2 res = vec2(config.width, config.height);

  addSpheres();
  inputColor(color, samples);

  vec2 coord = mappedUV * res;
  vec2 seed = uv * coord * float(samples);

  float u = (coord.x + random(seed)) / res.x;
  float v = (coord.y + random(seed)) / res.y;

  Ray ray = getRay(camera, u, v, seed);
  color += getColor(ray, config.maxDepth, seed);

  outputColor(color, samples);
  fragColor = vec4(color, 1.0);
}`;class Nt{canvas;constructor(e){u.dispatch(`${e.tracer}::Start`),this.canvas=this.createCanvas(e)}createCanvas(e){switch(e.context){case"WebGPU":return new We(e,this.onContextReady.bind(this),Bt);default:{const t=new He(e,kt);return t.drawImage(),t}}}onContextReady(){this.canvas.drawImage()}}let ne=0,$e,Ie,Me,re=new Float32Array(f.width*f.height*3),ie=new Uint8ClampedArray(f.width*f.height*3);self.onerror=n=>console.error(n);self.onmessage=async n=>{const{event:e}=n.data;let{params:t}=n.data;switch(e){case"Transfer::Offscreen":return new je({offscreen:!0,...t});case"Create::Tracer":{const r=await(t.tracer==="AssemblyScript"?H(()=>import("./release-362faf06.js"),[],import.meta.url):H(()=>import("./Tracer-8e25e67e.js"),[],import.meta.url));Me=r.collect,Ie=r.format,$e=r.trace;break}case"Create::PPMImage":{re=new Float32Array($e(re)),ie=new Uint8ClampedArray(Ie(re,ie,++ne)),t={sample:ne,pixels:ie,...t},!(ne%100)&&Me();break}}self.postMessage({response:t,name:e})};const Ot=self;class zt extends CustomEvent{data}class Wt{target=new EventTarget;events=new Map;callbacks=new Map;add(e,t){const r=this.callbacks.get(e);r?r.push(t):this.callbacks.set(e,[t]),this.events.set(e,new zt(e)),this.target.addEventListener(e,t,!1)}dispatch(e,t){const r=this.events.get(e);r&&(r.data=t,this.target.dispatchEvent(r))}remove(e,t){const r=this.callbacks.get(e);if(r&&t){const i=r.indexOf(t),s=t;i!==-1&&r.splice(i,1),this.target.removeEventListener(e,s,!1)}t||(r?.forEach(i=>this.target.removeEventListener(e,i,!1)),this.callbacks.delete(e),this.events.delete(e))}dispose(){this.callbacks.clear(),this.events.clear()}}class De{constructor(e){this.worker=e}add(e,t){this.worker.add(e,t)}static dispatch(e,t){Ot.postMessage({name:e,response:{data:t}})}remove(e){this.worker.remove(e)}dispose(){this.worker.dispose()}}class qt extends Wt{offscreen=!1;workerEvents;createWorkerEvents(e,t){this.workerEvents=new De(e),this.offscreen=t}add(e,t){this.offscreen?this.workerEvents?.add(e,t):super.add(e,t)}dispatch(e,t,r=!1){r?De.dispatch(e,t):super.dispatch(e,t)}remove(e,t){this.offscreen?this.workerEvents?.remove(e):super.remove(e,t)}dispose(){this.workerEvents?.dispose(),super.dispose()}}const u=new qt,Vt="_container_6bmez_1",Ht="_stats_6bmez_6",se={container:Vt,stats:Ht},jt=P("<div>"),Xt=P("<strong>"),Yt=P("<ul><li><strong>Processing: </strong><em></em></li><li><strong>Context: </strong><em></em></li><li><strong>Language: </strong><em></em></li><li><strong>Environment: </strong><em></em></li><li><strong>Samples: </strong><em> / </em></li><li><strong>Last Render Time: </strong><em>~<!> sec.</em></li><li><strong>Total Render Time: </strong><em>~<!> sec."),k=n=>{let e=Date.now(),t=Date.now();const[r,i]=A(""),[s,a]=A(0),[o,h]=A(!1),[c,l]=A(0),[d,$]=A(0),G=n.children,{tracer:y,processing:Y,context:Xe}=G.dataset,ue=E=>i(E.data),Ye=()=>h(!o()),fe=()=>t=Date.now(),me=E=>{const I=Date.now(),{sample:w}=E.data;$(Re((I-t)/1e3)),l(Re((I-e)/1e3)),a(w),e=I};return u.add(`${y}::Start`,fe),u.add(`${y}::Init::Fail`,ue),u.add(`${y}::Stats::Update`,me),vt(()=>{u.remove(`${y}::Start`,fe),u.add(`${y}::Init::Fail`,ue),u.remove(`${y}::Stats::Update`,me)}),(()=>{const E=jt();return E.$$click=Ye,g(E,()=>n.children,null),g(E,(()=>{const I=mt(()=>!!r());return()=>I()?(()=>{const w=Xt();return g(w,r),S(()=>J(w,se.stats)),w})():(()=>{const w=Yt(),pe=w.firstChild,Ze=pe.firstChild,Ke=Ze.nextSibling,ve=pe.nextSibling,Qe=ve.firstChild,Je=Qe.nextSibling,ge=ve.nextSibling,et=ge.firstChild,tt=et.nextSibling,xe=ge.nextSibling,nt=xe.firstChild,rt=nt.nextSibling,be=xe.nextSibling,it=be.firstChild,Z=it.nextSibling,st=Z.firstChild,we=be.nextSibling,ot=we.firstChild,ye=ot.nextSibling,at=ye.firstChild,Se=at.nextSibling;Se.nextSibling;const ct=we.nextSibling,lt=ct.firstChild,Ee=lt.nextSibling,ht=Ee.firstChild,Te=ht.nextSibling;return Te.nextSibling,g(Ke,Y),g(Je,Xe),g(tt,Y==="CPU"?y:y==="WebGL2"?"GLSL ES 3.0":"WGSL"),g(rt,()=>Y==="GPU"?"Client":n.offscreen?"OffscreenCanvas":"Web Worker"),g(Z,s,st),g(Z,()=>f.samples,null),g(ye,c,Se),g(Ee,d,Te),S(M=>{const _e=se.stats,K=+o();return _e!==M._v$&&J(w,M._v$=_e),K!==M._v$2&&((M._v$2=K)!=null?w.style.setProperty("opacity",K):w.style.removeProperty("opacity")),M},{_v$:void 0,_v$2:void 0}),w})()})(),null),S(()=>J(E,se.container)),E})()};St(["click"]);const Zt=(n,e="image")=>{const t=document.createElement("a");t.href=URL.createObjectURL(new Blob([n],{type:"text/plain; charset=UTF-8"})),t.download=`${e}.ppm`,t.click(),URL.revokeObjectURL(t.href)};function Kt(){return new Worker(""+new URL("worker-df6f2bb0.js",import.meta.url).href,{type:"module"})}class Qt{worker=new Kt;events=new Map;constructor(){this.worker.onmessage=this.onMessage.bind(this),this.worker.onerror=this.onError.bind(this)}add(e,t,r){this.events.set(e,{callback:t,params:r})}transfer(e,t){this.worker.postMessage({event:"Transfer::Offscreen",params:{canvas:e,...t}},[e])}post(e,t){const r=this.events.get(e)?.params;this.worker.postMessage({event:e,params:{...r,...t}})}onMessage(e){const{name:t,response:r}=e.data;this.events?.get(t)?.callback?.(r)}onError(e){console.error(e)}remove(e){this.events.delete(e)}dispose(){this.events.clear()}}class Jt{offscreen=typeof HTMLCanvasElement<"u"&&!!HTMLCanvasElement.prototype.transferControlToOffscreen;constructor(e){e.forEach(t=>{const{processing:r,tracer:i}=t.dataset,s=t.dataset.context;if(r==="GPU")return new Nt({canvas:t,context:s,tracer:i});const a=new Qt;return u.createWorkerEvents(a,this.offscreen),this.offscreen?(u.add("PPMImage::Download",this.downloadPPMImage.bind(this)),u.add("AssemblyScript::Stats::Update",o=>this.updateStats(o,"AssemblyScript")),u.add("TypeScript::Stats::Update",o=>this.updateStats(o,"TypeScript")),u.add("AssemblyScript::Start",this.startStats.bind(this,"AssemblyScript")),u.add("TypeScript::Start",this.startStats.bind(this,"TypeScript")),a.transfer(t.transferControlToOffscreen(),{tracer:i,context:s})):new je({canvas:t,context:s,worker:a,tracer:i})}),!this.offscreen&&u.add("PPMImage::Download",this.downloadPPMImage.bind(this))}updateStats(e,t){this.offscreen&&u.dispatch(`${t}::Stats::Update`,e.data)}downloadPPMImage(e){Zt(e.data.image)}startStats(e){this.offscreen&&u.dispatch(`${e}::Start`)}}const en=P('<canvas data-tracer="TypeScript" data-processing="CPU" data-context="WebGL2">'),tn=P('<canvas data-tracer="AssemblyScript" data-processing="CPU" data-context="WebGL2">'),nn=P('<canvas data-processing="GPU" data-context="WebGL2" data-tracer="WebGL2">'),rn=P('<canvas data-processing="GPU" data-context="WebGPU" data-tracer="WebGPU">'),sn=P("<section>"),on=()=>{let n,e,t,r;const[i,s]=A(!1);return pt(()=>s(new Jt([n,e,t,r]).offscreen)),(()=>{const a=sn();return g(a,D(k,{get offscreen(){return i()},get children(){const o=en(),h=t;return typeof h=="function"?B(h,o):t=o,S(c=>{const l=f.height,d=f.width;return l!==c._v$&&_(o,"height",c._v$=l),d!==c._v$2&&_(o,"width",c._v$2=d),c},{_v$:void 0,_v$2:void 0}),o}}),null),g(a,D(k,{get offscreen(){return i()},get children(){const o=tn(),h=r;return typeof h=="function"?B(h,o):r=o,S(c=>{const l=f.height,d=f.width;return l!==c._v$3&&_(o,"height",c._v$3=l),d!==c._v$4&&_(o,"width",c._v$4=d),c},{_v$3:void 0,_v$4:void 0}),o}}),null),g(a,D(k,{get children(){const o=nn(),h=n;return typeof h=="function"?B(h,o):n=o,S(c=>{const l=f.height,d=f.width;return l!==c._v$5&&_(o,"height",c._v$5=l),d!==c._v$6&&_(o,"width",c._v$6=d),c},{_v$5:void 0,_v$6:void 0}),o}}),null),g(a,D(k,{get children(){const o=rn(),h=e;return typeof h=="function"?B(h,o):e=o,S(c=>{const l=f.height,d=f.width;return l!==c._v$7&&_(o,"height",c._v$7=l),d!==c._v$8&&_(o,"width",c._v$8=d),c},{_v$7:void 0,_v$8:void 0}),o}}),null),a})()};yt(()=>D(on,{}),document.getElementById("root"));export{f as C,v as R,p as V,It as W,H as _,an as d,cn as f};
