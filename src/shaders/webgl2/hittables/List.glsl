bool hitObject (
  const in Ray ray,
  const in float tMin,
  const in float tMax
) {
  bool hit = false;
  float closest = tMax;

  for (uint s = 0u; s < SPHERES; s++)
    if (sphereHit(ray, tMin, closest, spheres[s])) {
      closest = record.t;
      hit = true;
    }

  return hit;
}
