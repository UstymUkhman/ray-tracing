struct List
{
  Sphere objects[5];
  uint length;
} hittables;

void listAdd (const in Sphere object)
{
  hittables.objects[hittables.length++] = object;
}

bool listHit (
  const in Ray ray,
  const in float tMin,
  const in float tMax
) {
  bool hit = false;
  float closest = tMax;

  for (uint o = 0u, l = hittables.length; o < l; ++o) {
    Sphere sphere = hittables.objects[o];

    if (sphereHit(ray, tMin, closest, sphere)) {
      closest = record.t;
      hit = true;
    }
  }

  return hit;
}
