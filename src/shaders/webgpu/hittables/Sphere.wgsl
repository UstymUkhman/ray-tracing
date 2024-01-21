#include Record.wgsl;

struct Sphere
{
  // xyz -> center
  //   w -> radius
  transform: vec4f,

  // rgb -> albedo color
  //   a -> extra properties
  // Like dielectric refraction (> 1.0)
  // and metal fuzziness (> 0.0 && < 1.0).
  // [For "lambertian" it always equals -1.0]
  material: vec4f
};

fn sphereHit(
  ray: Ray,
  tMin: f32,
  tMax: f32,
  sphere: Sphere
) -> bool
{
  let oc = ray.origin - sphere.transform.xyz;

  let a = lengthSquared(ray.direction);
  let halfB = dot(oc, ray.direction);
  let radius = sphere.transform.w;

  let c = lengthSquared(oc) - radius * radius;
  let d = halfB * halfB - a * c;

  if (d < 0.0) {
    return false;
  }

  let sqrtD = sqrt(d);
  var root = (-halfB - sqrtD) / a;

  if (root < tMin || root > tMax) {
    root = (-halfB + sqrtD) / a;

    if (root < tMin || root > tMax) {
      return false;
    }
  }

  record.t = root;
  record.point = at(ray, root);
  record.material = sphere.material;
  setFaceNormal(ray, (record.point - sphere.transform.xyz) / radius);

  return true;
}
