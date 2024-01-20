#include ../hittables/List.wgsl;
#include ../materials/Lambertian.wgsl;

const WHITE = vec3f(1.0, 1.0, 1.0);
const SKY = vec3f(0.5, 0.7, 1.0);

fn skyColor(ray: Ray) -> vec3f
{
  let direction = normalize(ray.direction);
  let t = (direction.y + 1.0) * 0.5;

  return (1.0 - t) * WHITE + SKY * t;
}

fn getColor(ray: Ray, depth: u32) -> vec3f
{
  var color = WHITE;
  var scatteredRay = ray;

  for (var d = depth; d > 0u; d--)
  {
    if (hitObject(scatteredRay, 0.001, INFINITY))
    {
      var scattered: Ray;
      let material = lambertianScatter(vec4f(0.5));

      let t = record.point + randomHemisphere(record.normal);
      scattered = Ray(record.point, t - record.point);

      if (material.scatter) {
        scatteredRay = material.scattered;
        color *= material.attenuation;
      }
    }

    else {
      color *= skyColor(scatteredRay);
      break;
    }
  }

  return color;
}

fn outputColor(color: vec3f, samples: u32) -> vec3f {
  var output = color / f32(samples);
  output = sqrt(output);
  return output;
}
