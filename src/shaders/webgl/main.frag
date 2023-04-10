#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

uniform vec4 color;

void main (void)
{
  gl_FragColor = color;
}
