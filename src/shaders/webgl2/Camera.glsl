struct Camera
{
  vec3 u;
  vec3 v;
  vec3 origin;
  vec3 vertical;
  vec3 horizontal;
  float lensRadius;
  vec3 lowerLeftCorner;
} camera;

void createCamera (
  const in vec3 origin,
  const in vec3 lookAt,
  const in vec3 vUp,
  const in float fov,
  in float ratio,
  const in float aperture,
  const in float focusDist
) {
  float theta = degToRad(fov);
  float h = tan(theta / 2.0);
  float height = 2.0 * h;

  vec2 viewport = vec2(ratio * height, height);

  vec3 w = normalize(origin - lookAt);
  vec3 u = normalize(cross(vUp, w));
  vec3 v = cross(w, u);

  vec3 vertical = viewport.y * v * focusDist;
  vec3 horizontal = viewport.x * u * focusDist;

  camera = Camera(
    u, v,
    origin,
    vertical,
    horizontal,
    aperture / 2.0,
    origin -
    focusDist * w -
    vertical / 2.0 -
    horizontal / 2.0
  );
}

Ray getRay (in float s, in float t, in vec2 seed)
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
