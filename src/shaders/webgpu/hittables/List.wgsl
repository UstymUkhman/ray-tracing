#include Sphere.wgsl;

fn hitObject(ray: Ray, tMin: f32, tMax: f32) -> bool
{
  var hit = false;
  var closest = tMax;

  for (var s = 0u; s < SPHERES; s++) {
    if (sphereHit(ray, tMin, closest, spheres[s])) {
      closest = record.t;
      hit = true;
    }
  }

  return hit;
}
