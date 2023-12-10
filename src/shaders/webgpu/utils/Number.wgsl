const PI = radians(180.0);
const INFINITY = 3.40282346638528859812e+38f;

fn random(seed: vec2f) -> f32 {
  return fract(sin(dot(seed, vec2f(12.9898, 78.233))) * 43758.5453123);
}

fn randomMinMax(seed: vec2f, mi: f32, ma: f32) -> f32 {
  return random(seed) * (ma - mi) + mi;
}
