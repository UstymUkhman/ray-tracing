#define INFINITY 1.0 / 0.0
#define PI 3.14159265358979323846

float random (in vec2 seed) {
  return fract(sin(dot(seed.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float random (in vec2 seed, in float mi, in float ma) {
  return random(seed) * (ma - mi) + mi;
}

float degToRad (in float deg) {
  return deg * PI / 180.0;
}
