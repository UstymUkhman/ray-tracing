import Vector3 from '@/utils/Vector3';
import { clamp, randomInt } from '@/utils/Number';

export type RGB = { r: number; g: number; b: number; };

const getValue = ({ r, g, b }: RGB) =>
  clamp(r * 255, 0, 255) << 16 ^ clamp(g * 255, 0, 255) << 8 ^ clamp(b * 255, 0, 255) << 0;

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

export const format = (color: Vector3, samples: number) => {
  const scale = 1.0 / samples;
  color.multiply(scale);

  return color.set(
    clamp(color.x, 0.0, 0.999) * 256 | 0,
    clamp(color.y, 0.0, 0.999) * 256 | 0,
    clamp(color.z, 0.0, 0.999) * 256 | 0
  );
};

export const getHex = (color: RGB | number) => {
  color = typeof color === 'number' ? color : getValue(color);
  return `#${(`000000${color.toString(16)}`).slice(-6)}`;
};

export const getInt = (color: RGB | string) => {
  color = typeof color === 'string' ? color : getHex(color);
  return parseInt(color.slice(1), 16);
};

export const random = () => randomInt(0, 0xffffff);
