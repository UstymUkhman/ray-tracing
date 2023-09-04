#define PI 3.14159265358979323846

float random (in vec2 co) {
  return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float degToRad (in float deg) {
  return deg * PI / 180.0;
}
