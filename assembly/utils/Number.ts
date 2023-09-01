// @ts-expect-error: ts(1206)
@inline
export function clampf (value: f32, min: f32 = 0, max: f32 = 1): f32 {
  return Mathf.max(min, Mathf.min(value, max));
}

// @ts-expect-error: ts(1206)
@inline
export function clamp (value: f64, min: f64 = 0, max: f64 = 1): f64 {
  return Math.max(min, Math.min(value, max));
}

// @ts-expect-error: ts(1206)
@inline
export function toFixed (value: f64, mantissa: u8 = 2): f64 {
  const pow10 = Math.pow(10.0, mantissa);
  return f64(i32(pow10 * value)) / pow10;
}

// @ts-expect-error: ts(1206)
@inline
export function random (min: f64, max: f64): f64 {
  return Math.random() * (max - min) + min;
}

// @ts-expect-error: ts(1206)
@inline
export function degToRad (deg: f64): f64 {
  return deg * Math.PI / 180.0;
}
