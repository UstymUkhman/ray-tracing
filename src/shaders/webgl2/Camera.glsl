#include Ray;
#include utils/Vector3;

struct Camera
{
  vec3 u;
  vec3 v;
  vec3 origin;
  vec3 vertical;
  vec3 horizontal;
  float lensRadius;
  vec3 lowerLeftCorner;
};

Camera createCamera (
  const in vec3 origin,
  const in vec3 lookAt,
  const in vec3 vUp,
  const in vec2 res,
  const in float fov,
  const in float aperture,
  const in float focusDist
) {
  float height = tan(degToRad(fov) * 0.5) * 2.0;
  float width = res.x / res.y * height;

  vec3 w = normalize(origin - lookAt);
  vec3 u = normalize(cross(vUp, w));
  vec3 v = cross(w, u);

  vec3 vertical = v * height * focusDist;
  vec3 horizontal = u * width * focusDist;

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
