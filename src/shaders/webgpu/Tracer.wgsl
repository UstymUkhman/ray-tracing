// Workgroup size:
override size: u32;

// Spheres amount:
const SPHERES = 2;

#include Ray.wgsl;
#include utils/Color.wgsl;
#include utils/Vector3.wgsl;

@group(0) @binding(0)
var framebuffer: texture_storage_2d<rgba16float, write>;

// Viewport:
const WIDTH = 360;
const HEIGHT = 240;
const RATIO = 16.0 / 9.0;

// Camera:
const FOCAL_LENGTH = 1.0;
const ORIGIN = vec3f(0.0);

const VIEWPORT_HEIGHT = 2.0;
const VIEWPORT_WIDTH = RATIO * VIEWPORT_HEIGHT;

const VERTICAL = vec3(0.0, VIEWPORT_HEIGHT, 0.0);
const HORIZONTAL = vec3f(VIEWPORT_WIDTH, 0.0, 0.0);

const LOWER_LEFT_CORNER = ORIGIN -
      HORIZONTAL * 0.5 - VERTICAL * 0.5 -
      vec3f(0.0, 0.0, FOCAL_LENGTH);

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
  if (all(globalInvocation.xy < textureDimensions(framebuffer)))
  {
    addSpheres();
    initializeRandom(globalInvocation);

    let uv = vec2f(globalInvocation.xy) / vec2f(textureDimensions(framebuffer).xy);
    let ray = Ray(ORIGIN, LOWER_LEFT_CORNER + HORIZONTAL * uv.x + VERTICAL * uv.y - ORIGIN);

    let color = vec4f(getColor(ray), 1.0);
    textureStore(framebuffer, globalInvocation.xy, color);
  }
}
