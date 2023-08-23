import type Vector3 from '@S/utils/Vector3';
import { clamp, randomInt } from '@S/utils/Number';

export type RGB = { r: number; g: number; b: number; };

export const floatToInt = (f32: Float32Array, uint8: Uint8ClampedArray, color: Vector3, samples: number): void => {
  for (let p = 0; p < f32.length; p += 3)
  {
    color.set(f32[p], f32[p + 1], f32[p + 2]);
    const { x, y, z } = format(color, samples);
    uint8[p] = x; uint8[p + 1] = y; uint8[p + 2] = z;
  }
};

export const blend = (initial: RGB | string | number, target: RGB | string | number, p = 0.5): string => {
  initial = getRGB(typeof initial === 'object' ? getInt(initial) : initial, 255);
  target = getRGB(typeof target === 'object' ? getInt(target) : target, 255);

  return `#${(0x100000000 +
    (Math.round(((target.r - initial.r) * p) + initial.r) * 0x10000) +
    (Math.round(((target.g - initial.g) * p) + initial.g) * 0x100) +
    Math.round(((target.b - initial.b) * p) + initial.b)
  ).toString(16).slice(3)}`;
};

export const getRGB = (color: string | number, format: 255 | 1 = 1): RGB => {
  color = typeof color === 'string' ? getInt(color) : color;

  return {
    r: (color >> 16) & format,
    g: (color >> 8) & format,
    b: color & format
  };
};

export const getHex = (color: RGB | number): string => {
  color = typeof color === 'number' ? color : getValue(color);
  return `#${(`000000${color.toString(16)}`).slice(-6)}`;
};

export const getInt = (color: RGB | string): number => {
  color = typeof color === 'string' ? color : getHex(color);
  return parseInt(color.slice(1), 16);
};

export const random = (): number => randomInt(0, 0xffffff);

const format = (color: Vector3, samples: number): Vector3 =>
  color.divide(samples).sqrt.rgb;

const getValue = ({ r, g, b }: RGB): number =>
  clamp(r * 255, 0, 255) << 16 ^ clamp(g * 255, 0, 255) << 8 ^ clamp(b * 255, 0, 255) << 0;
