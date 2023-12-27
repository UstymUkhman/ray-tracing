struct Ray
{
  origin: vec3f,
  direction: vec3f
};

fn at(ray: Ray, t: f32) -> vec3f
{
  return ray.origin + ray.direction * t;
}
