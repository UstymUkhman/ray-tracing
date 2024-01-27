// Schlick's reflectance approximation:
fn reflectance(cosine: f32, ratio: f32) -> f32
{
  var reflectance = (1.0 - ratio) / (1.0 + ratio);
  reflectance = reflectance * reflectance;
  return pow((1.0 - cosine), 5.0) * (1.0 - reflectance) + reflectance;
}

fn dielectricScatter(material: vec4f, ray: Ray) -> Material
{
  var direction = normalize(ray.direction);
  let tCos = min(dot(-direction, record.normal), 1.0);
  let ratio = select(material.a, 1.0 / material.a, record.frontFace);

  let willReflect =
    random() < reflectance(tCos, ratio) ||
    sqrt(1.0 - tCos * tCos) * ratio > 1.0;

  direction = select(
    refract(direction, record.normal, ratio),
    reflect(direction, record.normal),
    willReflect
  );

  return Material(
    Ray(record.point, direction),
    material.rgb,
    true
  );
}
