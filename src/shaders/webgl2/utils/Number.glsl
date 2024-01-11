#define INFINITY 1.0 / 0.0
#define PI 3.14159265358979323846

// A psuedo random number generator. Based on WGSL Cornell Box implementation:
// https://github.com/webgpu/webgpu-samples/blob/main/src/sample/cornell/common.wgsl#L93-L112
#ifndef SIMPLE_RANDOM
  uniform uvec3 seed;

  uvec3 rnd = uvec3(0);
  uvec3 depthSeed = uvec3(1);

  void initializeRandom (void) {
    uvec3 A = uvec3(
      1741651 * 1009,
      140893  * 1609 * 13,
      6521    * 983  * 7 * 2
    );

    rnd = (depthSeed * A) ^ seed;
  }

  float random (in vec2 seed) {
    uvec3 C = uvec3(
      60493 * 9377,
      11279 * 2539 * 23,
      7919  * 631  * 5 * 3
    );

    rnd = (rnd * C) ^ (rnd.yzx >> uvec3(4u));
    return float(rnd.x ^ rnd.y) / 4294967295.0;
  }

#else
  float random (in vec2 seed) {
    return fract(sin(dot(seed, vec2(12.9898, 78.233))) * 43758.5453123);
  }
#endif

float random (in vec2 seed, in float mi, in float ma) {
  return random(seed) * (ma - mi) + mi;
}

float degToRad (in float deg) {
  return deg * PI / 180.0;
}
