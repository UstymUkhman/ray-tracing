bool lambertianScatter (
  out vec3 attenuation,
  out Ray scattered,
  in vec4 material,
  in vec2 seed
) {
  vec3 direction = record.normal + randomNormalized(seed);
  if (nearZero(direction)) direction = record.normal;

  scattered = Ray(record.point, direction);
  attenuation = material.rgb;

  return true;
}
