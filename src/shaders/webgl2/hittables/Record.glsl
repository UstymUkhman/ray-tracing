#include ../materials/Material;

struct Record
{
  float t;
  vec3 point;
  vec3 normal;
  vec4 material;
  bool frontFace;
} record;

void setFaceNormal (
  const in Ray ray,
  const in vec3 outwardNormal
) {
  record.frontFace = dot(ray.direction, outwardNormal) < 0.0;
  record.normal = record.frontFace ? outwardNormal : -outwardNormal;
}
