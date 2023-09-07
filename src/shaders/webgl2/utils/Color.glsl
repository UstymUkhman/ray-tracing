#define SKY vec3(0.5, 0.7, 1.0)

void calcColor (inout vec3 color, const uint samples)
{
  color /= float(samples);
  color = sqrt(color);
}

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
    if (listHit(ray, 0.001, INFINITY)) {
      vec3 target = record.point + record.normal + randomUnitSphere(seed);
      ray = Ray(record.point, target - record.point);
      color *= vec3(0.5);
    }

    else {
      color *= skyColor(ray);
      break;
    }
  }

  return color;
}
