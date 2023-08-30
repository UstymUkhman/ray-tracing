const d=(r,t=0,e=1)=>Math.max(t,Math.min(r,e)),g=(r,t)=>Math.random()*(t-r)+r,q=r=>r*Math.PI/180,l=(r,t=2)=>{const e=Math.pow(10,t);return~~(e*r)/e},R=16.666666666666668;var a={backEnd:"webgl2",pixelRatio:1,maxDepth:50,samples:500,height:240,width:360,log:!1},A=`#version 300 es

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
`,y=`#version 300 es

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
`;class v{vec=[0,0,0];constructor(t=0,e=t,s=t){this.vec[0]=t,this.vec[1]=e,this.vec[2]=s}refract(t,e){const s=Math.min(this.clone.negate.dot(t),1);this.copy(t.clone.multiply(s).add(this).multiply(e));const i=Math.abs(1-this.lengthSquared);return this.add(t.multiply(-Math.sqrt(i)))}set(t,e,s){return this.vec[0]=t,this.vec[1]=e,this.vec[2]=s,this}multiply(t){if(typeof t!="number")return this.set(this.vec[0]*t.x,this.vec[1]*t.y,this.vec[2]*t.z);const e=t;return this.vec[0]*=e,this.vec[1]*=e,this.vec[2]*=e,this}divide(t){return typeof t=="number"?this.multiply(1/t):this.set(this.vec[0]/t.x,this.vec[1]/t.y,this.vec[2]/t.z)}random(t=0,e=1){return this.set(g(t,e),g(t,e),g(t,e))}reflect(t){return this.sub(t.clone.multiply(this.dot(t)*2))}get randomUnitVector(){return this.randomUnitSphere.unitVector}get randomUnitSphere(){for(;;)if(this.random(-1).lengthSquared<1)return this}get lengthSquared(){return this.dot(this)}get randomUnitDisk(){for(;;)if(this.random(-1),this.vec[2]=0,this.lengthSquared<1)return this}cross(t){return this.set(this.vec[1]*t.z-this.vec[2]*t.y,this.vec[2]*t.x-this.vec[0]*t.z,this.vec[0]*t.y-this.vec[1]*t.x)}dot(t){return this.vec[0]*t.x+this.vec[1]*t.y+this.vec[2]*t.z}copy(t){const{x:e,y:s,z:i}=t;return this.set(e,s,i)}add(t){return this.vec[0]+=t.x,this.vec[1]+=t.y,this.vec[2]+=t.z,this}sub(t){return this.vec[0]-=t.x,this.vec[1]-=t.y,this.vec[2]-=t.z,this}get nearZero(){return Math.abs(this.vec[0])<1e-8&&Math.abs(this.vec[1])<1e-8&&Math.abs(this.vec[2])<1e-8}get unitVector(){return this.divide(this.length)}get length(){return Math.sqrt(this.lengthSquared)}get clone(){return new v(this.vec[0],this.vec[1],this.vec[2])}reset(t=0){return this.set(t,t,t)}get negate(){return this.multiply(-1)}get sqrt(){return this.set(Math.sqrt(this.vec[0]),Math.sqrt(this.vec[1]),Math.sqrt(this.vec[2]))}get rgb(){return this.set(d(this.vec[0]*256|0,0,255),d(this.vec[1]*256|0,0,255),d(this.vec[2]*256|0,0,255))}get x(){return this.vec[0]}get y(){return this.vec[1]}get z(){return this.vec[2]}}const M=(r,t=1)=>new Map([["r",r>>16&t],["g",r>>8&t],["b",r&t]]),S=(r,t)=>r.divide(t).sqrt.rgb,D=r=>`#${`000000${r.toString(16)}`.slice(-6)}`,z=(r,t,e)=>{const s=new v;for(let i=0;i<t.length;i+=3){const{x:n,y:o,z:h}=S(s.set(t[i],t[i+1],t[i+2]),e);r[i]=n,r[i+1]=o,r[i+2]=h}return r};class T{context;backEnd;clearColor=0;channels;height;width;side;constructor(t,e){this.backEnd=e;const s=e==="2d",{canvas:i,offscreen:n}=t;this.context=i.getContext(e,this.getOptions(e,n)),this.width=i.width,this.height=i.height,this.channels=+s+3,this.side=this.width*this.channels}getOptions(t,e=!1){switch(t){case"2d":return{willReadFrequently:!e,desynchronized:e,colorSpace:"srgb",alpha:!1};case"webgpu":return{};default:return{powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,desynchronized:!e,premultipliedAlpha:!1,antialias:!0,stencil:!1,depth:!1,alpha:!1}}}getPixel(t,e){return e*this.side+t*this.channels}}var I=`precision mediump float;

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
`,_=`#ifndef GL_FRAGMENT_PRECISION_HIGH
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
`;class P extends T{textureData=new Uint8ClampedArray(this.width*this.height*this.channels);texture;program;constructor(t,e="webgl",s=_,i=I){super(t,e),this.createProgram(s,i),this.createScene()}loadShader(t,e){const s=this.context.createShader(e);return this.context.shaderSource(s,t),this.context.compileShader(s),this.context.getShaderParameter(s,this.context.COMPILE_STATUS)?s:(console.error(`An error occurred compiling the shaders: ${this.context.getShaderInfoLog(s)}`),this.context.deleteShader(s))}setBufferData(t=this.width,e=this.height){this.context.bufferData(this.context.ARRAY_BUFFER,new Float32Array([0,0,t,0,0,e,0,e,t,0,t,e]),this.context.STATIC_DRAW)}createProgram(t,e){const s=this.loadShader(t,this.context.FRAGMENT_SHADER),i=this.loadShader(e,this.context.VERTEX_SHADER);if(this.program=this.context.createProgram(),i&&s&&(this.context.attachShader(this.program,s),this.context.attachShader(this.program,i),this.context.linkProgram(this.program)),!this.context.getProgramParameter(this.program,this.context.LINK_STATUS))return console.error(`Unable to initialize shader program: ${this.context.getProgramInfoLog(this.program)}`);this.context.clear(this.context.COLOR_BUFFER_BIT);const n=M(this.clearColor,1),o=n.get("r")??0,h=n.get("g")??0,b=n.get("b")??0;this.context.clearColor(o,h,b,1),this.context.useProgram(this.program)}updateTexture(){this.context.activeTexture(this.context.TEXTURE0),this.context.bindTexture(this.context.TEXTURE_2D,this.texture),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.RGB,this.width,this.height,0,this.context.RGB,this.context.UNSIGNED_BYTE,this.textureData)}createScene(){const t=this.context.getAttribLocation(this.program,"coords");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(1,1),this.context.enableVertexAttribArray(t),this.context.vertexAttribPointer(t,2,this.context.FLOAT,!1,0,0);const e=this.context.getAttribLocation(this.program,"position");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(),this.context.enableVertexAttribArray(e),this.context.vertexAttribPointer(e,2,this.context.FLOAT,!1,0,0);const s=this.context.getUniformLocation(this.program,"resolution");this.context.uniform2f(s,this.width,this.height),this.texture=this.context.createTexture(),this.setBufferData(),this.updateTexture(),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_S,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_T,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MIN_FILTER,this.context.NEAREST),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MAG_FILTER,this.context.NEAREST)}drawImage(t){this.textureData=t,this.updateTexture(),this.context.drawArrays(this.context.TRIANGLES,0,6)}clear(){this.context.clear(this.context.COLOR_BUFFER_BIT)}}class C extends P{constructor(t){super(t,"webgl2",y,A)}}class k extends T{image;constructor(t){super(t,"2d"),this.context.imageSmoothingEnabled=!0,this.context.imageSmoothingQuality="high",this.image=this.context.getImageData(0,0,this.width,this.height)}drawImage(t){for(let e=0,s=0;e<t.length;e+=3,s+=4)this.image.data[s]=t[e],this.image.data[s+1]=t[e+1],this.image.data[s+2]=t[e+2],this.image.data[s+3]=255;this.context.putImageData(this.image,0,0)}clear(){this.context.fillStyle=D(this.clearColor),this.context.clearRect(0,0,this.width,this.height),this.context.fillRect(0,0,this.width,this.height)}}class U extends CustomEvent{data}class ${target=new EventTarget;events=new Map;callbacks=new Map;add(t,e){const s=this.callbacks.get(t);s?s.push(e):this.callbacks.set(t,[e]),this.events.set(t,new U(t)),this.target.addEventListener(t,e,!1)}dispatch(t,e){const s=this.events.get(t);s&&(s.data=e,this.target.dispatchEvent(s))}remove(t,e){const s=this.callbacks.get(t);if(s&&e){const i=s.indexOf(e),n=e;i!==-1&&s.splice(i,1),this.target.removeEventListener(t,n,!1)}e||(s?.forEach(i=>this.target.removeEventListener(t,i,!1)),this.callbacks.delete(t),this.events.delete(t))}dispose(){this.callbacks.clear(),this.events.clear()}}class p{constructor(t){this.worker=t}add(t,e){this.worker.add(t,e)}static dispatch(t,e){O.postMessage({name:t,response:{data:e}})}remove(t){this.worker.remove(t)}dispose(){this.worker.dispose()}}class L extends ${offscreen=!1;workerEvents;createWorkerEvents(t,e){this.workerEvents=new p(t),this.offscreen=e}add(t,e){this.offscreen?this.workerEvents?.add(t,e):super.add(t,e)}dispatch(t,e,s=!1){s?p.dispatch(t,e):super.dispatch(t,e)}remove(t,e){this.offscreen?this.workerEvents?.remove(t):super.remove(t,e)}dispose(){this.workerEvents?.dispose(),super.dispose()}}var F=new L;class B{sample=0;trace;format;last=Date.now();f32=new Float32Array(a.width*a.height*3);u8=new Uint8ClampedArray(a.width*a.height*3);canvas;worker;start=Date.now();samples=a.samples;constructor(t){const e=this.getTracer(t);this.canvas=this.createCanvas(t),(this.worker=t.worker)?this.createWorkerEvents(e):this.loadTracer(e),this.canvas.clear()}getTracer(t){return t.tracer!=="assemblyscript"?"typescript":"assemblyscript"}createCanvas(t){switch(t.backEnd){case"webgl2":return new C(t);case"webgl":return new P(t);default:return new k(t)}}createWorkerEvents(t){this.worker?.post("Create::Tracer",{tracer:t}),this.worker?.add("Create::Tracer",()=>{this.worker?.add("Create::PPMImage",this.showPPMImage.bind(this)),this.createPPMImage()})}loadTracer(t){(t==="assemblyscript"?import("./release-62daa646.js"):import("./Tracer-3d641a9d.js")).then(({trace:e,format:s})=>{this.trace=e,this.format=s,this.createPPMImage()})}createPPMImage(t=!1){if(this.worker)return this.worker.post("Create::PPMImage",{download:t});this.f32=this.trace(this.f32),this.u8=this.format(this.u8,this.f32,++this.sample),this.showPPMImage({pixels:this.u8,sample:this.sample,download:t},!0);const e=Date.now(),i=`${this.samples===this.sample&&"Total "||""}Samples: ${this.sample}`,n=`Total Time: ${l((e-this.start)/1e3)} sec.`,o=`Last Render Time: ${l((e-this.last)/1e3)} sec.`;console.info(`${i} | ${o} | ${n}`),this.last=e}showPPMImage(t,e){const s=t;this.canvas.drawImage(s.pixels),this.samples===s.sample||!(this.worker?s.sample:this.sample)?s.download&&this.downloadPPMImage(s.pixels,e):setTimeout(this.createPPMImage.bind(this,s.download),R)}downloadPPMImage(t,e){let s=`P3
${this.canvas.width} ${this.canvas.height}
255
`;for(let i=0;i<t.length;i+=3)s+=`${t[i]} ${t[i+1]} ${t[i+2]}
`;F.dispatch("Download::PPMImage",{image:s},e)}}let x=0,c=0,f,w,E=Date.now();const G=a.samples;let u=new Float32Array(a.width*a.height*3),m=new Uint8ClampedArray(a.width*a.height*3);self.onerror=r=>console.error(r);self.onmessage=async r=>{const{event:t}=r.data;let{params:e}=r.data;switch(t){case"Transfer::Offscreen":return new B({offscreen:!0,...e});case"Create::Tracer":{const s=await(e.tracer==="assemblyscript"?import("./release-62daa646.js"):import("./Tracer-3d641a9d.js"));w=s.format,f=s.trace;break}case"Create::PPMImage":{x||=Date.now(),u=f(u),m=w(m,u,++c),e={sample:c,pixels:m,...e};const s=Date.now(),n=`${G===c&&"Total "||""}Samples: ${c}`,o=`Total Time: ${l((s-x)/1e3)} sec.`,h=`Last Render Time: ${l((s-E)/1e3)} sec.`;console.info(`${n} | ${h} | ${o}`),E=s;break}}self.postMessage({response:e,name:t})};var O=self;export{a as C,v as V,q as d,z as f,g as r};
