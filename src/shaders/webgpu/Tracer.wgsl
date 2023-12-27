#include main.vert.wgsl;

@group(0) @binding(0)
var framebuffer: texture_2d<f32>;

@group(0) @binding(1)
var framebufferSampler: sampler;

@fragment
fn mainFragment(@location(0) coords: vec2f) -> @location(0) vec4f
{
  return textureSample(framebuffer, framebufferSampler, coords);
}
