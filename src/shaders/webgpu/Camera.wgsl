#include Ray.wgsl;
#include utils/Vector3.wgsl;

struct Camera
{
  u: vec3f,
  v: vec3f,
  origin: vec3f,
  vertical: vec3f,
  horizontal: vec3f,
  lowerLeftCorner: vec3f,
  lensRadius: f32
};

fn getRay(camera: Camera, s: f32, t: f32) -> Ray
{
  let randomDisk = randomUnitDisk() * camera.lensRadius;
  let offset = camera.u * randomDisk.x + camera.v * randomDisk.y;

  return Ray(
    camera.origin + offset,
    camera.lowerLeftCorner +
    camera.horizontal * s +
    camera.vertical * t -
    camera.origin -
    offset
  );
}
