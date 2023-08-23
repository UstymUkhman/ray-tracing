export function clamp<N extends number = f64>
  (value: N, min: f64 = 0, max: f64 = 1): N {
    return <N> Math.max(min, Math.min(value, max));
}

export function toFixed (value: f64, mantissa: u8 = 2): f64 {
  const pow10 = Math.pow(10.0, mantissa);
  return f64(isize(pow10 * value)) / pow10;
}

export function randomInt (min: isize, max: isize): isize {
  return isize(Math.random() * (max - min + 1)) + min;
}

export function random (min: f64, max: f64): f64 {
  return Math.random() * (max - min) + min;
}

export function degToRad (deg: f64): f64 {
  return deg * Math.PI / 180.0;
}

export const DELTA_UPDATE: f64 = 1.0 / 0.06;
