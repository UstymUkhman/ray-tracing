bool metalScatter (
  out vec3 attenuation,
  out Ray scattered,
  in vec4 material,
  in vec2 seed,
  in Ray ray
) {
  vec3 reflected = reflect(normalize(ray.direction), record.normal);
  reflected += randomUnitSphere(seed) * material.a;

  scattered = Ray(record.point, reflected);
  attenuation = material.rgb;

  return dot(scattered.direction, record.normal) > 0.0;
}
