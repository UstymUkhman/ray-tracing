fn sphereHit(ray: Ray, center: vec3f, radius: f32) -> bool
{
  let oc = ray.origin - center;

  let a = dot(ray.direction, ray.direction);
  let b = dot(oc, ray.direction) * 2.0;

  let c = dot(oc, oc) - radius * radius;
  let d = b * b - a * c * 4.0;

  return d > 0.0;
}
