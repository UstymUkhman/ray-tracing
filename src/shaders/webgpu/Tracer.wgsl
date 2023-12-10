#include main.vert.wgsl;
#include utils/Vector3.wgsl;

@fragment
fn mainFrag(@location(0) coords: vec2f) -> @location(0) vec4f
{
  return vec4f(coords, 0.25, 1.0);
}
