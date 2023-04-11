var P=Object.defineProperty;var b=(c,o,h)=>o in c?P(c,o,{enumerable:!0,configurable:!0,writable:!0,value:h}):c[o]=h;var r=(c,o,h)=>(b(c,typeof o!="symbol"?o+"":o,h),h);(function(){"use strict";var c=`#version 300 es

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
`,o=`#version 300 es

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
`;const h=(t,i=0,e=1)=>Math.max(i,Math.min(t,e)),T=({r:t,g:i,b:e})=>h(t*255,0,255)<<16^h(i*255,0,255)<<8^h(e*255,0,255)<<0,l=(t,i=1)=>(t=typeof t=="string"?p(t):t,{r:t>>16&i,g:t>>8&i,b:t&i}),E=t=>(t=typeof t=="number"?t:T(t),`#${`000000${t.toString(16)}`.slice(-6)}`),p=t=>(t=typeof t=="string"?t:E(t),parseInt(t.slice(1),16));class f{constructor(i,e){r(this,"BYTES_PER_ELEMENT");r(this,"context");r(this,"backEnd");r(this,"clearColor",0);r(this,"height");r(this,"width");r(this,"side");this.backEnd=e,this.width=i.width,this.height=i.height,this.context=i.getContext(e,this.getOptions(e)),this.BYTES_PER_ELEMENT=+(e==="2d")+3,this.side=this.width*this.BYTES_PER_ELEMENT}getOptions(i){switch(i){case"2d":return{willReadFrequently:!1,desynchronized:!0,colorSpace:"srgb",alpha:!1};case"webgpu":return{};default:return{powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,premultipliedAlpha:!1,desynchronized:!0,antialias:!0,stencil:!1,depth:!1,alpha:!1}}}getPixel(i,e){return e*this.side+i*this.BYTES_PER_ELEMENT}}var v=`precision mediump float;

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
`,R=`#ifndef GL_FRAGMENT_PRECISION_HIGH
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
`;class m extends f{constructor(e,s="webgl",n=R,a=v){super(e,s);r(this,"textureData");r(this,"texture");r(this,"program");this.createProgram(n,a),this.createScene()}loadShader(e,s){const n=this.context.createShader(s);return this.context.shaderSource(n,e),this.context.compileShader(n),this.context.getShaderParameter(n,this.context.COMPILE_STATUS)?n:(console.error(`An error occurred compiling the shaders: ${this.context.getShaderInfoLog(n)}`),this.context.deleteShader(n))}setBufferData(e=this.width,s=this.height){this.context.bufferData(this.context.ARRAY_BUFFER,new Float32Array([0,0,e,0,0,s,0,s,e,0,e,s]),this.context.STATIC_DRAW)}createProgram(e,s){const n=this.loadShader(e,this.context.FRAGMENT_SHADER),a=this.loadShader(s,this.context.VERTEX_SHADER);if(this.program=this.context.createProgram(),a&&n&&(this.context.attachShader(this.program,n),this.context.attachShader(this.program,a),this.context.linkProgram(this.program)),!this.context.getProgramParameter(this.program,this.context.LINK_STATUS))return console.error(`Unable to initialize shader program: ${this.context.getProgramInfoLog(this.program)}`);this.context.clear(this.context.COLOR_BUFFER_BIT);const{r:u,g,b:d}=l(this.clearColor,1);this.context.clearColor(u,g,d,1),this.context.useProgram(this.program)}updateTexture(){this.context.activeTexture(this.context.TEXTURE0),this.context.bindTexture(this.context.TEXTURE_2D,this.texture),this.context.texImage2D(this.context.TEXTURE_2D,0,this.context.RGB,this.width,this.height,0,this.context.RGB,this.context.UNSIGNED_BYTE,this.textureData)}createScene(){const e=this.context.getAttribLocation(this.program,"coords");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(1,1),this.context.enableVertexAttribArray(e),this.context.vertexAttribPointer(e,2,this.context.FLOAT,!1,0,0);const s=this.context.getAttribLocation(this.program,"position");this.context.bindBuffer(this.context.ARRAY_BUFFER,this.context.createBuffer()),this.setBufferData(),this.context.enableVertexAttribArray(s),this.context.vertexAttribPointer(s,2,this.context.FLOAT,!1,0,0);const n=this.context.getUniformLocation(this.program,"resolution");this.context.uniform2f(n,this.width,this.height),this.textureData=new Uint8Array(this.width*this.height*this.BYTES_PER_ELEMENT),this.texture=this.context.createTexture(),this.setBufferData(),this.updateTexture(),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_S,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_WRAP_T,this.context.CLAMP_TO_EDGE),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MIN_FILTER,this.context.NEAREST),this.context.texParameteri(this.context.TEXTURE_2D,this.context.TEXTURE_MAG_FILTER,this.context.NEAREST)}draw(e,s,n){const a=this.getPixel(e,s);n=n/16777215*255,this.textureData[a+0]=n,this.textureData[a+1]=n,this.textureData[a+2]=n,this.updateTexture(),this.context.drawArrays(this.context.TRIANGLES,0,6)}clear(){this.context.clear(this.context.COLOR_BUFFER_BIT)}}class _ extends m{constructor(i){super(i,"webgl2",o,c)}}class A extends f{constructor(e){super(e,"2d");r(this,"image");this.context.imageSmoothingEnabled=!0,this.context.imageSmoothingQuality="high",this.image=this.context.getImageData(0,0,this.width,this.height)}draw(e,s,n){const{r:a,g:u,b:g}=l(n,255),d=this.getPixel(e,s);this.image.data.set([a,u,g,255],d),this.context.putImageData(this.image,0,0)}clear(){this.context.fillStyle=E(this.clearColor),this.context.clearRect(0,0,this.width,this.height),this.context.fillRect(0,0,this.width,this.height)}}class S{constructor(i){r(this,"canvas");this.canvas=this.createCanvas(i),this.canvas.clear(),this.canvas.draw(128,128,16777215)}createCanvas(i){switch(i.backEnd){case"webgl2":return new _(i.canvas);case"webgl":return new m(i.canvas);default:return new A(i.canvas)}}}const x=self;x.onerror=t=>console.error(t),x.onmessage=t=>{const{event:i,params:e}=t.data;if(i==="Transfer")return new S(e);x.postMessage({response:e,name:i})}})();
