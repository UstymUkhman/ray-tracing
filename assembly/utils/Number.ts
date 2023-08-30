export function clamp (value: f64, min: f64 = 0, max: f64 = 1): f64 {
  return Math.max(min, Math.min(value, max));
}

export function toFixed (value: f64, mantissa: u8 = 2): f64 {
  const pow10 = Math.pow(10.0, mantissa);
  return f64(i32(pow10 * value)) / pow10;
}

export function random (min: f64, max: f64): f64 {
  return Math.random() * (max - min) + min;
}

export function degToRad (deg: f64): f64 {
  return deg * Math.PI / 180.0;
}
