#version 300 es

precision mediump float;

uniform vec2 resolution;

in  vec2 position;
in  vec2 coords;
out vec2 uv;

void main (void)
{
  gl_Position = vec4((
    position / resolution * 2.0 - 1.0
  ) * vec2(1.0, -1.0), 0.0, 1.0);

  uv = coords;
}
