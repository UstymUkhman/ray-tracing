bool lambertianScatter (
  out vec3 attenuation,
  in Material material,
  out Ray scattered,
  in vec2 seed
) {
  vec3 direction = record.normal + randomNormalized(seed);
  if (nearZero(direction)) direction = record.normal;

  scattered = Ray(record.point, direction);
  attenuation = material.albedo;

  return true;
}
