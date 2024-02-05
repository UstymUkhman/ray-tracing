// Workgroup size:
override size: u32;

#include Camera.wgsl;
#include utils/Color.wgsl;

struct Tracer {
  maxDepth: u32,
  samples: u32,
  seed: vec3u
};

@group(0) @binding(0)
var<uniform> tracer: Tracer;

@group(0) @binding(1)
var<storage, read> camera: Camera;

@group(0) @binding(2)
var<storage, read> spheres: array<Sphere, SPHERES>;

@group(0) @binding(3)
var<storage, read_write> colorBuffer: array<vec3f>;

@group(0) @binding(4)
var framebuffer: texture_storage_2d<rgba16float, write>;

@compute @workgroup_size(size, size)
fn mainCompute(@builtin(global_invocation_id) globalInvocation: vec3u)
{
  let res = vec2f(textureDimensions(framebuffer));
  let coord = vec2f(globalInvocation.xy);

  if (all(coord < res))
  {
    let bufferIndex = u32(coord.x + coord.y * res.x);
    var color = colorBuffer[bufferIndex];

    initializeRandom(globalInvocation);
    color = inputColor(color, tracer.samples);

    let u = (coord.x + random()) / res.x;
    let v = (coord.y + random()) / res.y;

    let ray = getRay(camera, u, v);
    color += getColor(ray, tracer.maxDepth);

    colorBuffer[bufferIndex] = outputColor(color, tracer.samples);

    // Use of "framebuffer" as a storage texture could be avoided (to save some memory), but then
    // it won't be possible to reuse the "Image Pipeline" since it's fragment shader will require
    // to map "colorBuffer" values to pixel colors and a frame resolution uniform to achieve that.
    textureStore(framebuffer, globalInvocation.xy, vec4f(colorBuffer[bufferIndex], 1.0));
  }
}
