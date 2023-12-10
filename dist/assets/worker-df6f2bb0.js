var h={maxDepth:50,samples:500,height:240,width:360,log:!1};const g=(i,e=0,t=1)=>Math.max(e,Math.min(i,t)),f=(i,e)=>Math.random()*(e-i)+i,J=i=>i*Math.PI/180,_=1/.06;class o{vec=[0,0,0];constructor(e=0,t=e,r=e){this.vec[0]=e,this.vec[1]=t,this.vec[2]=r}refract(e,t){const r=Math.min(this.clone.negate.dot(e),1);this.copy(e.clone.multiply(r).add(this).multiply(t));const n=Math.abs(1-this.lengthSquared);return this.add(e.multiply(-Math.sqrt(n)))}set(e,t,r){return this.vec[0]=e,this.vec[1]=t,this.vec[2]=r,this}multiply(e){if(typeof e!="number")return this.set(this.vec[0]*e.x,this.vec[1]*e.y,this.vec[2]*e.z);const t=e;return this.vec[0]*=t,this.vec[1]*=t,this.vec[2]*=t,this}divide(e){return typeof e=="number"?this.multiply(1/e):this.set(this.vec[0]/e.x,this.vec[1]/e.y,this.vec[2]/e.z)}random(e=0,t=1){return this.set(f(e,t),f(e,t),f(e,t))}reflect(e){return this.sub(e.clone.multiply(this.dot(e)*2))}get randomNormalized(){return this.randomUnitSphere.normalize}get randomUnitSphere(){for(;;)if(this.random(-1).lengthSquared<1)return this}get lengthSquared(){return this.dot(this)}get randomUnitDisk(){for(;;)if(this.random(-1),this.vec[2]=0,this.lengthSquared<1)return this}cross(e){return this.set(this.vec[1]*e.z-this.vec[2]*e.y,this.vec[2]*e.x-this.vec[0]*e.z,this.vec[0]*e.y-this.vec[1]*e.x)}dot(e){return this.vec[0]*e.x+this.vec[1]*e.y+this.vec[2]*e.z}copy(e){const{x:t,y:r,z:n}=e;return this.set(t,r,n)}add(e){return this.vec[0]+=e.x,this.vec[1]+=e.y,this.vec[2]+=e.z,this}sub(e){return this.vec[0]-=e.x,this.vec[1]-=e.y,this.vec[2]-=e.z,this}get nearZero(){return Math.abs(this.vec[0])<1e-8&&Math.abs(this.vec[1])<1e-8&&Math.abs(this.vec[2])<1e-8}get normalize(){return this.divide(this.length)}get length(){return Math.sqrt(this.lengthSquared)}get clone(){return new o(this.vec[0],this.vec[1],this.vec[2])}reset(e=0){return this.set(e,e,e)}get negate(){return this.multiply(-1)}get sqrt(){return this.set(Math.sqrt(this.vec[0]),Math.sqrt(this.vec[1]),Math.sqrt(this.vec[2]))}get rgb(){return this.set(g(this.vec[0]*256|0,0,255),g(this.vec[1]*256|0,0,255),g(this.vec[2]*256|0,0,255))}get x(){return this.vec[0]}get y(){return this.vec[1]}get z(){return this.vec[2]}get(){return[...this.vec]}}const M=(i,e=1)=>new Map([["r",i>>16&e],["g",i>>8&e],["b",i&e]]),G=(i,e)=>i.divide(e).sqrt.rgb,B=i=>`#${`000000${i.toString(16)}`.slice(-6)}`,ee=(i,e,t)=>{const r=new o;for(let n=0;n<i.length;n+=3){const{x:s,y:a,z:d}=G(r.set(i[n],i[n+1],i[n+2]),t);e[n]=s,e[n+1]=a,e[n+2]=d}return e};class E{textureData;context;image;clearColor=0;height;width;constructor(e){const{canvas:t,context:r,offscreen:n}=e;this.width=t.width,this.height=t.height,this.context=t.getContext(this.getContextId(r),this.getOptions(r,n)),this.textureData=new Uint8ClampedArray(this.width*this.height*4),this.image=new ImageData(this.textureData,this.width,this.height)}getContextId(e){switch(e){case"WebGPU":return"webgpu";case"WebGL2":return"webgl2";case"WebGL":return"webgl";default:return"2d"}}getOptions(e,t=!1){switch(e){case"WebGPU":return;case"Canvas2D":return{willReadFrequently:!t,desynchronized:t,colorSpace:"srgb",alpha:!1};default:return{powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,desynchronized:!t,premultipliedAlpha:!1,antialias:!0,stencil:!1,depth:!1,alpha:!0}}}setImageData(e){for(let t=0,r=0;t<e.length;t+=3,r+=4)this.image.data[r]=e[t],this.image.data[r+1]=e[t+1],this.image.data[r+2]=e[t+2],this.image.data[r+3]=255}}var L=`struct VertexOutput {
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
}`;class z extends E{device;adapter;format;imageTexture;imageBindGroup;imagePipeline;tracerPipeline;constructor(e,t,r=L){super(e),this.initializeWebGPU().then(this.createRenderPipeline.bind(this,r,e.tracer,t)).catch(n=>u.dispatch("WebGPU::Init::Fail",n.message))}async initializeWebGPU(){if(!navigator.gpu)throw new Error("WebGPU is not supported on this browser.");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance",forceFallbackAdapter:!1});if(e)this.adapter=e;else throw new Error("No appropriate GPUAdapter found.");if(!this.context)throw new Error("Failed to initialize WebGPU context.");this.device=await this.adapter.requestDevice(),this.format=navigator.gpu.getPreferredCanvasFormat(),this.context.configure({device:this.device,format:this.format})}createRenderPipeline(e,t,r){this.clear(),t==="WebGPU"?this.createTracerPipeline(e):this.createImagePipeline(e),r?.()}createTracerPipeline(e){const t=this.device.createShaderModule({label:"Tracer Shader",code:e});this.tracerPipeline=this.device.createRenderPipeline({label:"Tracer Pipeline",layout:"auto",vertex:{entryPoint:"mainVert",module:t},fragment:{targets:[{format:this.format}],entryPoint:"mainFrag",module:t}})}createImagePipeline(e){const{width:t,height:r}=h,n=this.device.createSampler({addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",minFilter:"nearest",magFilter:"nearest"});this.imageTexture=this.device.createTexture({label:"CPU Computed Image",size:[t,r],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});const s=this.device.createShaderModule({label:"Main Shader",code:e});this.imagePipeline=this.device.createRenderPipeline({label:"Image Pipeline",layout:"auto",vertex:{entryPoint:"mainVert",module:s},fragment:{targets:[{format:this.format}],entryPoint:"mainFrag",module:s}}),this.imageBindGroup=this.device.createBindGroup({layout:this.imagePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.imageTexture.createView()},{binding:1,resource:n}]})}setActiveTexture(e){const{width:t,height:r}=h;this.setImageData(e),this.device.queue.copyExternalImageToTexture({source:this.image,flipY:!0},{texture:this.imageTexture},{width:t,height:r});const n=this.device.createCommandEncoder({label:"Renderer Command Encoder"}),s=n.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),storeOp:"store",loadOp:"clear"}]});s.setBindGroup(0,this.imageBindGroup),s.setPipeline(this.imagePipeline),s.draw(6),s.end(),this.device.queue.submit([n.finish()])}drawImage(e){if(e)return this.setActiveTexture(e);const t=this.device.createCommandEncoder({label:"Renderer Command Encoder"}),r=t.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),storeOp:"store",loadOp:"clear"}]});r.setPipeline(this.tracerPipeline),r.draw(6),r.end(),this.device.queue.submit([t.finish()])}clear(){const e=this.device.createCommandEncoder(),t=M(this.clearColor,1),r=t.get("r")??0,n=t.get("g")??0,s=t.get("b")??0;e.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:[r,n,s,1],storeOp:"store",loadOp:"clear"}]}).end(),this.device.queue.submit([e.finish()])}get ready(){return!!this.imagePipeline}}class P{}class k{t=0;frontFace=!1;material;point=new o;normal=new o;setFaceNormal(e,t){this.frontFace=e.direction.dot(t)<0,this.normal.copy(this.frontFace?t:t.negate)}}var c=new k;class I{}class W extends I{objects=[];constructor(){super()}add(e){this.objects.push(e)}hit(e,t,r){let n=!1,s=r;for(let a=0,d=this.objects.length;a<d;a++)this.objects[a].hit(e,t,s)&&(s=c.t,n=!0);return n}get hittables(){return this.objects}dispose(){this.objects.length=0}}class q{list=new W;color=new o;constructor(){this.addSphere(1e3,new o(0,-1e3,0),new p(new o(.5))),this.generateSmallSpheres(),this.addSphere(1,new o(0,1,0),new T(1.5)),this.addSphere(1,new o(-4,1,0),new p(new o(.4,.2,.1))),this.addSphere(1,new o(4,1,0),new w(new o(.7,.6,.5),0))}addSphere(e,t,r){this.list.add(new N(e,t,r))}generateSmallSpheres(){for(let e=-11;e<11;e++)for(let t=-11;t<11;t++){const r=new o(Math.random()*.9+e,.2,Math.random()*.9+t),n=new o(4,.2,0);if(r.clone.sub(n).length>.9){const s=Math.random();if(s<.8){this.color.random().multiply(this.color.random());const a=new p(this.color);this.addSphere(.2,r,a)}else if(s<.95){this.color.random(.5);const a=f(0,.5),d=new w(this.color,a);this.addSphere(.2,r,d)}else{const a=new T(1.5);this.addSphere(.2,r,a)}}}}get hittables(){return this.list.hittables}get objects(){return this.list}dispose(){this.list.dispose(),this.color.reset()}}class N extends I{constructor(e,t,r){super(),this.radius=e,this.center=t,this.material=r}hit(e,t,r){const n=e.origin.clone.sub(this.center),s=e.direction.lengthSquared,a=n.dot(e.direction),d=n.lengthSquared-this.radius*this.radius,m=a*a-s*d;if(m<0)return!1;const R=Math.sqrt(m);let l=(-a-R)/s;if((l<t||l>r)&&(l=(-a+R)/s,l<t||l>r))return!1;c.point.copy(e.at(l));const D=c.point.clone.sub(this.center).divide(this.radius);return c.setFaceNormal(e,D),c.material=this.material,c.t=l,!0}}class w extends P{fuzz;albedo;direction=new o;constructor(e,t){super(),this.albedo=e.clone,this.fuzz=Math.min(t,1)}scatter(e,t,r){const n=e.direction.normalize.reflect(c.normal);return this.direction.randomUnitSphere.multiply(this.fuzz).add(n),t.direction=this.direction,t.origin=c.point,r.copy(this.albedo),this.direction.dot(c.normal)>0}}class p extends P{albedo;direction=new o;constructor(e){super(),this.albedo=e.clone}scatter(e,t,r){const n=c.normal.clone.add(this.direction.randomNormalized);return n.nearZero&&n.copy(c.normal),t.direction=n,t.origin=c.point,r.copy(this.albedo),!0}}class T extends P{constructor(e){super(),this.refraction=e}reflectance(e,t){const r=Math.pow((1-t)/(1+t),2);return Math.pow(1-e,5)*(1-r)+r}scatter(e,t,r){const n=e.direction.normalize,s=Math.min(n.clone.negate.dot(c.normal),1),a=c.frontFace?1/this.refraction:this.refraction;return Math.sqrt(1-s*s)*a>1||Math.random()<this.reflectance(s,a)?n.reflect(c.normal):n.refract(c.normal,a),t.direction=n,t.origin=c.point,r.reset(1),!0}}var O=`#ifndef GL_FRAGMENT_PRECISION_HIGH
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
`,V=`precision mediump float;

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
`;class F extends E{texture;program;constructor(e,t=O,r=V){super(e),this.createProgram(t,r),this.createScene(),this.clear()}loadShader(e,t){const r=this.context.createShader(t);return this.context.shaderSource(r,e),this.context.compileShader(r),this.context.getShaderParameter(r,this.context.COMPILE_STATUS)?r:(console.error(`An error occurred compiling the shaders: ${this.context.getShaderInfoLog(r)}`),this.context.deleteShader(r))}setBufferData(e=this.width,t=this.height){this.context.bufferData(this.context.ARRAY_BUFFER,new Float32Array([0,0,e,0,0,t,0,t,e,0,e,t]),this.context.STATIC_DRAW)}createProgram(e,t){const r=this.loadShader(e,this.context.FRAGMENT_SHADER),n=this.loadShader(t,this.context.VERTEX_SHADER);if(this.program=this.context.createProgram(),n&&r&&(this.context.attachShader(this.program,r),this.context.attachShader(this.program,n),this.context.linkProgram(this.program)),!this.context.getProgramParameter(this.program,this.context.LINK_STATUS))return console.error(`Unable to initialize shader program: ${this.context.getProgramInfoLog(this.program)}`);this.context.clear(this.context.COLOR_BUFFER_BIT);const s=M(this.clearColor,1),a=s.get("r")??0,d=s.get("g")??0,m=s.get("b")??0;this.context.clearColor(a,d,m,1),this.context.useProgram(this.program)}setTextureParameters(){this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_S,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_T,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MIN_FILTER,this.context.NEAREST),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MAG_FILTER,this.context.NEAREST)}setActiveTexture(e=this.textureData,t=this.texture){this.context.activeTexture(this.context.TEXTURE0),this.context.bindTexture(this.context.TEXTURE_2D,t),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.RGB,this.width,this.height,0,this.context.RGB,this.context.UNSIGNED_BYTE,e)}createScene(){const e=this.context.getAttribLocation(this.program,"coords");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(1,1),this.context.enableVertexAttribArray(e),this.context.vertexAttribPointer(e,2,this.context.FLOAT,!1,0,0);const t=this.context.getAttribLocation(this.program,"position");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(),this.context.enableVertexAttribArray(t),this.context.vertexAttribPointer(t,2,this.context.FLOAT,!1,0,0);const r=this.context.getUniformLocation(this.program,"resolution");this.context.uniform2f(r,this.width,this.height),this.texture=this.context.createTexture(),this.setBufferData(),this.setActiveTexture(),this.setTextureParameters()}drawImage(e){this.setActiveTexture(e),this.context.drawArrays(this.context.TRIANGLES,0,6)}clear(){this.context.clear(this.context.COLOR_BUFFER_BIT)}}var $=`#version 300 es

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
}`,A=`#version 300 es

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
}`;class X extends F{samples=0;texture1;texture2;frameBuffer1;frameBuffer2;draw=this.drawImage.bind(this,void 0);samplesUniform;constructor(e,t=$){if(e.tracer!=="WebGL2")super(e,t,A);else{const r=new q,n=r.hittables.length;super(e,t.replace("#version 300 es",`#version 300 es
#define SPHERES ${n}u`),A.replace("#version 300 es",`#version 300 es
#define CAMERA`)),this.createWorld(r),this.createFrameBufferTextures(),this.samplesUniform=this.context.getUniformLocation(this.program,"samples")}}bindFrameBufferTextures(e,t){this.context.bindFramebuffer(this.context.FRAMEBUFFER,e),this.context.framebufferTexture2D(this.context.FRAMEBUFFER,this.context.COLOR_ATTACHMENT0,this.context.TEXTURE_2D,t,0)}createWorld(e){const t=[];for(let r=0,n=e.hittables.length;r<n;r++){const s=e.hittables[r],a={albedo:[1,1,1],extra:-1,type:0};s.material instanceof w?(a.albedo=s.material.albedo.get(),a.extra=s.material.fuzz,a.type=1):s.material instanceof T?(a.extra=s.material.refraction,a.type=2):a.albedo=s.material.albedo.get(),t.push({center:s.center.get(),radius:s.radius,material:a})}e.dispose(),this.updateUniforms(t)}createFrameBufferTextures(){this.texture1=this.context.createTexture(),this.setActiveTexture(this.textureData,this.texture1),this.setTextureParameters(),this.texture2=this.context.createTexture(),this.setActiveTexture(null,this.texture2),this.setTextureParameters(),this.frameBuffer1=this.context.createFramebuffer(),this.bindFrameBufferTextures(this.frameBuffer1,this.texture1),this.frameBuffer2=this.context.createFramebuffer(),this.bindFrameBufferTextures(this.frameBuffer2,this.texture2)}updateUniforms(e){for(let t=0,r=e.length;t<r;t++){const n=this.context.getUniformLocation(this.program,`spheres[${t}].transform`),s=this.context.getUniformLocation(this.program,`spheres[${t}].material`);this.context.uniform4fv(n,[...e[t].center,e[t].radius]),this.context.uniform4fv(s,[...e[t].material.albedo,e[t].material.extra])}}drawImage(e){if(e)return super.drawImage(e);this.context.uniform1ui(this.samplesUniform,++this.samples),this.samples<h.samples&&requestAnimationFrame(this.draw),this.context.bindFramebuffer(this.context.FRAMEBUFFER,this.frameBuffer2),this.context.bindTexture(this.context.TEXTURE_2D,this.texture1),this.context.drawArrays(this.context.TRIANGLES,0,6),this.context.bindFramebuffer(this.context.FRAMEBUFFER,null),this.context.bindTexture(this.context.TEXTURE_2D,this.texture2),this.context.drawArrays(this.context.TRIANGLES,0,6);const t=this.frameBuffer1;this.frameBuffer1=this.frameBuffer2,this.frameBuffer2=t;const r=this.texture1;this.texture1=this.texture2,this.texture2=r,u.dispatch("WebGL2::Stats::Update",{sample:this.samples})}}class H extends E{constructor(e){super(e),this.clear(),this.context.imageSmoothingEnabled=!0,this.context.imageSmoothingQuality="high",this.image=this.context.getImageData(0,0,this.width,this.height)}drawImage(e){this.setImageData(e),this.context.putImageData(this.image,0,0)}clear(){this.context.fillStyle=B(this.clearColor),this.context.clearRect(0,0,this.width,this.height),this.context.fillRect(0,0,this.width,this.height)}}class j{sample=0;trace;format;collect;tracer;context;f32=new Float32Array(h.width*h.height*3);u8=new Uint8ClampedArray(h.width*h.height*3);canvas;worker;samples=h.samples;constructor(e){this.canvas=this.createCanvas(e),this.tracer=this.getTracer(e),this.context=e.context,(this.worker=e.worker)?this.createWorkerEvents():this.loadTracer()}createCanvas(e){switch(e.context){case"WebGPU":return new z(e,e.worker?this.onCreateTracer.bind(this):this.onLoadTracer.bind(this));case"WebGL2":return new X(e);case"WebGL":return new F(e);default:return new H(e)}}getTracer(e){return e.tracer!=="AssemblyScript"?"TypeScript":"AssemblyScript"}createWorkerEvents(){this.worker?.post("Create::Tracer",{tracer:this.tracer}),this.worker?.add("Create::Tracer",this.onCreateTracer.bind(this))}onCreateTracer(){this.canvasContextReady&&(this.worker?.add("Create::PPMImage",this.showPPMImage.bind(this)),u.dispatch(`${this.tracer}::Start`),this.createPPMImage())}loadTracer(){(this.tracer==="AssemblyScript"?import("./release-fee50a71.js"):import("./Tracer-b4c0213a.js")).then(({trace:e,format:t,collect:r})=>{this.collect=r,this.format=t,this.trace=e,this.onLoadTracer()})}onLoadTracer(){this.canvasContextReady&&(u.dispatch(`${this.tracer}::Start`,null,!0),this.createPPMImage())}createPPMImage(e=!1){if(this.worker)return this.worker.post("Create::PPMImage",{download:e});this.tracer==="AssemblyScript"?(this.f32=Float32Array.from(this.trace(this.f32)),this.u8=Uint8ClampedArray.from(this.format(this.f32,this.u8,++this.sample)),!(this.sample%100)&&this.collect()):this.format(this.trace(this.f32),this.u8,++this.sample),this.showPPMImage({pixels:this.u8,sample:this.sample,download:e},!0)}showPPMImage(e,t){const r=e;this.canvas.drawImage(r.pixels),this.samples===r.sample||!(this.worker?r.sample:this.sample)?r.download&&this.downloadPPMImage(r.pixels,t):setTimeout(this.createPPMImage.bind(this,r.download),_),u.dispatch(`${this.tracer}::Stats::Update`,{sample:r.sample},t)}downloadPPMImage(e,t){let r=`P3
${this.canvas.width} ${this.canvas.height}
255
`;for(let n=0;n<e.length;n+=3)r+=`${e[n]} ${e[n+1]} ${e[n+2]}
`;u.dispatch("PPMImage::Download",{image:r},t)}get canvasContextReady(){return this.context==="WebGPU"?this.canvas.ready:!0}}class Y extends CustomEvent{data}class Z{target=new EventTarget;events=new Map;callbacks=new Map;add(e,t){const r=this.callbacks.get(e);r?r.push(t):this.callbacks.set(e,[t]),this.events.set(e,new Y(e)),this.target.addEventListener(e,t,!1)}dispatch(e,t){const r=this.events.get(e);r&&(r.data=t,this.target.dispatchEvent(r))}remove(e,t){const r=this.callbacks.get(e);if(r&&t){const n=r.indexOf(t),s=t;n!==-1&&r.splice(n,1),this.target.removeEventListener(e,s,!1)}t||(r?.forEach(n=>this.target.removeEventListener(e,n,!1)),this.callbacks.delete(e),this.events.delete(e))}dispose(){this.callbacks.clear(),this.events.clear()}}class S{constructor(e){this.worker=e}add(e,t){this.worker.add(e,t)}static dispatch(e,t){Q.postMessage({name:e,response:{data:t}})}remove(e){this.worker.remove(e)}dispose(){this.worker.dispose()}}class K extends Z{offscreen=!1;workerEvents;createWorkerEvents(e,t){this.workerEvents=new S(e),this.offscreen=t}add(e,t){this.offscreen?this.workerEvents?.add(e,t):super.add(e,t)}dispatch(e,t,r=!1){r?S.dispatch(e,t):super.dispatch(e,t)}remove(e,t){this.offscreen?this.workerEvents?.remove(e):super.remove(e,t)}dispose(){this.workerEvents?.dispose(),super.dispose()}}var u=new K;let v=0,y,C,U,x=new Float32Array(h.width*h.height*3),b=new Uint8ClampedArray(h.width*h.height*3);self.onerror=i=>console.error(i);self.onmessage=async i=>{const{event:e}=i.data;let{params:t}=i.data;switch(e){case"Transfer::Offscreen":return new j({offscreen:!0,...t});case"Create::Tracer":{const r=await(t.tracer==="AssemblyScript"?import("./release-fee50a71.js"):import("./Tracer-b4c0213a.js"));U=r.collect,C=r.format,y=r.trace;break}case"Create::PPMImage":{x=new Float32Array(y(x)),b=new Uint8ClampedArray(C(x,b,++v)),t={sample:v,pixels:b,...t},!(v%100)&&U();break}}self.postMessage({response:t,name:e})};var Q=self;export{h as C,c as R,o as V,q as W,J as d,ee as f};