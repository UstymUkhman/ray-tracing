#include ./Config.wgsl;

struct VertexOutput {
  @location(0) coords: vec2f,
  @builtin(position) position: vec4f
};

@vertex
fn mainVert(@builtin(vertex_index) index: u32) -> VertexOutput
{
  let position = array(
    vec2f(0.0,  1.0),
    vec2f(1.0,  1.0),
    vec2f(0.0,  0.0),

    vec2f(0.0,  0.0),
    vec2f(1.0,  0.0),
    vec2f(1.0,  1.0)
  );

  var output: VertexOutput;
  let coords = position[index];

  output.position = vec4f(coords * 2 - 1, 0, 1);
  output.coords = coords;

  return output;
}

@fragment
fn mainFrag(@location(0) coords: vec2f) -> @location(0) vec4f
{
  return vec4f(coords, 0.25, 1.0);
}
