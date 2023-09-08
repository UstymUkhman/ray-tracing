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
  // Method 1:
  for ( ; ; ) {
    vec3 rand = randomVec(seed, -1.0, 1.0);
    if (lengthSquared(rand) < 1.0) return rand;
  }

/*
  // Method 2:
  float rand = random(seed);
  float x = rand * 2.0 - 1.0;
  float s = sqrt(rand * -rand + rand);
  float y = (random(seed, -2.0, 2.0)) * s;

  float ls = x * x + y * y;

  return vec3(x, y, abs(1.0 - ls * 2.0));

  // Method 3:
  float rand = random(seed);
  float x = rand * 2.0 - 1.0;
  float s = sqrt(rand * -rand + rand);
  float y = (random(seed, -2.0, 2.0)) * s;

  float ls = x * x + y * y;
  s = sqrt(1.0 - ls);

  return vec3(x * 2.0 * s, y * 2.0 * s, cos(1.0 - ls * 2.0));

  // Method 4:
  float r = random(seed, 0.0, PI * 2.0);
  float z = random(seed, -1.0, 1.0);
  float s = sqrt(1.0 - z * z);

  return vec3(cos(r) * s, sin(r) * s, z);

  // Method 5:
  float rand = random(seed);
  float d = random(seed, 0.0, PI * 2.0);
  float r = sqrt((1.0 - rand) * rand) * 2.0;

  return vec3(cos(d) * r, sin(d) * r, 1.0 - rand * 2.0);
*/
}

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

bool nearZero (in vec3 vec) {
  return (abs(vec.x) < 1e-8) &&
    (abs(vec.y) < 1e-8) &&
    (abs(vec.z) < 1e-8);
}
