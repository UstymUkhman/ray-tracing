#include ./Sphere;

struct Hittable
{
  Sphere objects[4];
  uint length;
} list;

void addObject (const in Sphere object)
{
  list.objects[list.length++] = object;
}

bool hitObject (
  const in Ray ray,
  const in float tMin,
  const in float tMax
) {
  bool hit = false;
  float closest = tMax;

  for (uint o = 0u, l = list.length; o < l; ++o) {
    Sphere sphere = list.objects[o];

    if (sphereHit(ray, tMin, closest, sphere)) {
      closest = record.t;
      hit = true;
    }
  }

  return hit;
}
