#include Number.wgsl;

fn nearZero(vec: vec3f) -> bool {
  return (abs(vec.x) < 1e-8f) &&
    (abs(vec.y) < 1e-8f) &&
    (abs(vec.z) < 1e-8f);
}

fn randomVec() -> vec3f {
  return vec3f(random(), random(), random());
}

fn randomMinMaxVec(mi: f32, ma: f32) -> vec3f {
  return vec3f(
    randomMinMax(mi, ma),
    randomMinMax(mi, ma),
    randomMinMax(mi, ma)
  );
}

fn lengthSquared(vec: vec3f) -> f32 {
  return dot(vec, vec);
}

fn randomUnitDisk() -> vec3f {
  // Method 1:
  /* for ( ; ; ) {
    var rand = randomMinMaxVec(-1.0, 1.0);
    rand.z = 0.0;

    if (lengthSquared(rand) < 1.0) {
      return rand;
    }
  } */

  // Method 2:
  let rand = random();
  let x = rand * 2.0 - 1.0;
  let y = randomMinMax(-2.0, 2.0) * sqrt(rand * -rand + rand);

  return vec3f(x, y, 0.0);
}

fn randomUnitSphere() -> vec3f {
  for ( ; ; ) {
    let rand = randomMinMaxVec(-1.0, 1.0);

    if (lengthSquared(rand) < 1.0) {
      return rand;
    }
  }
}

fn randomNormalized() -> vec3f {
  return normalize(randomUnitSphere());
}

fn randomHemisphere(normal: vec3f) -> vec3f {
  let unitSphere = randomUnitSphere();

  return select(
    -unitSphere, unitSphere,
    dot(unitSphere, normal) > 0.0
  );
}
