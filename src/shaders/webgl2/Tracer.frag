#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

#include ./Ray;
#include ./Config;
#include ./Camera;

#include ./utils/Number;
#include ./utils/Vector3;

#include ./hittables/Record;
#include ./hittables/Sphere;
#include ./hittables/List;
#include ./utils/Color;

in  vec2 uv;
out vec4 fragColor;

void main (void)
{
  createCamera();

  listAdd(Sphere(vec3(0.0, -100.5, -1.0), 100.0));
  listAdd(Sphere(vec3(0.0, 0.0, -1.0), 0.5));

  vec2 res = vec2(config.width, config.height);
  vec2 coord = vec2(uv.x, 1.0 - uv.y) * res;

  vec3 color = vec3(0.0);
  uint depth = config.maxDepth;
  uint samples = config.samples;

  for (uint s = 0u; s < samples; s++)
  {
    vec2 seed = uv * coord * float(s);

    float u = (coord.x + random(seed)) / res.x;
    float v = (coord.y + random(seed)) / res.y;

    Ray ray = getRay(u, v);
    color += getColor(ray, seed, depth);
  }

  calcColor(color, samples);
  fragColor = vec4(color, 1.0);
}
