#include ../hittables/List.wgsl;
#include ../materials/Metal.wgsl;
#include ../materials/Dielectric.wgsl;
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
      var material: Material;

      if (record.material.a > 1.0) {
        material = dielectricScatter(record.material, scatteredRay);
      } else if (record.material.a > -1.0) {
        material = metalScatter(record.material, scatteredRay);
      } else {
        material = lambertianScatter(record.material);
      }

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

fn inputColor(color: vec3f, samples: u32) -> vec3f {
  return color * color * f32(samples - 1u);
}

fn outputColor(color: vec3f, samples: u32) -> vec3f {
  var output = color / f32(samples);
  output = sqrt(output);
  return output;
}
