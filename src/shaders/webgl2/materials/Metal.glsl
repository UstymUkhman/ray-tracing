bool metalScatter (
  out vec3 attenuation,
  in Material material,
  out Ray scattered,
  in vec2 seed,
  in Ray ray
) {
  vec3 reflected = reflect(normalize(ray.direction), record.normal);
  reflected += randomUnitSphere(seed) * material.fuzz;

  scattered = Ray(record.point, reflected);
  attenuation = material.albedo;

  return dot(scattered.direction, record.normal) > 0.0;
}
