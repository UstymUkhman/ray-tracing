#include Record.wgsl;

struct Sphere
{
  // xyz -> center
  //   w -> radius
  transform: vec4f
};

fn sphereHit(
  ray: Ray,
  tMin: f32,
  tMax: f32,
  sphere: Sphere
) -> f32 // bool
{
  let oc = ray.origin - sphere.transform.xyz;

  let a = lengthSquared(ray.direction);
  let halfB = dot(oc, ray.direction);
  let radius = sphere.transform.w;

  let c = lengthSquared(oc) - radius * radius;
  let d = halfB * halfB - a * c;

  if (d < 0.0) {
    return -1.0; // false;
  }

  let sqrtD = sqrt(d);
  var root = (-halfB - sqrtD) / a;

  if (root < tMin || root > tMax) {
    root = (-halfB + sqrtD) / a;

    if (root < tMin || root > tMax) {
      return -1.0; // false;
    }
  }

  record.t = root;
  record.point = at(ray, root);
  setFaceNormal(ray, (record.point - sphere.transform.xyz) / radius);

  return root; // true;
}
