#version 300 es

#ifndef GL_FRAGMENT_PRECISION_HIGH
  precision mediump float;
#else
  precision highp float;
#endif

uniform vec2 resolution;
uniform float height;
uniform float width;

in  vec2 position;
in  vec2 coords;
out vec2 uv;

#ifdef CAMERA
  #define SIMPLE_RANDOM
  #include Camera;

  out Camera camera;
#endif

void main (void)
{
  #ifdef CAMERA
    vec2 res = vec2(width, height);

    camera = createCamera(
      vec3(13.0, 2.0, 3.0),
      vec3(0.0, 0.0, 0.0),
      vec3(0.0, 1.0, 0.0),
      res,
      20.0,
      0.1,
      10.0
    );
  #endif

  gl_Position = vec4((
    position / resolution * 2.0 - 1.0
  ) * vec2(1.0, -1.0), 0.0, 1.0);

  uv = coords;
}
