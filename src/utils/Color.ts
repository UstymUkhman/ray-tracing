import Vector3 from '@S/utils/Vector3';

export const getRGB = (color: number, format: 0xff | 1 = 1):
  Map<'r' | 'g' | 'b', number> => new Map([
    ['r', (color >> 16) & format],
    ['g', (color >> 8) & format],
    ['b', color & format]
  ]);

const format = (color: Vector3, samples: number): Vector3 =>
  color.divide(samples).sqrt.rgb;

export const getHex = (color: number): string =>
  `#${(`000000${color.toString(16)}`).slice(-6)}`;

export const floatToInt = (
  f32: Float32Array,
  u8: Uint8ClampedArray,
  samples: number
): Uint8ClampedArray => {
  const color = new Vector3();

  for (let p = 0; p < f32.length; p += 3) {
    const { x, y, z } = format(color.set(
      f32[p], f32[p + 1], f32[p + 2]
    ), samples);

    u8[p] = x; u8[p + 1] = y; u8[p + 2] = z;
  }

  return u8;
};
