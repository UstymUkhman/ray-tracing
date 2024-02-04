#include Ray;
#include utils/Vector3;

struct Camera
{
  vec3 u;
  vec3 v;
  vec3 origin;
  vec3 vertical;
  vec3 horizontal;
  vec3 lowerLeftCorner;
  float lensRadius;
};

Ray getRay (Camera camera, in float s, in float t, in vec2 seed)
{
  vec3 randomDisk = randomUnitDisk(seed) * camera.lensRadius;
  vec3 offset = camera.u * randomDisk.x + camera.v * randomDisk.y;

  return Ray(
    camera.origin + offset,
    camera.lowerLeftCorner +
    camera.horizontal * s +
    camera.vertical * t -
    camera.origin -
    offset
  );
}
