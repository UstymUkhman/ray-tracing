#include Sphere.wgsl;

struct List
{
  objects: array<Sphere, SPHERES>,
  length: u32
};

var<private> list = List();

fn addObject(object: Sphere)
{
  list.objects[list.length] = object;
  list.length++;
}

fn hitObject(ray: Ray, tMin: f32, tMax: f32) -> bool
{
  var hit = false;
  var closest = tMax;

  for (var o = 0u; o < list.length; o++) {
    let sphere = list.objects[o];

    if (sphereHit(ray, tMin, closest, sphere)) {
      closest = record.t;
      hit = true;
    }
  }

  return hit;
}
