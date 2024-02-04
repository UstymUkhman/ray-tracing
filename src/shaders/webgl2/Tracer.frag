#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

#include Camera;
#include utils/Color;

in  vec2 uv;
in  Camera camera;
out vec4 fragColor;

uniform uint samples;
uniform uint maxDepth;
uniform vec2 resolution;

uniform sampler2D frame;
uniform Sphere spheres[SPHERES];

void addSpheres (void)
{
  for (uint s = 0u; s < SPHERES; s++)
    addObject(Sphere(spheres[s].transform, spheres[s].material));
}

void main (void)
{
  vec2 mappedUV = vec2(uv.x, 1.0 - uv.y);
  vec3 color = texture(frame, mappedUV).rgb;

  addSpheres();
  initializeRandom();
  inputColor(color, samples);

  vec2 coord = mappedUV * resolution;
  vec2 seed = uv * coord * float(samples);

  float u = (coord.x + random(seed)) / resolution.x;
  float v = (coord.y + random(seed)) / resolution.y;

  Ray ray = getRay(camera, u, v, seed);
  color += getColor(ray, maxDepth, seed);

  outputColor(color, samples);
  fragColor = vec4(color, 1.0);
}
