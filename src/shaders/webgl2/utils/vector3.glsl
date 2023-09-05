vec3 rand (in vec2 co) {
  return vec3(random(co), random(co), random(co));
}

float lengthSquared (in vec3 vec) {
  return dot(vec, vec);
}
