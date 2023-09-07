float lengthSquared (in vec3 vec) {
  return dot(vec, vec);
}

vec3 randomVec (in vec2 seed) {
  return vec3(random(seed), random(seed), random(seed));
}

vec3 randomVec (in vec2 seed, in float mi, in float ma) {
  return vec3(
    random(seed, mi, ma),
    random(seed, mi, ma),
    random(seed, mi, ma)
  );
}

vec3 randomUnitSphere (in vec2 seed) {
  for ( ; ; ) {
    vec3 rand = randomVec(seed, -1.0, 1.0);
    if (lengthSquared(rand) < 1.0) return rand;
  }
}

/* vec3 randomUnitSphere(in vec2 seed) {
  float phi    = random(seed, 0.0, PI * 2.0);
  float radius = pow(random(seed), 1.0 / 3.0);
  float theta  = acos(random(seed, -1.0, 1.0));

  return vec3(
    radius * sin(theta) * cos(phi),
    radius * sin(theta) * sin(phi),
    radius * cos(theta)
  );
} */

vec3 randomNormalized (in vec2 seed) {
  return normalize(randomUnitSphere(seed));
}

vec3 randomHemisphere (in vec3 normal, in vec2 seed) {
  vec3 unitSphere = randomUnitSphere(seed);

  return dot(unitSphere, normal) > 0.0
    ? unitSphere : -unitSphere;
}

/* vec3 randomUnitDisk (in vec2 seed) {
  float x = random(seed, -1.0, 1.0);
  float y = random(seed, -1.0, 1.0);

  float radius, phi;

  if (x > -y)
  {
    if (x > y) {
      phi = y / x;
      radius = x;
    } else {
      radius = y;
      phi = 2.0 - x / y;
    }
  }

  else
  {
    if (x < y) {
      phi = 4.0 + y / x;
      radius = -x;
    } else {
      radius = -y;

      phi = y != 0.0
        ? 6.0 - x / y
        : 0.0;
    }
  }

  phi *= PI / 4.0;

  return vec3(
    radius * cos(phi),
    radius * sin(phi),
    0.0
  );
} */
