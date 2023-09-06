struct Camera
{
  vec3 origin;
  vec3 vertical;
  vec3 horizontal;
  vec3 lowerLeftCorner;
} camera;

void createCamera ()
{
  float ratio = config.width / config.height;
  vec2 viewport = vec2(ratio * 2.0, 2.0);

  const vec3 origin = vec3(0.0, 0.0, 0.0);
  vec3 vertical = vec3(0.0, viewport.y, 0.0);
  vec3 horizontal = vec3(viewport.x, 0.0, 0.0);

  camera = Camera(
    origin,
    vertical,
    horizontal,
      origin -
      vertical / 2.0 -
      horizontal / 2.0 -
      vec3(0.0, 0.0, 1.0)
  );
}

Ray getRay (in float u, in float v)
{
  return Ray(
    camera.origin,
    camera.lowerLeftCorner +
    camera.horizontal * u +
    camera.vertical * v -
    camera.origin
  );
}
