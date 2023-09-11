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

#include ./materials/Material;
#include ./hittables/Record;
#include ./hittables/Sphere;
#include ./hittables/List;

#include ./materials/Lambertian;
#include ./materials/Dielectric;
#include ./materials/Metal;
#include ./utils/Color;

in  vec2 uv;
out vec4 fragColor;

void main (void)
{
  createCamera();

  Material ground = Material(LAMBERTIAN, vec3(0.8, 0.8, 0.0), 0.0);
  Material center = Material(LAMBERTIAN, vec3(0.1, 0.2, 0.5), 0.0);
  Material left   = Material(DIELECTRIC, vec3(1.0), 1.5);
  Material right  = Material(METAL, vec3(0.8, 0.6, 0.2), 0.0);

  listAdd(Sphere(vec3(0.0, -100.5, -1.0), 100.0, ground));
  listAdd(Sphere(vec3(-1.0, 0.0, -1.0), 0.5, left));
  listAdd(Sphere(vec3(-1.0, 0.0, -1.0), -0.4, left));
  listAdd(Sphere(vec3(1.0, 0.0, -1.0), 0.5, right));
  listAdd(Sphere(vec3(0.0, 0.0, -1.0), 0.5, center));

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
