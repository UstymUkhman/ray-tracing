#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

#include ./Config;
#include ./utils/Number;
#include ./utils/Vector3;

#include ./Ray;
#include ./hittables/Record;
#include ./hittables/Sphere;
#include ./hittables/List;

in  vec2 uv;
out vec4 fragColor;

vec3 getColor (in Ray ray)
{
  if (listHit(ray, 0.001, INFINITY)) {
    return (record.normal + vec3(1.0)) * 0.5;
  }

  vec3 direction = normalize(ray.direction);
  float t = (direction.y + 1.0) * 0.5;

  return (1.0 - t) * vec3(1.0) + vec3(0.5, 0.7, 1.0) * t;
}

void main (void)
{
  listAdd(Sphere(vec3(0.0, -100.5, -1.0), 100.0));
  listAdd(Sphere(vec3(0.0, 0.0, -1.0), 0.5));

  const float focalLength = 1.0;
  float ratio = config.width / config.height;
  vec2 viewport = vec2(ratio * 2.0, 2.0);

  const vec3 origin = vec3(0.0, 0.0, 0.0);
  vec3 horizontal = vec3(viewport.x, 0.0, 0.0);
  vec3 vertical = vec3(0.0, viewport.y, 0.0);
  vec3 lowerLeftCorner = origin - horizontal / 2.0 - vertical / 2.0 - vec3(0.0, 0.0, focalLength);

  float u = uv.x;
  float v = 1.0 - uv.y;

  Ray ray = Ray(origin, lowerLeftCorner + u * horizontal + v * vertical - origin);
  vec3 color = getColor(ray);

  fragColor = vec4(color, 1.0);
}
