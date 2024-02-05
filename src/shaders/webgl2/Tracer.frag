#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

in  vec2 uv;
out vec4 fragColor;

uniform uint samples;
uniform uint maxDepth;
uniform vec2 resolution;
uniform sampler2D frame;

#include Camera;
uniform Camera camera;

#include hittables/Sphere;
uniform Sphere spheres[SPHERES];

#include utils/Color;

void main (void)
{
  vec2 mappedUV = vec2(uv.x, 1.0 - uv.y);
  vec3 color = texture(frame, mappedUV).rgb;

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
