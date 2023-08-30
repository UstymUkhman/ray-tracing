import Vector3 from './Vector3';

function format (color: Vector3, samples: u16): Vector3 {
  return color.divideScalar(samples).sqrt.rgb;
}

export const floatToInt = (
  colors: Uint8ClampedArray,
  pixels: Float32Array,
  color: Vector3,
  samples: u16
): void => {
  for (let p = 0; p < pixels.length; p += 3)
  {
    format(color.set(pixels[p], pixels[p + 1], pixels[p + 2]), samples);
    colors[p] = color.xu8; colors[p + 1] = color.yu8; colors[p + 2] = color.zu8;
  }
};
