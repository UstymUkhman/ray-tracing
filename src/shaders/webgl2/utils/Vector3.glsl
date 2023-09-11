float lengthSquared (in vec3 vec) {
  return dot(vec, vec);
}

vec3 randomVec (in vec2 seed) {
  return vec3(
    random(seed * 0.123),
    random(seed * 0.456),
    random(seed * 0.789)
  );
}

vec3 randomVec (in vec2 seed, in float mi, in float ma) {
  return vec3(
    random(seed * 0.123, mi, ma),
    random(seed * 0.456, mi, ma),
    random(seed * 0.789, mi, ma)
  );
}

vec3 randomUnitSphere (in vec2 seed) {
  for ( ; ; ) {
    vec3 rand = randomVec(seed, -1.0, 1.0);
    if (lengthSquared(rand) < 1.0) return rand;
  }
}

vec3 randomNormalized (in vec2 seed) {
  return normalize(randomUnitSphere(seed));
}

vec3 randomHemisphere (in vec3 normal, in vec2 seed) {
  vec3 unitSphere = randomUnitSphere(seed);

  return dot(unitSphere, normal) > 0.0
    ? unitSphere : -unitSphere;
}

bool nearZero (in vec3 vec) {
  return (abs(vec.x) < 1e-8) &&
    (abs(vec.y) < 1e-8) &&
    (abs(vec.z) < 1e-8);
}
