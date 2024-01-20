#include ../materials/Material.wgsl;

struct Record
{
  t: f32,
  point: vec3f,
  normal: vec3f,
  frontFace: bool
};

var<private> record = Record();

fn setFaceNormal(ray: Ray, outwardNormal: vec3f)
{
  record.frontFace = dot(ray.direction, outwardNormal) < 0.0;
  record.normal = select(-outwardNormal, outwardNormal, record.frontFace);
}
