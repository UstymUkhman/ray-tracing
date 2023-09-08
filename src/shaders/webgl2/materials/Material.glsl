#define LAMBERTIAN 0u
#define METAL      1u

struct Material
{
  uint type;
  vec3 albedo;
  float fuzz;
};
