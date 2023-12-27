#define INFINITY 1.0 / 0.0
#define PI 3.14159265358979323846

/**
 * TODO: Update random number generator:
 * - Generate a `depthSeed` from current depth index: vec2 depthSeed = vec2(depth - d, d);
 * - Create and use a vec3 seed uniform to mutate `depthSeed` and "dot" it with a seed uniform.
 * - Refactor `random` function to update and reuse a psuedo random number after each invocation:
 *   https://github.com/webgpu/webgpu-samples/blob/main/src/sample/cornell/common.wgsl#L93-L112
 */
float random (in vec2 seed) {
  return fract(sin(dot(seed, vec2(12.9898, 78.233))) * 43758.5453123);
}

float random (in vec2 seed, in float mi, in float ma) {
  return random(seed) * (ma - mi) + mi;
}

float degToRad (in float deg) {
  return deg * PI / 180.0;
}
