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

uniform uint samples;
uniform sampler2D frame;
uniform Sphere spheres[SPHERES];

void addSpheres (void)
{
  for (uint s = 0u; s < SPHERES; s++)
  {
    vec3 center = spheres[s].center;
    float radius = spheres[s].radius;
    Material material = spheres[s].material;

    addObject(Sphere(center, radius, material));
  }
}

void main (void)
{
  vec2 mappedUV = vec2(uv.x, 1.0 - uv.y);
  vec3 color = texture(frame, mappedUV).rgb;
  vec2 res = vec2(config.width, config.height);

  addSpheres();
  inputColor(color, samples);

  vec2 coord = mappedUV * res;
  vec2 seed = uv * coord * float(samples);

  float u = (coord.x + random(seed)) / res.x;
  float v = (coord.y + random(seed)) / res.y;

  Ray ray = getRay(camera, u, v, seed);
  color += getColor(ray, config.maxDepth, seed);

  outputColor(color, samples);
  fragColor = vec4(color, 1.0);
}
