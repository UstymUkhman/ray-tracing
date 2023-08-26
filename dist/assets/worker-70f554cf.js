var n={backEnd:"webgl2",pixelRatio:1,maxDepth:50,samples:500,height:240,width:360},u=`#version 300 es

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
`,f=`#version 300 es

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
`;const v=(r,t=1)=>new Map([["r",r>>16&t],["g",r>>8&t],["b",r&t]]),w=(r,t)=>r.divide(t).sqrt.rgb,E=r=>`#${`000000${r.toString(16)}`.slice(-6)}`,F=(r,t,e,s)=>{for(let i=0;i<t.length;i+=3){e.set(t[i],t[i+1],t[i+2]);const{x:a,y:h,z:c}=w(e,s);r[i]=a,r[i+1]=h,r[i+2]=c}return r};class x{context;backEnd;clearColor=0;channels;height;width;side;constructor(t,e){this.backEnd=e;const s=e==="2d",{canvas:i,offscreen:a}=t;this.context=i.getContext(e,this.getOptions(e,a)),this.width=i.width,this.height=i.height,this.channels=+s+3,this.side=this.width*this.channels}getOptions(t,e=!1){switch(t){case"2d":return{willReadFrequently:!e,desynchronized:e,colorSpace:"srgb",alpha:!1};case"webgpu":return{};default:return{powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,desynchronized:!e,premultipliedAlpha:!1,antialias:!0,stencil:!1,depth:!1,alpha:!1}}}getPixel(t,e){return e*this.side+t*this.channels}}var T=`precision mediump float;

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
`,P=`#ifndef GL_FRAGMENT_PRECISION_HIGH
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
`;class p extends x{textureData=new Uint8ClampedArray(this.width*this.height*this.channels);texture;program;constructor(t,e="webgl",s=P,i=T){super(t,e),this.createProgram(s,i),this.createScene()}loadShader(t,e){const s=this.context.createShader(e);return this.context.shaderSource(s,t),this.context.compileShader(s),this.context.getShaderParameter(s,this.context.COMPILE_STATUS)?s:(console.error(`An error occurred compiling the shaders: ${this.context.getShaderInfoLog(s)}`),this.context.deleteShader(s))}setBufferData(t=this.width,e=this.height){this.context.bufferData(this.context.ARRAY_BUFFER,new Float32Array([0,0,t,0,0,e,0,e,t,0,t,e]),this.context.STATIC_DRAW)}createProgram(t,e){const s=this.loadShader(t,this.context.FRAGMENT_SHADER),i=this.loadShader(e,this.context.VERTEX_SHADER);if(this.program=this.context.createProgram(),i&&s&&(this.context.attachShader(this.program,s),this.context.attachShader(this.program,i),this.context.linkProgram(this.program)),!this.context.getProgramParameter(this.program,this.context.LINK_STATUS))return console.error(`Unable to initialize shader program: ${this.context.getProgramInfoLog(this.program)}`);this.context.clear(this.context.COLOR_BUFFER_BIT);const a=v(this.clearColor,1),h=a.get("r")??0,c=a.get("g")??0,m=a.get("b")??0;this.context.clearColor(h,c,m,1),this.context.useProgram(this.program)}updateTexture(){this.context.activeTexture(this.context.TEXTURE0),this.context.bindTexture(this.context.TEXTURE_2D,this.texture),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.RGB,this.width,this.height,0,this.context.RGB,this.context.UNSIGNED_BYTE,this.textureData)}createScene(){const t=this.context.getAttribLocation(this.program,"coords");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(1,1),this.context.enableVertexAttribArray(t),this.context.vertexAttribPointer(t,2,this.context.FLOAT,!1,0,0);const e=this.context.getAttribLocation(this.program,"position");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(),this.context.enableVertexAttribArray(e),this.context.vertexAttribPointer(e,2,this.context.FLOAT,!1,0,0);const s=this.context.getUniformLocation(this.program,"resolution");this.context.uniform2f(s,this.width,this.height),this.texture=this.context.createTexture(),this.setBufferData(),this.updateTexture(),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_S,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_T,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MIN_FILTER,this.context.NEAREST),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MAG_FILTER,this.context.NEAREST)}drawImage(t){this.textureData=t,this.updateTexture(),this.context.drawArrays(this.context.TRIANGLES,0,6)}clear(){this.context.clear(this.context.COLOR_BUFFER_BIT)}}class R extends p{constructor(t){super(t,"webgl2",f,u)}}class b extends x{image;constructor(t){super(t,"2d"),this.context.imageSmoothingEnabled=!0,this.context.imageSmoothingQuality="high",this.image=this.context.getImageData(0,0,this.width,this.height)}drawImage(t){for(let e=0,s=0;e<t.length;e+=3,s+=4)this.image.data[s]=t[e],this.image.data[s+1]=t[e+1],this.image.data[s+2]=t[e+2],this.image.data[s+3]=255;this.context.putImageData(this.image,0,0)}clear(){this.context.fillStyle=E(this.clearColor),this.context.clearRect(0,0,this.width,this.height),this.context.fillRect(0,0,this.width,this.height)}}class A extends CustomEvent{data}class I{target=new EventTarget;events=new Map;callbacks=new Map;add(t,e){const s=this.callbacks.get(t);s?s.push(e):this.callbacks.set(t,[e]),this.events.set(t,new A(t)),this.target.addEventListener(t,e,!1)}dispatch(t,e){const s=this.events.get(t);s&&(s.data=e,this.target.dispatchEvent(s))}remove(t,e){const s=this.callbacks.get(t);if(s&&e){const i=s.indexOf(e),a=e;i!==-1&&s.splice(i,1),this.target.removeEventListener(t,a,!1)}e||(s?.forEach(i=>this.target.removeEventListener(t,i,!1)),this.callbacks.delete(t),this.events.delete(t))}dispose(){this.callbacks.clear(),this.events.clear()}}class o{constructor(t){this.worker=t,o.worker=t.self}static worker;add(t,e){this.worker.add(t,e)}static dispatch(t,e){o.worker.postMessage({name:t,response:{data:e}})}remove(t){this.worker.remove(t)}dispose(){this.worker.dispose()}}class _ extends I{offscreen=!1;workerEvents;createWorkerEvents(t,e){this.workerEvents=new o(t),this.offscreen=e}add(t,e){this.offscreen?this.workerEvents?.add(t,e):super.add(t,e)}dispatch(t,e,s=!1){s?o.dispatch(t,e):super.dispatch(t,e)}remove(t,e){this.offscreen?this.workerEvents?.remove(t):super.remove(t,e)}dispose(){this.workerEvents?.dispose(),super.dispose()}}var C=new _;const U=(r,t=0,e=1)=>Math.max(t,Math.min(r,e)),L=(r,t)=>Math.random()*(t-r)+r,y=r=>r*Math.PI/180,B=(r,t=2)=>{const e=Math.pow(10,t);return~~(e*r)/e},D=1/.06;class S{sample=0;trace;canvas;worker;start=Date.now();samples=n.samples;u8=new Uint8ClampedArray(n.width*n.height*3);f32=new Float32Array(n.width*n.height*3);constructor(t){const e=this.getTracer(t);this.canvas=this.createCanvas(t),(this.worker=t.worker)?this.createWorkerEvents(e):this.loadTracer(e),this.canvas.clear()}getTracer(t){return t.tracer!=="assemblyscript"?"typescript":"assemblyscript"}createCanvas(t){switch(t.backEnd){case"webgl2":return new R(t);case"webgl":return new p(t);default:return new b(t)}}createWorkerEvents(t){this.worker?.post("Create::Tracer",{tracer:t}),this.worker?.add("Create::Tracer",()=>{this.worker?.add("Create::PPMImage",this.showPPMImage.bind(this)),this.createPPMImage()})}loadTracer(t){(t==="assemblyscript"?import("./release-3ca0c405.js"):import("./Tracer-22a8ccb8.js")).then(({trace:e})=>{this.trace=e,this.createPPMImage()})}createPPMImage(t=!1){if(this.worker)return this.worker.post("Create::PPMImage",{download:t});this.u8=this.trace(this.start,this.f32,this.u8,++this.sample),this.showPPMImage({pixels:this.u8,sample:this.sample,download:t},!0)}showPPMImage(t,e){const s=t;this.canvas.drawImage(s.pixels),this.samples===s.sample||!(this.worker?s.sample:this.sample)?s.download&&this.downloadPPMImage(s.pixels,e):setTimeout(this.createPPMImage.bind(this,s.download),D)}downloadPPMImage(t,e){let s=`P3
${this.canvas.width} ${this.canvas.height}
255
`;for(let i=0;i<t.length;i+=3)s+=`${t[i]} ${t[i+1]} ${t[i+2]}
`;C.dispatch("Download::PPMImage",{image:s},e)}}let M=0,d=0,g;const k=new Float32Array(n.width*n.height*3);let l=new Uint8ClampedArray(n.width*n.height*3);self.onerror=r=>console.error(r);self.onmessage=async r=>{const{event:t}=r.data;let{params:e}=r.data;switch(t){case"Transfer::Offscreen":return new S({offscreen:!0,...e});case"Create::Tracer":g=(await(e.tracer==="assemblyscript"?import("./release-3ca0c405.js"):import("./Tracer-22a8ccb8.js"))).trace;break;case"Create::PPMImage":l=g(M||=Date.now(),k,l,++d),e={sample:d,pixels:l,...e};break}self.postMessage({response:e,name:t})};export{n as C,U as c,y as d,F as f,L as r,B as t};
