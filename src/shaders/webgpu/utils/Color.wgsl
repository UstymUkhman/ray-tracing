#include ../hittables/Sphere.wgsl;

const WHITE = vec3f(1.0, 1.0, 1.0);
const SKY = vec3f(0.5, 0.7, 1.0);

fn skyColor(ray: Ray) -> vec3f
{
  let direction = normalize(ray.direction);
  let t = (direction.y + 1.0) * 0.5;

  return (1.0 - t) * WHITE + SKY * t;
}

fn getColor(ray: Ray) -> vec3f
{
  if (sphereHit(ray, vec3f(0.0, 0.0, -1.0), 0.5))
  {
    return vec3f(1.0, 0.0, 0.0);
  }

  return skyColor(ray);
}
