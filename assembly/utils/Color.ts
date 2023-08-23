import Vector3 from './Vector3';

export function getRGB (color: isize, format: u8 = 1): Map<string, isize> {
  const rgb = new Map<string, isize>();
  rgb.set('r', (color >> 16) & format);
  rgb.set('g', (color >> 8) & format);
  return rgb.set('b', color & format);
}

function format (color: Vector3, samples: u16): Vector3 {
  return color.divide(samples).sqrt.rgb;
}

export function getHex (color: f64): string {
  return `#${(`000000${color.toString(16)}`).slice(-6)}`;
}

export const floatToInt = (
  f32: Float32Array,
  uint8: Uint8ClampedArray,
  color: Vector3,
  samples: u16
): void => {
  for (let p = 0; p < f32.length; p += 3)
  {
    color.set(f32[p], f32[p + 1], f32[p + 2]);
    const vec3 = format(color, samples);

    uint8[p    ] = vec3.xu8;
    uint8[p + 1] = vec3.yu8;
    uint8[p + 2] = vec3.zu8;
  }
};
