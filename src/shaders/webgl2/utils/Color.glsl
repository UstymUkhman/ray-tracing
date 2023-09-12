#define SKY vec3(0.5, 0.7, 1.0)

vec3 skyColor (in Ray ray)
{
  vec3 direction = normalize(ray.direction);
  float t = (direction.y + 1.0) * 0.5;

  return (1.0 - t) * vec3(1.0) + SKY * t;
}

vec3 getColor (in Ray ray, in vec2 seed, uint depth)
{
  vec3 color = vec3(1.0);

  for (uint d = depth; d > 0u; --d)
  {
    if (listHit(ray, 0.001, INFINITY))
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

void outputColor (inout vec3 color, const uint samples)
{
  color /= float(samples);
  color = sqrt(color);
}
