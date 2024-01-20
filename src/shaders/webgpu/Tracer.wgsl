// Workgroup size:
override size: u32;

// Spheres amount:
const SPHERES = 2u;

// Samples per pixel:
const samples = 100u;

// Max recursion depth:
const maxDepth = 50u;

#include Camera.wgsl;
#include utils/Color.wgsl;

@group(0) @binding(0)
var framebuffer: texture_storage_2d<rgba16float, write>;

fn addSpheres() {
  addObject(Sphere(vec4f(0.0, 0.0, -1.0, 0.5)));
  addObject(Sphere(vec4f(0.0, -100.5, -1.0, 100.0)));

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
    var color = vec3f(0.0);
    initializeRandom(globalInvocation);
    let camera = createCamera(vec3f(0.0));

    for (var s = 0u; s < samples; s++)
    {
      let u = (coord.x + random()) / res.x;
      let v = (coord.y + random()) / res.y;

      let ray = getRay(camera, u, v);
      color += getColor(ray, maxDepth);
    }

    color = outputColor(color, samples);
    textureStore(framebuffer, globalInvocation.xy, vec4f(color, 1.0));
  }
}
