fn metalScatter(material: vec4f, ray: Ray) -> Material
{
  let reflected =
    reflect(normalize(ray.direction), record.normal) +
    randomUnitSphere() * material.a;

  let scattered = Ray(record.point, reflected);

  return Material(
    scattered,
    material.rgb,
    dot(scattered.direction, record.normal) > 0.0f
  );
}
