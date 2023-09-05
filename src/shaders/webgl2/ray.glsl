struct Ray
{
  vec3 origin;
  vec3 direction;
};

vec3 at (in Ray ray, in float t)
{
  return ray.origin + ray.direction * t;
}
