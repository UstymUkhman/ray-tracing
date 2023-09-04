#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

#include ./config;
#include ./utils/number;
#include ./utils/vector3;

in  vec2 uv;
out vec4 fragColor;

void main (void)
{
  vec2 rg = vec2(uv.x, 1.0 - uv.y);
  fragColor = vec4(rg, 0.25, 1.0);
}
