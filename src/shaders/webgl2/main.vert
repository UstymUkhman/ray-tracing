#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

in  vec2 position;
in  vec2 coords;
out vec2 uv;

void main (void)
{
  gl_Position = vec4(
    (position * 2.0 - 1.0) *
    vec2(1.0, -1.0), 0.0, 1.0
  );

  uv = coords;
}
