struct Hittable
{
  Sphere objects[4];
  uint length;
} objects;

void addObject (const in Sphere object)
{
  objects.objects[objects.length++] = object;
}

bool hitObject (
  const in Ray ray,
  const in float tMin,
  const in float tMax
) {
  bool hit = false;
  float closest = tMax;

  for (uint o = 0u, l = objects.length; o < l; ++o) {
    Sphere sphere = objects.objects[o];

    if (sphereHit(ray, tMin, closest, sphere)) {
      closest = record.t;
      hit = true;
    }
  }

  return hit;
}
