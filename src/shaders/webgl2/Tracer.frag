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

uniform float width;
uniform float height;

uniform uint samples;
uniform uint maxDepth;

uniform sampler2D frame;
uniform Sphere spheres[SPHERES];

void main (void)
{
  vec2 res = vec2(width, height);
  vec2 mappedUV = vec2(uv.x, 1.0 - uv.y);
  vec3 color = texture(frame, mappedUV).rgb;

  initializeRandom();
  inputColor(color, samples);

  if (list.length == 0u)
    for (uint s = 0u; s < SPHERES; s++)
      addObject(Sphere(spheres[s].transform, spheres[s].material));

  vec2 coord = mappedUV * res;
  vec2 seed = uv * coord * float(samples);

  float u = (coord.x + random(seed)) / res.x;
  float v = (coord.y + random(seed)) / res.y;

  Ray ray = getRay(camera, u, v, seed);
  color += getColor(ray, maxDepth, seed);

  outputColor(color, samples);
  fragColor = vec4(color, 1.0);
}
