export const clamp = (value: number, min = 0, max = 1) => Math.max(min, Math.min(value, max));
export const random = (min: number, max: number) => Math.random() * (max - min) + min;
export const degToRad = (deg: number) => deg * Math.PI / 180.0;

export const toFixed = (value: number, mantissa = 2.0) => {
  const pow10 = Math.pow(10.0, mantissa);
  return ~~(pow10 * value) / pow10;
};

export const DELTA_UPDATE = 1.0 / 0.06;
