void createWorld ()
{
  float R = cos(PI / 4.0);

  Material ground = Material(LAMBERTIAN, vec3(0.8, 0.8, 0.0), 0.0);
  Material center = Material(LAMBERTIAN, vec3(0.1, 0.2, 0.5), 0.0);
  Material left   = Material(DIELECTRIC, vec3(1.0), 1.5);
  Material right  = Material(METAL, vec3(0.8, 0.6, 0.2), 0.0);

  listAdd(Sphere(vec3(0.0, -100.5, -1.0), 100.0, ground));
  listAdd(Sphere(vec3(-1.0, 0.0, -1.0), 0.5, left));
  listAdd(Sphere(vec3(-1.0, 0.0, -1.0), -0.45, left));
  listAdd(Sphere(vec3(1.0, 0.0, -1.0), 0.5, right));
  listAdd(Sphere(vec3(0.0, 0.0, -1.0), 0.5, center));
}
