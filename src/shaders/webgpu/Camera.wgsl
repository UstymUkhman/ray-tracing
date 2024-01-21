#include Ray.wgsl;
#include utils/Vector3.wgsl;

struct Camera
{
  // u: vec3f,
  // v: vec3f,
  origin: vec3f,
  vertical: vec3f,
  horizontal: vec3f,
  // lensRadius: f32,
  lowerLeftCorner: vec3f,
};

fn createCamera(origin: vec3f) -> Camera
{
  let ratio = 3.0 / 2.0;
  let viewportHeight = 2.0;
  let viewportWidth = ratio * viewportHeight;
  let focalLength = 1.0;

  let vertical = vec3f(0.0, viewportHeight, 0.0);
  let horizontal = vec3f(viewportWidth, 0.0, 0.0);

  return Camera(
    origin,
    vertical,
    horizontal,
    origin -
      horizontal * 0.5 -
      vertical * 0.5 -
      vec3f(0.0, 0.0, focalLength)
  );
}

fn getRay(camera: Camera, s: f32, t: f32) -> Ray
{
  return Ray(
    camera.origin,
    camera.lowerLeftCorner +
    camera.horizontal * s +
    camera.vertical * t -
    camera.origin
  );
}
