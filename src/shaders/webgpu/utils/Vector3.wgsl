#include ./Number.wgsl;

fn nearZero(vec: vec3f) -> bool {
  return (abs(vec.x) < 1e-8f) &&
    (abs(vec.y) < 1e-8f) &&
    (abs(vec.z) < 1e-8f);
}

fn randomVec(seed: vec2f) -> vec3f {
  return vec3f(
    random(seed * 0.123),
    random(seed * 0.456),
    random(seed * 0.789)
  );
}

fn randomMinMaxVec(seed: vec2f, mi: f32, ma: f32) -> vec3f {
  return vec3f(
    randomMinMax(seed * 0.123, mi, ma),
    randomMinMax(seed * 0.456, mi, ma),
    randomMinMax(seed * 0.789, mi, ma)
  );
}

fn lengthSquared(vec: vec3f) -> f32 {
  return dot(vec, vec);
}

fn randomUnitDisk(seed: vec2f) -> vec3f {
  // Method 1:
  /* for ( ; ; ) {
    var rand = randomMinMaxVec(seed, -1.0, 1.0);
    rand.z = 0.0;

    if (lengthSquared(rand) < 1.0) {
      return rand;
    }
  } */

  // Method 2:
  let rand = random(seed * 0.02468);
  let x = rand * 2.0 - 1.0;

  let y =
    randomMinMax(seed * 0.13579, -2.0, 2.0) *
    sqrt(rand * -rand + rand);

  return vec3f(x, y, 0.0);
}

fn randomUnitSphere(seed: vec2f) -> vec3f {
  for ( ; ; ) {
    let rand = randomMinMaxVec(seed, -1.0, 1.0);

    if (lengthSquared(rand) < 1.0) {
      return rand;
    }
  }
}

fn randomNormalized(seed: vec2f) -> vec3f {
  return normalize(randomUnitSphere(seed));
}

fn randomHemisphere(normal: vec3f, seed: vec2f) -> vec3f {
  let unitSphere = randomUnitSphere(seed);

  return select(
    -unitSphere, unitSphere,
    dot(unitSphere, normal) > 0.0
  );
}
