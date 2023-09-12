#include ./Record;

struct Sphere
{
  vec3 center;
  float radius;
  Material material;
};

bool sphereHit (
  const in Ray ray,
  const in float tMin,
  const in float tMax,
  const in Sphere sphere
) {
  vec3 oc = ray.origin - sphere.center;

  float a = lengthSquared(ray.direction);
  float halfB = dot(oc, ray.direction);

  float c = lengthSquared(oc) - sphere.radius * sphere.radius;
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
  setFaceNormal(ray, (record.point - sphere.center) / sphere.radius);

  return true;
}
