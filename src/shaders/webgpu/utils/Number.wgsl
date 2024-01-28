const INFINITY = 3.40282346638528859812e+38f;
const PI       = radians(180.0);

var<private> rnd: vec3u;

// A psuedo random number generator. Based on WGSL Cornell Box implementation:
// https://github.com/webgpu/webgpu-samples/blob/main/src/sample/cornell/common.wgsl#L93-L112
fn initializeRandom(invocation: vec3u) {
  const A = vec3(
    1741651 * 1009,
    140893  * 1609 * 13,
    6521    * 983  * 7 * 2
  );

  rnd = (invocation * A) ^ tracerUniform.seed;
}

fn random() -> f32 {
  const C = vec3(
    60493 * 9377,
    11279 * 2539 * 23,
    7919  * 631  * 5 * 3
  );

  rnd = (rnd * C) ^ (rnd.yzx >> vec3(4u));
  return f32(rnd.x ^ rnd.y) / f32(0xffffffff);
}

fn randomMinMax(mi: f32, ma: f32) -> f32 {
  return random() * (ma - mi) + mi;
}

fn degToRad(deg: f32) -> f32 {
  return deg * PI / 180.0;
}
