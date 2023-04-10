#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

uniform vec4 color;

out vec4 fragColor;

void main (void)
{
  fragColor = color;
}
