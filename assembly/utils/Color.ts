import Vector3 from './Vector3';

// @ts-expect-error: ts(1206)
@inline
function format (color: Vector3, samples: u16): Vector3 {
  return color.divideScalar(samples).sqrt.rgb;
}

// @ts-expect-error: ts(1206)
@inline
export const floatToInt = (
  colors: Uint8ClampedArray,
  pixels: Float32Array,
  samples: u16
): Uint8ClampedArray => {
  const color = new Vector3();

  for (let p = 0; p < pixels.length; p += 3) {
    format(color.set(pixels[p], pixels[p + 1], pixels[p + 2]), samples);
    colors[p] = color.xu8; colors[p + 1] = color.yu8; colors[p + 2] = color.zu8;
  }

  return colors;
};
