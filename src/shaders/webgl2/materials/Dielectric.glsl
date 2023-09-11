// Schlick's reflectance approximation:
float reflectance (in float cosine, in float ratio)
{
  float reflectance = (1.0 - ratio) / (1.0 + ratio);
  reflectance = reflectance * reflectance;
  return pow((1.0 - cosine), 5.0) * (1.0 - reflectance) + reflectance;
}

bool dielectricScatter (
  out vec3 attenuation,
  in Material material,
  out Ray scattered,
  in vec2 seed,
  in Ray ray
) {
  vec3 direction = normalize(ray.direction);
  float tCos = min(dot(-direction, record.normal), 1.0);
  float ratio = record.frontFace ? 1.0 / material.extra : material.extra;

  bool willReflect =
    sqrt(1.0 - tCos * tCos) * ratio > 1.0 ||
    random(seed) < reflectance(tCos, ratio);

  direction = willReflect
    ? reflect(direction, record.normal)
    : refract(direction, record.normal, ratio);

  scattered = Ray(record.point, direction);
  attenuation = material.albedo;

  return true;
}
