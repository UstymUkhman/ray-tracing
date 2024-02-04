// Workgroup size:
override size: u32;

#include Camera.wgsl;
#include utils/Color.wgsl;

struct TracerUniform {
  maxDepth: u32,
  samples: u32,
  seed: vec3u
};

@group(0) @binding(0)
var<uniform> tracerUniform: TracerUniform;

@group(0) @binding(1)
var<uniform> spheres: array<Sphere, SPHERES>;

@group(0) @binding(2)
var<storage, read_write> colorBuffer: array<vec3f>;

@group(0) @binding(3)
var framebuffer: texture_storage_2d<rgba16float, write>;

fn addSpheres()
{
  for (var s = 0u; s < SPHERES; s++) {
    addObject(Sphere(spheres[s].transform, spheres[s].material));
  }
}

@compute @workgroup_size(size, size)
fn mainCompute(@builtin(global_invocation_id) globalInvocation: vec3u)
{
  let res = vec2f(textureDimensions(framebuffer));
  let coord = vec2f(globalInvocation.xy);

  if (all(coord < res))
  {
    addSpheres();

    let bufferIndex = u32(coord.x + coord.y * res.x);
    var color = colorBuffer[bufferIndex];

    let camera = createCamera(
      vec3f(13.0, 2.0, 3.0),
      vec3f(0.0, 0.0, 0.0),
      vec3f(0.0, 1.0, 0.0),
      res,
      20.0,
      0.1,
      10.0
    );

    initializeRandom(globalInvocation);
    color = inputColor(color, tracerUniform.samples);

    let u = (coord.x + random()) / res.x;
    let v = (coord.y + random()) / res.y;

    let ray = getRay(camera, u, v);
    color += getColor(ray, tracerUniform.maxDepth);

    colorBuffer[bufferIndex] = outputColor(color, tracerUniform.samples);

    // Use of "framebuffer" as a storage texture could be avoided (to save some memory), but then
    // it won't be possible to reuse the "Image Pipeline" since it's fragment shader will require
    // to map "colorBuffer" values to pixel colors and a frame resolution uniform to achieve that.
    textureStore(framebuffer, globalInvocation.xy, vec4f(colorBuffer[bufferIndex], 1.0));
  }
}
