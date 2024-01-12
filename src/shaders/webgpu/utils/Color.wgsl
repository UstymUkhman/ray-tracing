#include ../hittables/List.wgsl;

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
  if (hitObject(ray, 0.001, INFINITY)) {
    return (record.normal + WHITE) * 0.5;
  }

  return skyColor(ray);
}

fn outputColor(color: vec3f, samples: u32) -> vec3f {
  let output = color / f32(samples);
  // output = sqrt(output);
  return output;
}
