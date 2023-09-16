class E{}const v=(i,t=0,e=1)=>Math.max(t,Math.min(i,e)),f=(i,t)=>Math.random()*(t-i)+i,K=i=>i*Math.PI/180,D=1/.06;class o{vec=[0,0,0];constructor(t=0,e=t,r=t){this.vec[0]=t,this.vec[1]=e,this.vec[2]=r}refract(t,e){const r=Math.min(this.clone.negate.dot(t),1);this.copy(t.clone.multiply(r).add(this).multiply(e));const s=Math.abs(1-this.lengthSquared);return this.add(t.multiply(-Math.sqrt(s)))}set(t,e,r){return this.vec[0]=t,this.vec[1]=e,this.vec[2]=r,this}multiply(t){if(typeof t!="number")return this.set(this.vec[0]*t.x,this.vec[1]*t.y,this.vec[2]*t.z);const e=t;return this.vec[0]*=e,this.vec[1]*=e,this.vec[2]*=e,this}divide(t){return typeof t=="number"?this.multiply(1/t):this.set(this.vec[0]/t.x,this.vec[1]/t.y,this.vec[2]/t.z)}random(t=0,e=1){return this.set(f(t,e),f(t,e),f(t,e))}reflect(t){return this.sub(t.clone.multiply(this.dot(t)*2))}get randomNormalized(){return this.randomUnitSphere.normalize}get randomUnitSphere(){for(;;)if(this.random(-1).lengthSquared<1)return this}get lengthSquared(){return this.dot(this)}get randomUnitDisk(){for(;;)if(this.random(-1),this.vec[2]=0,this.lengthSquared<1)return this}cross(t){return this.set(this.vec[1]*t.z-this.vec[2]*t.y,this.vec[2]*t.x-this.vec[0]*t.z,this.vec[0]*t.y-this.vec[1]*t.x)}dot(t){return this.vec[0]*t.x+this.vec[1]*t.y+this.vec[2]*t.z}copy(t){const{x:e,y:r,z:s}=t;return this.set(e,r,s)}add(t){return this.vec[0]+=t.x,this.vec[1]+=t.y,this.vec[2]+=t.z,this}sub(t){return this.vec[0]-=t.x,this.vec[1]-=t.y,this.vec[2]-=t.z,this}get nearZero(){return Math.abs(this.vec[0])<1e-8&&Math.abs(this.vec[1])<1e-8&&Math.abs(this.vec[2])<1e-8}get normalize(){return this.divide(this.length)}get length(){return Math.sqrt(this.lengthSquared)}get clone(){return new o(this.vec[0],this.vec[1],this.vec[2])}reset(t=0){return this.set(t,t,t)}get negate(){return this.multiply(-1)}get sqrt(){return this.set(Math.sqrt(this.vec[0]),Math.sqrt(this.vec[1]),Math.sqrt(this.vec[2]))}get rgb(){return this.set(v(this.vec[0]*256|0,0,255),v(this.vec[1]*256|0,0,255),v(this.vec[2]*256|0,0,255))}get x(){return this.vec[0]}get y(){return this.vec[1]}get z(){return this.vec[2]}get(){return[...this.vec]}}class _{t=0;frontFace=!1;material;point=new o;normal=new o;setFaceNormal(t,e){this.frontFace=t.direction.dot(e)<0,this.normal.copy(this.frontFace?e:e.negate)}}var c=new _;class C{}class B extends C{objects=[];constructor(){super()}add(t){this.objects.push(t)}hit(t,e,r){let s=!1,a=r;for(let n=0,h=this.objects.length;n<h;n++)this.objects[n].hit(t,e,a)&&(a=c.t,s=!0);return s}get hittables(){return this.objects}dispose(){this.objects.length=0}}class L{list=new B;color=new o;constructor(){this.addSphere(1e3,new o(0,-1e3,0),new g(new o(.5))),this.generateSmallSpheres(),this.addSphere(1,new o(0,1,0),new T(1.5)),this.addSphere(1,new o(-4,1,0),new g(new o(.4,.2,.1))),this.addSphere(1,new o(4,1,0),new b(new o(.7,.6,.5),0))}addSphere(t,e,r){this.list.add(new z(t,e,r))}generateSmallSpheres(){for(let t=-11;t<11;t++)for(let e=-11;e<11;e++){const r=new o(Math.random()*.9+t,.2,Math.random()*.9+e),s=new o(4,.2,0);if(r.clone.sub(s).length>.9){const a=Math.random();if(a<.8){this.color.random().multiply(this.color.random());const n=new g(this.color);this.addSphere(.2,r,n)}else if(a<.95){this.color.random(.5);const n=f(0,.5),h=new b(this.color,n);this.addSphere(.2,r,h)}else{const n=new T(1.5);this.addSphere(.2,r,n)}}}}get hittables(){return this.list.hittables}get objects(){return this.list}dispose(){this.list.dispose(),this.color.reset()}}class z extends C{constructor(t,e,r){super(),this.radius=t,this.center=e,this.material=r}hit(t,e,r){const s=t.origin.clone.sub(this.center),a=t.direction.lengthSquared,n=s.dot(t.direction),h=s.lengthSquared-this.radius*this.radius,m=n*n-a*h;if(m<0)return!1;const S=Math.sqrt(m);let d=(-n-S)/a;if((d<e||d>r)&&(d=(-n+S)/a,d<e||d>r))return!1;c.point.copy(t.at(d));const I=c.point.clone.sub(this.center).divide(this.radius);return c.setFaceNormal(t,I),c.material=this.material,c.t=d,!0}}class b extends E{fuzz;albedo;direction=new o;constructor(t,e){super(),this.albedo=t.clone,this.fuzz=Math.min(e,1)}scatter(t,e,r){const s=t.direction.normalize.reflect(c.normal);return this.direction.randomUnitSphere.multiply(this.fuzz).add(s),e.direction=this.direction,e.origin=c.point,r.copy(this.albedo),this.direction.dot(c.normal)>0}}class g extends E{albedo;direction=new o;constructor(t){super(),this.albedo=t.clone}scatter(t,e,r){const s=c.normal.clone.add(this.direction.randomNormalized);return s.nearZero&&s.copy(c.normal),e.direction=s,e.origin=c.point,r.copy(this.albedo),!0}}class T extends E{constructor(t){super(),this.refraction=t}reflectance(t,e){const r=Math.pow((1-e)/(1+e),2);return Math.pow(1-t,5)*(1-r)+r}scatter(t,e,r){const s=t.direction.normalize,a=Math.min(s.clone.negate.dot(c.normal),1),n=c.frontFace?1/this.refraction:this.refraction;return Math.sqrt(1-a*a)*n>1||Math.random()<this.reflectance(a,n)?s.reflect(c.normal):s.refract(c.normal,n),e.direction=s,e.origin=c.point,r.reset(1),!0}}var k=`#ifndef GL_FRAGMENT_PRECISION_HIGH
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
`,G=`precision mediump float;

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
`;class U{context;clearColor=0;channels;height;width;side;constructor(t){const{canvas:e,context:r,offscreen:s}=t;this.channels=+(r==="Canvas2D")+3,this.context=e.getContext(this.getContextId(r),this.getOptions(r,s)),this.width=e.width,this.height=e.height,this.side=this.width*this.channels}getContextId(t){switch(t){case"WebGPU":return"webgpu";case"WebGL2":return"webgl2";case"WebGL":return"webgl";default:return"2d"}}getOptions(t,e=!1){switch(t){case"Canvas2D":return{willReadFrequently:!e,desynchronized:e,colorSpace:"srgb",alpha:!1};case"WebGPU":return{};default:return{powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,desynchronized:!e,premultipliedAlpha:!1,antialias:!0,stencil:!1,depth:!1,alpha:!1}}}getPixel(t,e){return e*this.side+t*this.channels}}const N=(i,t=1)=>new Map([["r",i>>16&t],["g",i>>8&t],["b",i&t]]),q=(i,t)=>i.divide(t).sqrt.rgb,W=i=>`#${`000000${i.toString(16)}`.slice(-6)}`,Q=(i,t,e)=>{const r=new o;for(let s=0;s<i.length;s+=3){const{x:a,y:n,z:h}=q(r.set(i[s],i[s+1],i[s+2]),e);t[s]=a,t[s+1]=n,t[s+2]=h}return t};class F extends U{texture;program;textureData=new Uint8ClampedArray(this.width*this.height*this.channels);constructor(t,e=k,r=G){super(t),this.createProgram(e,r),this.createScene()}loadShader(t,e){const r=this.context.createShader(e);return this.context.shaderSource(r,t),this.context.compileShader(r),this.context.getShaderParameter(r,this.context.COMPILE_STATUS)?r:(console.error(`An error occurred compiling the shaders: ${this.context.getShaderInfoLog(r)}`),this.context.deleteShader(r))}setBufferData(t=this.width,e=this.height){this.context.bufferData(this.context.ARRAY_BUFFER,new Float32Array([0,0,t,0,0,e,0,e,t,0,t,e]),this.context.STATIC_DRAW)}createProgram(t,e){const r=this.loadShader(t,this.context.FRAGMENT_SHADER),s=this.loadShader(e,this.context.VERTEX_SHADER);if(this.program=this.context.createProgram(),s&&r&&(this.context.attachShader(this.program,r),this.context.attachShader(this.program,s),this.context.linkProgram(this.program)),!this.context.getProgramParameter(this.program,this.context.LINK_STATUS))return console.error(`Unable to initialize shader program: ${this.context.getProgramInfoLog(this.program)}`);this.context.clear(this.context.COLOR_BUFFER_BIT);const a=N(this.clearColor,1),n=a.get("r")??0,h=a.get("g")??0,m=a.get("b")??0;this.context.clearColor(n,h,m,1),this.context.useProgram(this.program)}setTextureParameters(){this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_S,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_T,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MIN_FILTER,this.context.NEAREST),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MAG_FILTER,this.context.NEAREST)}setActiveTexture(t=this.textureData,e=this.texture){this.context.activeTexture(this.context.TEXTURE0),this.context.bindTexture(this.context.TEXTURE_2D,e),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.RGB,this.width,this.height,0,this.context.RGB,this.context.UNSIGNED_BYTE,t)}createScene(){const t=this.context.getAttribLocation(this.program,"coords");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(1,1),this.context.enableVertexAttribArray(t),this.context.vertexAttribPointer(t,2,this.context.FLOAT,!1,0,0);const e=this.context.getAttribLocation(this.program,"position");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(),this.context.enableVertexAttribArray(e),this.context.vertexAttribPointer(e,2,this.context.FLOAT,!1,0,0);const r=this.context.getUniformLocation(this.program,"resolution");this.context.uniform2f(r,this.width,this.height),this.texture=this.context.createTexture(),this.setBufferData(),this.setActiveTexture(),this.setTextureParameters()}clear(){this.context.clear(this.context.COLOR_BUFFER_BIT)}drawImage(t){this.setActiveTexture(t),this.context.drawArrays(this.context.TRIANGLES,0,6)}}var $=`#version 300 es
#ifndef GL_FRAGMENT_PRECISION_HIGH
precision mediump float;
#else
precision highp float;
#endif
uniform sampler2D tex;in vec2 uv;out vec4 fragColor;void main(void){fragColor=texture(tex,uv);}`,R=`#version 300 es
#ifndef GL_FRAGMENT_PRECISION_HIGH
precision mediump float;
#else
precision highp float;
#endif
uniform vec2 resolution;in vec2 position;in vec2 coords;out vec2 uv;
#ifdef CAMERA
struct Ray{vec3 origin;vec3 direction;};vec3 at(in Ray ray,in float t){return ray.origin+ray.direction*t;}struct Config{float width;float height;uint samples;uint maxDepth;}config=Config(360.0,240.0,500u,50u);
#define INFINITY 1.0 / 0.0
#define PI 3.14159265358979323846
float random(in vec2 seed){return fract(sin(dot(seed.xy,vec2(12.9898,78.233)))*43758.5453123);}float random(in vec2 seed,in float mi,in float ma){return random(seed)*(ma-mi)+mi;}float degToRad(in float deg){return deg*PI/180.0;}bool nearZero(in vec3 vec){return(abs(vec.x)<1e-8)&&(abs(vec.y)<1e-8)&&(abs(vec.z)<1e-8);}vec3 randomVec(in vec2 seed){return vec3(random(seed*0.123),random(seed*0.456),random(seed*0.789));}vec3 randomVec(in vec2 seed,in float mi,in float ma){return vec3(random(seed*0.123,mi,ma),random(seed*0.456,mi,ma),random(seed*0.789,mi,ma));}float lengthSquared(in vec3 vec){return dot(vec,vec);}vec3 randomUnitDisk(in vec2 seed){float rand=random(seed*0.02468);float x=rand*2.0-1.0;float y=random(seed*0.13579,-2.0,2.0)*sqrt(rand*-rand+rand);return vec3(x,y,0.0);}vec3 randomUnitSphere(in vec2 seed){for(;;){vec3 rand=randomVec(seed,-1.0,1.0);if(lengthSquared(rand)<1.0)return rand;}}vec3 randomNormalized(in vec2 seed){return normalize(randomUnitSphere(seed));}vec3 randomHemisphere(in vec3 normal,in vec2 seed){vec3 unitSphere=randomUnitSphere(seed);return dot(unitSphere,normal)>0.0? unitSphere :-unitSphere;}struct Camera{vec3 u;vec3 v;vec3 origin;vec3 vertical;vec3 horizontal;float lensRadius;vec3 lowerLeftCorner;};Camera createCamera(const in vec3 origin,const in vec3 lookAt,const in vec3 vUp,const in vec2 res,const in float fov,const in float aperture,const in float focusDist){float height=tan(degToRad(fov)*0.5)*2.0;float width=res.x/res.y*height;vec3 w=normalize(origin-lookAt);vec3 u=normalize(cross(vUp,w));vec3 v=cross(w,u);vec3 vertical=v*height*focusDist;vec3 horizontal=u*width*focusDist;return Camera(u,v,origin,vertical,horizontal,aperture*0.5,origin-horizontal*0.5-vertical*0.5-focusDist*w);}Ray getRay(Camera camera,in float s,in float t,in vec2 seed){vec3 randomDisk=randomUnitDisk(seed)*camera.lensRadius;vec3 offset=camera.u*randomDisk.x+camera.v*randomDisk.y;return Ray(camera.origin+offset,camera.lowerLeftCorner+camera.horizontal*s+camera.vertical*t-camera.origin-offset);}out Camera camera;
#endif
void main(void){
#ifdef CAMERA
vec2 res=vec2(config.width,config.height);camera=createCamera(vec3(13.0,2.0,3.0),vec3(0.0,0.0,0.0),vec3(0.0,1.0,0.0),res,20.0,0.1,10.0);
#endif
gl_Position=vec4((position/resolution*2.0-1.0)*vec2(1.0,-1.0),0.0,1.0);uv=coords;}`,l={maxDepth:50,samples:500,height:240,width:360,log:!1};class O extends F{samples=0;texture1;texture2;frameBuffer1;frameBuffer2;draw=this.drawImage.bind(this,void 0);samplesUniform;constructor(t,e=$){if(t.tracer!=="WebGL2")super(t,e,R);else{const r=new L,s=r.hittables.length;super(t,e.replace("#version 300 es",`#version 300 es
#define SPHERES ${s}u`),R.replace("#version 300 es",`#version 300 es
#define CAMERA`)),this.createWorld(r),this.createFrameBufferTextures(),this.samplesUniform=this.context.getUniformLocation(this.program,"samples")}}bindFrameBufferTextures(t,e){this.context.bindFramebuffer(this.context.FRAMEBUFFER,t),this.context.framebufferTexture2D(this.context.FRAMEBUFFER,this.context.COLOR_ATTACHMENT0,this.context.TEXTURE_2D,e,0)}createWorld(t){const e=[];for(let r=0,s=t.hittables.length;r<s;r++){const a=t.hittables[r],n={albedo:[1,1,1],extra:-1,type:0};a.material instanceof b?(n.albedo=a.material.albedo.get(),n.extra=a.material.fuzz,n.type=1):a.material instanceof T?(n.extra=a.material.refraction,n.type=2):n.albedo=a.material.albedo.get(),e.push({center:a.center.get(),radius:a.radius,material:n})}t.dispose(),this.updateUniforms(e)}createFrameBufferTextures(){this.texture1=this.context.createTexture(),this.setActiveTexture(this.textureData,this.texture1),this.setTextureParameters(),this.texture2=this.context.createTexture(),this.setActiveTexture(null,this.texture2),this.setTextureParameters(),this.frameBuffer1=this.context.createFramebuffer(),this.bindFrameBufferTextures(this.frameBuffer1,this.texture1),this.frameBuffer2=this.context.createFramebuffer(),this.bindFrameBufferTextures(this.frameBuffer2,this.texture2)}updateUniforms(t){for(let e=0,r=t.length;e<r;e++){const s=this.context.getUniformLocation(this.program,`spheres[${e}].transform`),a=this.context.getUniformLocation(this.program,`spheres[${e}].material`);this.context.uniform4fv(s,[...t[e].center,t[e].radius]),this.context.uniform4fv(a,[...t[e].material.albedo,t[e].material.extra])}}drawImage(t){if(t)return super.drawImage(t);this.context.uniform1ui(this.samplesUniform,++this.samples),this.samples<l.samples&&requestAnimationFrame(this.draw),this.context.bindFramebuffer(this.context.FRAMEBUFFER,this.frameBuffer2),this.context.bindTexture(this.context.TEXTURE_2D,this.texture1),this.context.drawArrays(this.context.TRIANGLES,0,6),this.context.bindFramebuffer(this.context.FRAMEBUFFER,null),this.context.bindTexture(this.context.TEXTURE_2D,this.texture2),this.context.drawArrays(this.context.TRIANGLES,0,6);const e=this.frameBuffer1;this.frameBuffer1=this.frameBuffer2,this.frameBuffer2=e;const r=this.texture1;this.texture1=this.texture2,this.texture2=r,u.dispatch("WebGL2::Stats::Update",{sample:this.samples})}}class X extends U{image;constructor(t){super(t),this.context.imageSmoothingEnabled=!0,this.context.imageSmoothingQuality="high",this.image=this.context.getImageData(0,0,this.width,this.height)}drawImage(t){for(let e=0,r=0;e<t.length;e+=3,r+=4)this.image.data[r]=t[e],this.image.data[r+1]=t[e+1],this.image.data[r+2]=t[e+2],this.image.data[r+3]=255;this.context.putImageData(this.image,0,0)}clear(){this.context.fillStyle=W(this.clearColor),this.context.clearRect(0,0,this.width,this.height),this.context.fillRect(0,0,this.width,this.height)}}class H{sample=0;trace;format;collect;tracer;f32=new Float32Array(l.width*l.height*3);u8=new Uint8ClampedArray(l.width*l.height*3);canvas;worker;samples=l.samples;constructor(t){this.canvas=this.createCanvas(t),this.tracer=this.getTracer(t),(this.worker=t.worker)?this.createWorkerEvents():this.loadTracer(),this.canvas.clear()}createCanvas(t){switch(t.context){case"WebGL2":return new O(t);case"WebGL":return new F(t);default:return new X(t)}}getTracer(t){return t.tracer!=="AssemblyScript"?"TypeScript":"AssemblyScript"}createWorkerEvents(){this.worker?.post("Create::Tracer",{tracer:this.tracer}),this.worker?.add("Create::Tracer",()=>{this.worker?.add("Create::PPMImage",this.showPPMImage.bind(this)),u.dispatch(`${this.tracer}::Start`),this.createPPMImage()})}loadTracer(){(this.tracer==="AssemblyScript"?import("./release-fee50a71.js"):import("./Tracer-77b2abd5.js")).then(({trace:t,format:e,collect:r})=>{u.dispatch(`${this.tracer}::Start`,null,!0),this.trace=t,this.format=e,this.collect=r,this.createPPMImage()})}createPPMImage(t=!1){if(this.worker)return this.worker.post("Create::PPMImage",{download:t});this.tracer==="AssemblyScript"?(this.f32=Float32Array.from(this.trace(this.f32)),this.u8=Uint8ClampedArray.from(this.format(this.f32,this.u8,++this.sample)),!(this.sample%100)&&this.collect()):this.format(this.trace(this.f32),this.u8,++this.sample),this.showPPMImage({pixels:this.u8,sample:this.sample,download:t},!0)}showPPMImage(t,e){const r=t;this.canvas.drawImage(r.pixels),this.samples===r.sample||!(this.worker?r.sample:this.sample)?r.download&&this.downloadPPMImage(r.pixels,e):setTimeout(this.createPPMImage.bind(this,r.download),D),u.dispatch(`${this.tracer}::Stats::Update`,{sample:r.sample},e)}downloadPPMImage(t,e){let r=`P3
${this.canvas.width} ${this.canvas.height}
255
`;for(let s=0;s<t.length;s+=3)r+=`${t[s]} ${t[s+1]} ${t[s+2]}
`;u.dispatch("PPMImage::Download",{image:r},e)}}class j extends CustomEvent{data}class V{target=new EventTarget;events=new Map;callbacks=new Map;add(t,e){const r=this.callbacks.get(t);r?r.push(e):this.callbacks.set(t,[e]),this.events.set(t,new j(t)),this.target.addEventListener(t,e,!1)}dispatch(t,e){const r=this.events.get(t);r&&(r.data=e,this.target.dispatchEvent(r))}remove(t,e){const r=this.callbacks.get(t);if(r&&e){const s=r.indexOf(e),a=e;s!==-1&&r.splice(s,1),this.target.removeEventListener(t,a,!1)}e||(r?.forEach(s=>this.target.removeEventListener(t,s,!1)),this.callbacks.delete(t),this.events.delete(t))}dispose(){this.callbacks.clear(),this.events.clear()}}class A{constructor(t){this.worker=t}add(t,e){this.worker.add(t,e)}static dispatch(t,e){Z.postMessage({name:t,response:{data:e}})}remove(t){this.worker.remove(t)}dispose(){this.worker.dispose()}}class Y extends V{offscreen=!1;workerEvents;createWorkerEvents(t,e){this.workerEvents=new A(t),this.offscreen=e}add(t,e){this.offscreen?this.workerEvents?.add(t,e):super.add(t,e)}dispatch(t,e,r=!1){r?A.dispatch(t,e):super.dispatch(t,e)}remove(t,e){this.offscreen?this.workerEvents?.remove(t):super.remove(t,e)}dispose(){this.workerEvents?.dispose(),super.dispose()}}var u=new Y;let p=0,y,P,M,x=new Float32Array(l.width*l.height*3),w=new Uint8ClampedArray(l.width*l.height*3);self.onerror=i=>console.error(i);self.onmessage=async i=>{const{event:t}=i.data;let{params:e}=i.data;switch(t){case"Transfer::Offscreen":return new H({offscreen:!0,...e});case"Create::Tracer":{const r=await(e.tracer==="AssemblyScript"?import("./release-fee50a71.js"):import("./Tracer-77b2abd5.js"));M=r.collect,P=r.format,y=r.trace;break}case"Create::PPMImage":{x=new Float32Array(y(x)),w=new Uint8ClampedArray(P(x,w,++p)),e={sample:p,pixels:w,...e},!(p%100)&&M();break}}self.postMessage({response:e,name:t})};var Z=self;export{l as C,c as R,o as V,L as W,K as d,Q as f};
