#include ../hittables/List;
#include ../materials/Metal;
#include ../materials/Dielectric;
#include ../materials/Lambertian;

#define WHITE vec3(1.0, 1.0, 1.0)
#define SKY vec3(0.5, 0.7, 1.0)

vec3 skyColor (in Ray ray)
{
  vec3 direction = normalize(ray.direction);
  float t = (direction.y + 1.0) * 0.5;
  return (1.0 - t) * WHITE + SKY * t;
}

vec3 getColor (in Ray ray, uint depth, in vec2 seed)
{
  vec3 color = WHITE;

  for (uint d = depth; d > 0u; --d)
  {
    if (hitObject(ray, 0.001, INFINITY))
    {
      Ray scattered;
      vec3 attenuation;
      bool scatter = false;

      switch (record.material.type)
      {
        case METAL:
          scatter = metalScatter(attenuation, record.material, scattered, seed, ray);
        break;

        case DIELECTRIC:
          scatter = dielectricScatter(attenuation, record.material, scattered, seed, ray);
        break;

        default:
          scatter = lambertianScatter(attenuation, record.material, scattered, seed);
      }

      if (scatter) {
        color *= attenuation;
        ray = scattered;
      }
    }

    else {
      color *= skyColor(ray);
      break;
    }
  }

  return color;
}

void inputColor (inout vec3 color, const in uint samples)
{
  color *= color;
  color *= float(samples - 1u);
}

void outputColor (inout vec3 color, const in uint samples)
{
  color /= float(samples);
  color = sqrt(color);
}
