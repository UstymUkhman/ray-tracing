#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

#include ./utils/number;
#include ./utils/vector3;
#include ./config;
#include ./ray;

in  vec2 uv;
out vec4 fragColor;

vec3 getColor (in ray Ray)
{
  float t = hit(vec3(0.0, 0.0, -1.0), 0.5, Ray);

  if (t > 0.0)
  {
    vec3 N = normalize(at(Ray, t) - vec3(0.0, 0.0, -1.0));
    return (N + 1.0) * 0.5;
  }

  vec3 direction = normalize(Ray.dir);
  t = (direction.y + 1.0) * 0.5;

  return (1.0 - t) * vec3(1.0) + vec3(0.5, 0.7, 1.0) * t;
}

void main (void)
{
  const float focalLength = 1.0;
  float ratio = Config.width / Config.height;
  vec2 viewport = vec2(ratio * 2.0, 2.0);

  const vec3 origin = vec3(0.0, 0.0, 0.0);
  vec3 horizontal = vec3(viewport.x, 0.0, 0.0);
  vec3 vertical = vec3(0.0, viewport.y, 0.0);
  vec3 lowerLeftCorner = origin - horizontal / 2.0 - vertical / 2.0 - vec3(0.0, 0.0, focalLength);

  float u = uv.x;
  float v = 1.0 - uv.y;

  ray Ray = ray(origin, lowerLeftCorner + u * horizontal + v * vertical - origin);
  vec3 color = getColor(Ray);

  fragColor = vec4(color, 1.0);
}
