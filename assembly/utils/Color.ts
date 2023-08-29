import Vector3 from './Vector3';

export function getRGB (color: i32, format: u8 = 1): Map<string, i32> {
  const rgb = new Map<string, i32>();

  rgb.set('r', (color >> 16) & format);
  rgb.set('g', (color >> 8) & format);
  return rgb.set('b', color & format);
}

function format (color: Vector3, samples: u16): Vector3 {
  return color.divideScalar(samples).sqrt.rgb;
}

export function getHex (color: f64): string {
  return `#${(`000000${color.toString(16)}`).slice(-6)}`;
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
