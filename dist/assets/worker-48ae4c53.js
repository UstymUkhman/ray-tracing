var Y=Object.defineProperty;var K=(x,l,d)=>l in x?Y(x,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):x[l]=d;var n=(x,l,d)=>(K(x,typeof l!="symbol"?l+"":l,d),d);(function(){"use strict";var x=`#version 300 es

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
`,l=`#version 300 es

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
`;const d=(r,t=0,e=1)=>Math.max(t,Math.min(r,e)),y=(r,t=2)=>{const e=Math.pow(10,t);return~~(e*r)/e},I=({r,g:t,b:e})=>d(r*255,0,255)<<16^d(t*255,0,255)<<8^d(e*255,0,255)<<0,A=(r,t=1)=>(r=typeof r=="string"?_(r):r,{r:r>>16&t,g:r>>8&t,b:r&t}),E=r=>(r=typeof r=="number"?r:I(r),`#${`000000${r.toString(16)}`.slice(-6)}`),_=r=>(r=typeof r=="string"?r:E(r),parseInt(r.slice(1),16)),C=r=>r.set(255.999*r.x|0,255.999*r.y|0,255.999*r.z|0);class b{constructor(t,e){n(this,"context");n(this,"backEnd");n(this,"clearColor",0);n(this,"channels");n(this,"height");n(this,"width");n(this,"side");this.backEnd=e;const s=e==="2d",{canvas:i,offscreen:h}=t;this.context=i.getContext(e,this.getOptions(e,h)),this.width=i.width,this.height=i.height,this.channels=+s+3,this.side=this.width*this.channels}getOptions(t,e=!1){switch(t){case"2d":return{willReadFrequently:!e,desynchronized:e,colorSpace:"srgb",alpha:!1};case"webgpu":return{};default:return{powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,premultipliedAlpha:!1,desynchronized:!0,antialias:!0,stencil:!1,depth:!1,alpha:!1}}}getPixel(t,e){return e*this.side+t*this.channels}}var k=`precision mediump float;

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
`,D=`#ifndef GL_FRAGMENT_PRECISION_HIGH
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
`;class P extends b{constructor(e,s="webgl",i=D,h=k){super(e,s);n(this,"textureData",new Uint8ClampedArray(this.width*this.height*this.channels));n(this,"texture");n(this,"program");this.createProgram(i,h),this.createScene()}loadShader(e,s){const i=this.context.createShader(s);return this.context.shaderSource(i,e),this.context.compileShader(i),this.context.getShaderParameter(i,this.context.COMPILE_STATUS)?i:(console.error(`An error occurred compiling the shaders: ${this.context.getShaderInfoLog(i)}`),this.context.deleteShader(i))}setBufferData(e=this.width,s=this.height){this.context.bufferData(this.context.ARRAY_BUFFER,new Float32Array([0,0,e,0,0,s,0,s,e,0,e,s]),this.context.STATIC_DRAW)}createProgram(e,s){const i=this.loadShader(e,this.context.FRAGMENT_SHADER),h=this.loadShader(s,this.context.VERTEX_SHADER);if(this.program=this.context.createProgram(),h&&i&&(this.context.attachShader(this.program,i),this.context.attachShader(this.program,h),this.context.linkProgram(this.program)),!this.context.getProgramParameter(this.program,this.context.LINK_STATUS))return console.error(`Unable to initialize shader program: ${this.context.getProgramInfoLog(this.program)}`);this.context.clear(this.context.COLOR_BUFFER_BIT);const{r:a,g:c,b:g}=A(this.clearColor,1);this.context.clearColor(a,c,g,1),this.context.useProgram(this.program)}updateTexture(){this.context.activeTexture(this.context.TEXTURE0),this.context.bindTexture(this.context.TEXTURE_2D,this.texture),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.RGB,this.width,this.height,0,this.context.RGB,this.context.UNSIGNED_BYTE,this.textureData)}createScene(){const e=this.context.getAttribLocation(this.program,"coords");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(1,1),this.context.enableVertexAttribArray(e),this.context.vertexAttribPointer(e,2,this.context.FLOAT,!1,0,0);const s=this.context.getAttribLocation(this.program,"position");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(),this.context.enableVertexAttribArray(s),this.context.vertexAttribPointer(s,2,this.context.FLOAT,!1,0,0);const i=this.context.getUniformLocation(this.program,"resolution");this.context.uniform2f(i,this.width,this.height),this.texture=this.context.createTexture(),this.setBufferData(),this.updateTexture(),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_S,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_T,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MIN_FILTER,this.context.NEAREST),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MAG_FILTER,this.context.NEAREST)}drawImage(e){this.textureData=e,this.updateTexture(),this.context.drawArrays(this.context.TRIANGLES,0,6)}clear(){this.context.clear(this.context.COLOR_BUFFER_BIT)}}class F extends P{constructor(t){super(t,"webgl2",l,x)}}class M extends b{constructor(e){super(e,"2d");n(this,"image");this.context.imageSmoothingEnabled=!0,this.context.imageSmoothingQuality="high",this.image=this.context.getImageData(0,0,this.width,this.height)}drawImage(e){for(let s=0,i=0;s<e.length;s+=3,i+=4)this.image.data[i+0]=e[s+0],this.image.data[i+1]=e[s+1],this.image.data[i+2]=e[s+2],this.image.data[i+3]=255;this.context.putImageData(this.image,0,0)}clear(){this.context.fillStyle=E(this.clearColor),this.context.clearRect(0,0,this.width,this.height),this.context.fillRect(0,0,this.width,this.height)}}class o{constructor(t=0,e,s){n(this,"vec",[0,0,0]);this.vec[0]=t,this.vec[1]=e??t,this.vec[2]=s??t}multiply(t){if(typeof t!="number")return this.set(this.vec[0]*t.x,this.vec[1]*t.y,this.vec[2]*t.z);const e=t;return this.vec[0]*=e,this.vec[1]*=e,this.vec[2]*=e,this}divide(t){return typeof t=="number"?this.multiply(1/t):this.set(this.vec[0]/t.x,this.vec[1]/t.y,this.vec[2]/t.z)}get(t){return t===void 0?this.vec:this.vec[t]}set(t,e,s){return this.vec[0]=t,this.vec[1]=e,this.vec[2]=s,this}get lengthSquared(){return this.dot(this)}cross(t){return this.set(this.vec[1]*t.z-this.vec[2]*t.y,this.vec[2]*t.x-this.vec[0]*t.z,this.vec[0]*t.y-this.vec[1]*t.x)}dot(t){return this.vec[0]*t.x+this.vec[1]*t.y+this.vec[2]*t.z}copy(t){const{x:e,y:s,z:i}=t;return this.set(e,s,i)}add(t){return this.vec[0]+=t.x,this.vec[1]+=t.y,this.vec[2]+=t.z,this}sub(t){return this.vec[0]-=t.x,this.vec[1]-=t.y,this.vec[2]-=t.z,this}get unitVector(){return this.divide(this.length)}get length(){return Math.sqrt(this.lengthSquared)}get clone(){return new o(...this.get())}reset(t=0){return this.set(t,t,t)}get x(){return this.vec[0]}get y(){return this.vec[1]}get z(){return this.vec[2]}print(){const[t,e,s]=this.vec;return`Vector3 { x: ${t}, y: ${e}, z: ${s} }`}negate(){return this.vec[0]*=-1,this.vec[1]*=-1,this.vec[2]*=-1,this}}class L{constructor(){n(this,"t",0);n(this,"frontFace",!1);n(this,"point",new o);n(this,"normal",new o)}copy(t){this.frontFace=t.frontFace,this.normal.copy(t.normal),this.point.copy(t.point),this.t=t.t}setFaceNormal(t,e){this.frontFace=t.direction.clone.dot(e)<0,this.normal.copy(this.frontFace?e:e.negate())}}var f=new L;class T{}class z extends T{constructor(e){super();n(this,"objects",[]);e&&this.add(e)}add(e){this.objects.push(e)}hit(e,s,i,h){let a=!1,c=i;for(let g=0,p=this.objects.length;g<p;g++)this.objects[g].hit(e,s,c,f)&&(c=f.t,h.copy(f),a=!0);return a}clear(){this.objects.length=0}}class U{constructor(){n(this,"hittables",new z);this.addSphere(new o(0,0,-1),.5),this.addSphere(new o(0,-100.5,-1),100)}addSphere(t,e){this.hittables.add(new B(t,e))}get objects(){return this.hittables}}class B extends T{constructor(t=new o,e=0){super(),this.center=t,this.radius=e}hit(t,e,s,i){const h=t.origin.clone.sub(this.center),a=t.direction.lengthSquared,c=h.dot(t.direction),g=h.lengthSquared-this.radius*this.radius,p=c*c-a*g;if(p<0)return!1;const m=Math.sqrt(p);let v=(-c-m)/a;if((v<e||v>s)&&(v=(-c+m)/a,v<e||v>s))return!1;i.t=v,i.point.copy(t.at(i.t));const w=i.point.clone.sub(this.center).divide(this.radius);return i.setFaceNormal(t,w),!0}}var u;(r=>{r.Scene={pixelRatio:1,backEnd:"2d",height:225,width:400}})(u||(u={}));class ${constructor(){n(this,"width",u.Scene.width);n(this,"height",u.Scene.height);n(this,"ratio",this.width/this.height);n(this,"callbacks",[])}addResizeCallback(t){this.callbacks.indexOf(t)===-1&&this.callbacks.push(t)}removeResizeCallback(t){const e=this.callbacks.indexOf(t);e!==-1&&this.callbacks.splice(e,1)}update(t=u.Scene.width,e=u.Scene.height){this.width=t,this.height=e,this.ratio=this.width/this.height;for(let s=this.callbacks.length;s--;)this.callbacks[s](this.width,this.height,this.ratio)}dispose(){this.callbacks.length=0}get size(){return{height:this.height,width:this.width,ratio:this.ratio}}}var G=new $;class O{constructor(){n(this,"height",2);n(this,"focalLength",1);n(this,"origin",new o);n(this,"width",G.size.ratio*this.height);n(this,"vertical",new o(0,this.height,0));n(this,"horizontal",new o(this.width,0,0));n(this,"lowerLeftCorner",this.origin.clone.sub(this.horizontal.clone.divide(2)).sub(this.vertical.clone.divide(2)).sub(new o(0,0,this.focalLength)))}getDirection(t,e){return this.lowerLeftCorner.clone.add(this.horizontal.clone.multiply(t)).add(this.vertical.clone.multiply(e)).sub(this.origin)}}class N{constructor(t,e){n(this,"color",new o(1));this.orig=t,this.dir=e}at(t){return this.orig.clone.add(this.dir.multiply(t))}getColor(t,e){if(e.hit(t,0,1/0,f))return new o(1).add(f.normal).multiply(.5);const s=(t.dir.unitVector.y+1)*.5;return this.color.reset(1).multiply(1-s).add(new o(.5,.7,1).multiply(s))}get direction(){return this.dir}get origin(){return this.orig}}class R{constructor(){n(this,"world",new U);n(this,"color",new o);n(this,"camera",new O);n(this,"width",u.Scene.width);n(this,"height",u.Scene.height)}createPPMImage(){const t=new Uint8ClampedArray(this.width*this.height*3);for(let e=0,s=this.height-1,i=this.width-1,h=s;s>-1;s--){console.info(`Progress: ${y((1-s/h)*100)}%`);for(let a=0;a<this.width;a++,e+=3){const c=a/i,g=s/h,p=new N(this.camera.origin,this.camera.getDirection(c,g));this.color.set(...p.getColor(p,this.world.objects).get());const{x:m,y:v,z:w}=C(this.color);t[e+0]=m,t[e+1]=v,t[e+2]=w}}return t}}class W extends CustomEvent{constructor(){super(...arguments);n(this,"data")}}class X{constructor(){n(this,"target",new EventTarget);n(this,"events",new Map);n(this,"callbacks",new Map)}add(t,e){const s=this.callbacks.get(t);s?s.push(e):this.callbacks.set(t,[e]),this.events.set(t,new W(t)),this.target.addEventListener(t,e,!1)}dispatch(t,e){const s=this.events.get(t);s&&(s.data=e,this.target.dispatchEvent(s))}remove(t,e){const s=this.callbacks.get(t);if(s&&e){const i=s.indexOf(e),h=e;i!==-1&&s.splice(i,1),this.target.removeEventListener(t,h,!1)}e||(s==null||s.forEach(i=>this.target.removeEventListener(t,i,!1)),this.callbacks.delete(t),this.events.delete(t))}dispose(){this.callbacks.clear(),this.events.clear()}}class S{constructor(t){this.worker=t}add(t,e){this.worker.add(t,e)}static dispatch(t,e){j.postMessage({name:t,response:{data:e}})}remove(t){this.worker.remove(t)}dispose(){this.worker.dispose()}}class V extends X{constructor(){super(...arguments);n(this,"offscreen",!1);n(this,"workerEvents")}createWorkerEvents(e,s){this.workerEvents=new S(e),this.offscreen=s}add(e,s){var i;this.offscreen?(i=this.workerEvents)==null||i.add(e,s):super.add(e,s)}dispatch(e,s,i=!1){i?S.dispatch(e,s):super.dispatch(e,s)}remove(e,s){var i;this.offscreen?(i=this.workerEvents)==null||i.remove(e):super.remove(e,s)}dispose(){var e;(e=this.workerEvents)==null||e.dispose(),super.dispose()}}var q=new V;class H{constructor(t){n(this,"canvas");n(this,"tracer");n(this,"worker");this.canvas=this.createCanvas(t),(this.worker=t.worker)?this.createWorkerEvents():this.tracer=new R,this.canvas.clear(),this.createPPMImage()}createCanvas(t){switch(t.backEnd){case"webgl2":return new F(t);case"webgl":return new P(t);default:return new M(t)}}createWorkerEvents(){var t;(t=this.worker)==null||t.add("Create::PPMImage",this.showPPMImage.bind(this))}createPPMImage(t=!1){var e;this.worker?this.worker.post("Create::PPMImage",{download:t}):this.showPPMImage({download:t,pixels:(e=this.tracer)==null?void 0:e.createPPMImage()},!0)}showPPMImage(t,e){const{download:s,pixels:i}=t;s&&this.downloadPPMImage(i,e),this.canvas.drawImage(i)}downloadPPMImage(t,e){let s=`P3
${this.canvas.width} ${this.canvas.height}
255
`;for(let i=0;i<t.length;i+=3)s+=`${t[i]} ${t[i+1]} ${t[i+2]}
`;q.dispatch("Download::PPMImage",{image:s},e)}}self.onerror=r=>console.error(r),self.onmessage=r=>{const{event:t}=r.data;let{params:e}=r.data;const s=new R;switch(t){case"Transfer::Offscreen":return new H({offscreen:!0,...e});case"Create::PPMImage":{const i=s.createPPMImage();e={...e,pixels:i};break}}self.postMessage({response:e,name:t})};var j=self})();
