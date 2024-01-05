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
  let s = Sphere(vec4f(0.0, 0.0, -1.0, 0.5));
  let t = sphereHit(ray, 0.001, INFINITY, s);

  if (t > 0.0)
  {
    let normal = normalize(at(ray, t) - vec3(0.0, 0.0, -1.0));
    return vec3f(normal.x + 1.0, normal.y + 1.0, normal.z + 1.0) * 0.5;
  }

  return skyColor(ray);
}
