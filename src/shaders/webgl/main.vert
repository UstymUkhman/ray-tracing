precision mediump float;

uniform vec2 resolution;

attribute vec2 position;

void main (void)
{
  const vec2 viewModel = vec2(1.0, -1.0);
  vec2 projection = position / resolution * 2.0 - 1.0;

  gl_Position = vec4(projection * viewModel, 0.0, 1.0);
  gl_PointSize = 1.0;
}
