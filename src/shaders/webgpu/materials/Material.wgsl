const LAMBERTIAN = 0u;
const METAL      = 1u;
const DIELECTRIC = 2u;

struct Material
{
  scattered: Ray,
  attenuation: vec3f,
  scatter: bool
};
