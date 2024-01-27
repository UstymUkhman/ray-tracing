#include Ray.wgsl;
#include utils/Vector3.wgsl;

struct Camera
{
  u: vec3f,
  v: vec3f,
  origin: vec3f,
  vertical: vec3f,
  horizontal: vec3f,
  lensRadius: f32,
  lowerLeftCorner: vec3f,
};

fn createCamera(
  origin: vec3f,
  lookAt: vec3f,
  vUp: vec3f,
  res: vec2f,
  fov: f32,
  aperture: f32,
  focusDist: f32
) -> Camera
{
  let height = tan(degToRad(fov) * 0.5) * 2.0;
  let width = res.x / res.y * height;

  let w = normalize(origin - lookAt);
  let u = normalize(cross(vUp, w));
  let v = cross(w, u);

  let vertical = v * height * focusDist;
  let horizontal = u * width * focusDist;

  return Camera(
    u,
    v,
    origin,
    vertical,
    horizontal,
    aperture * 0.5,
    origin -
      horizontal * 0.5 -
      vertical * 0.5 -
      focusDist * w
  );
}

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
