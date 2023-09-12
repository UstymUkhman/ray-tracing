void addSphere (in float radius, in vec3 center, in Material material)
{
  addObject(Sphere(center, radius, material));
}

void generateSmallSpheres (in vec2 seed)
{
  for (float i = -5.0; i < 5.0; i++)
  {
    for (float j = -5.0; j < 5.0; j++)
    {
      const vec3 offset = vec3(4.0, 0.2, 0.0);

      vec3 center = vec3(
        random(seed) * 0.9 + i,
        0.2,
        random(seed) * 0.9 + j
      );

      float len = length(center - offset);

      if (len > 0.9)
      {
        float rand = random(seed);

        if (rand < 0.8)
        {
          vec3 color = randomVec(seed) * randomVec(seed);
          addSphere(0.2, center, Material(LAMBERTIAN, color, 0.0));
        }
        else if (rand < 0.95)
        {
          float fuzz = random(seed, 0.0, 0.5);
          vec3 color = randomVec(seed, 0.5, 1.0);
          addSphere(0.2, center, Material(METAL, color, fuzz));
        }
        else
        {
          addSphere(0.2, center, Material(DIELECTRIC, vec3(1.0), 1.5));
        }
      }
    }
  }
}

void createWorld (in vec2 seed)
{
  addSphere(
    1000.0,
    vec3(0.0, -1000.0, 0.0),
    Material(LAMBERTIAN, vec3(0.5), 0.0)
  );

  // generateSmallSpheres(seed);

  addSphere(
    1.0,
    vec3(0.0, 1.0, 0.0),
    Material(DIELECTRIC, vec3(1.0), 1.5)
  );

  addSphere(
    1.0,
    vec3(-4.0, 1.0, 0.0),
    Material(LAMBERTIAN, vec3(0.4, 0.2, 0.1), 0.0)
  );

  addSphere(
    1.0,
    vec3(4.0, 1.0, 0.0),
    Material(METAL, vec3(0.7, 0.6, 0.5), 0.0)
  );
}
