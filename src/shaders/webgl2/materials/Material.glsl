#define LAMBERTIAN 0u
#define METAL      1u
#define DIELECTRIC 2u

struct Material
{
  uint type;
  vec3 albedo;

  // Material's extra properties
  // like metal fuzziness and
  // dielectric refraction:
  float extra;
};
