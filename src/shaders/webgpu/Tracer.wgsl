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
var texture: texture_2d<f32>;

// @group(1) @binding(0)
// var texture: texture_2d<f32>;

@group(0) @binding(1)
var<uniform> tracerUniform: TracerUniform;

@group(0) @binding(2)
var framebuffer: texture_storage_2d<rgba16float, write>;

fn addSpheres()
{
  let groundMaterial = vec4f(0.8, 0.8, 0.0, -1.0);
  let centerMaterial = vec4f(0.1, 0.2, 0.5, -1.0);
  let leftMaterial = vec4f(1.0, 1.0, 1.0, 1.5);
  let rightMaterial = vec4f(0.8, 0.6, 0.2, 0.0);

  addObject(Sphere(vec4f(0.0, -100.5, -1.0, 100.0), groundMaterial));
  addObject(Sphere(vec4f(0.0, 0.0, -1.0, 0.5), centerMaterial));
  addObject(Sphere(vec4f(-1.0, 0.0, -1.0, 0.5), leftMaterial));
  addObject(Sphere(vec4f(-1.0, 0.0, -1.0, -0.4), leftMaterial));
  addObject(Sphere(vec4f(1.0, 0.0, -1.0, 0.5), rightMaterial));

  /* for (var s = 0u; s < SPHERES; s++) {
    addObject(Sphere(spheres[s].transform, spheres[s].material));
  } */
}

@compute @workgroup_size(size, size)
fn mainCompute(@builtin(global_invocation_id) globalInvocation: vec3u)
{
  let res = vec2f(textureDimensions(framebuffer));
  let coord = vec2f(globalInvocation.xy);

  if (all(coord < res))
  {
    addSpheres();

    var color = textureLoad(
      texture,
      globalInvocation.xy,
      0
    ).rgb;

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

    color = outputColor(color, tracerUniform.samples);
    textureStore(framebuffer, globalInvocation.xy, vec4f(color, 1.0));
  }
}
