#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

#include ./Ray;
#include ./Config;
#include ./Camera;
#include ./utils/Color;
#include ./utils/Number;
#include ./utils/Vector3;

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
  createCamera();

  listAdd(Sphere(vec3(0.0, -100.5, -1.0), 100.0));
  listAdd(Sphere(vec3(0.0, 0.0, -1.0), 0.5));

  vec2 res = vec2(config.width, config.height);
  vec2 coord = vec2(uv.x, 1.0 - uv.y) * res;

  vec3 color = vec3(0.0);
  uint samples = config.samples;

  for (uint s = 0u; s < samples; s++)
  {
    float x = random(uv * coord * float(s));
    float y = random(uv * coord * float(s));

    float u = (coord.x + x) / res.x;
    float v = (coord.y + y) / res.y;

    Ray ray = getRay(u, v);
    color += getColor(ray);
  }

  calcColor(color, samples);
  fragColor = vec4(color, 1.0);
}
