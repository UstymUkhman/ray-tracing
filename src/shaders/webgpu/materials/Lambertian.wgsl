fn lambertianScatter(material: vec4f) -> Material
{
  var direction = record.normal + randomNormalized();

  if (nearZero(direction)) {
    direction = record.normal;
  }

  return Material(
    Ray(record.point, direction),
    material.rgb,
    true
  );
}
