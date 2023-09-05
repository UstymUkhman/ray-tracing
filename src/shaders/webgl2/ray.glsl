struct ray
{
  vec3 orig;
  vec3 dir;
};

float hit (const in vec3 center, const in float radius, const in ray Ray)
{
  vec3 oc = Ray.orig - center;

  float a = lengthSquared(Ray.dir);
  float halfB = dot(oc, Ray.dir);

  float c = lengthSquared(oc) - radius * radius;
  float d = halfB * halfB - a * c;

  return d < 0.0 ? -1.0 : (-halfB - sqrt(d)) / a;
}

vec3 at (in ray Ray, in float t)
{
  return Ray.orig + Ray.dir * t;
}
