#include Record;

struct Sphere
{
  // xyz -> center
  //   w -> radius
  vec4 transform;

  // rgb -> albedo color
  //   a -> extra properties
  // Like dielectric refraction (> 1.0)
  // and metal fuzziness (> 0.0 && < 1.0).
  // [For "lambertian" it always equals -1.0]
  vec4 material;
};

bool sphereHit (
  const in Ray ray,
  const in float tMin,
  const in float tMax,
  const in Sphere sphere
) {
  vec3 oc = ray.origin - sphere.transform.xyz;

  float a = lengthSquared(ray.direction);
  float halfB = dot(oc, ray.direction);
  float radius = sphere.transform.w;

  float c = lengthSquared(oc) - radius * radius;
  float d = halfB * halfB - a * c;

  if (d < 0.0) return false;

  float sqrtD = sqrt(d);
  float root = (-halfB - sqrtD) / a;

  if (root < tMin || root > tMax) {
    root = (-halfB + sqrtD) / a;

    if (root < tMin || root > tMax)
      return false;
  }

  record.t = root;
  record.point = at(ray, root);
  record.material = sphere.material;
  setFaceNormal(ray, (record.point - sphere.transform.xyz) / radius);

  return true;
}
