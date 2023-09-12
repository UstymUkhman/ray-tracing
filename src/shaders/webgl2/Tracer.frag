#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

#include ./Ray;
#include ./Config;

#include ./utils/Number;
#include ./utils/Vector3;

#include ./materials/Material;
#include ./hittables/Record;
#include ./hittables/Sphere;
#include ./hittables/List;
#include ./hittables/World;

#include ./materials/Lambertian;
#include ./materials/Dielectric;
#include ./materials/Metal;

#include ./utils/Color;
#include ./Camera;

in  vec2 uv;
out vec4 fragColor;

void main (void)
{
  vec2 res = vec2(config.width, config.height);
  vec2 coord = vec2(uv.x, 1.0 - uv.y) * res;

  createWorld(coord);

  createCamera(
    vec3(13.0, 2.0, 3.0),
    vec3(0.0, 0.0, 0.0),
    vec3(0.0, 1.0, 0.0),
    res,
    20.0,
    0.1,
    10.0
  );

  vec3 color = vec3(0.0);
  uint depth = config.maxDepth;
  uint samples = config.samples;

  for (uint s = 0u; s < samples; s++)
  {
    vec2 seed = uv * coord * float(s);

    float u = (coord.x + random(seed)) / res.x;
    float v = (coord.y + random(seed)) / res.y;

    Ray ray = getRay(u, v, seed);
    color += getColor(ray, seed, depth);
  }

  outputColor(color, samples);
  fragColor = vec4(color, 1.0);
}
