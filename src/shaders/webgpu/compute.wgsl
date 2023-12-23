// Workgroup size:
override size: u32;

@group(0) @binding(0)
var framebuffer: texture_storage_2d<rgba16float, write>;

@compute @workgroup_size(size, size)
fn mainCompute(@builtin(global_invocation_id) invocation_id: vec3u)
{
  if (all(invocation_id.xy < textureDimensions(framebuffer)))
  {
    let uv = vec2f(invocation_id.xy) / vec2f(textureDimensions(framebuffer).xy);
    textureStore(framebuffer, invocation_id.xy, vec4f(uv, 0.25, 1.0));
  }
}
