#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

#include ./Camera;
#include ./utils/Color;

in  vec2 uv;
in  Camera camera;
out vec4 fragColor;

uniform Sphere spheres[4];

void addSpheres (void)
{
  for (uint s = 0u; s < 4u; s++)
  {
    vec3 center = spheres[s].center;
    float radius = spheres[s].radius;
    Material material = spheres[s].material;

    addObject(Sphere(center, radius, material));
  }
}

void main (void)
{
  vec2 res = vec2(config.width, config.height);
  vec2 coord = vec2(uv.x, 1.0 - uv.y) * res;

  addSpheres();

  vec3 color = vec3(0.0);
  uint depth = config.maxDepth;
  uint samples = config.samples;

  for (uint s = 0u; s < samples; s++)
  {
    vec2 seed = uv * coord * float(s);

    float u = (coord.x + random(seed)) / res.x;
    float v = (coord.y + random(seed)) / res.y;

    Ray ray = getRay(camera, u, v, seed);
    color += getColor(ray, depth, seed);
  }

  outputColor(color, samples);
  fragColor = vec4(color, 1.0);
}
