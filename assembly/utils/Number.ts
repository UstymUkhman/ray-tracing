// @ts-expect-error: ts(1206)
@inline
export function clamp (value: f32, min: f32 = 0, max: f32 = 1): f32 {
  return Mathf.max(min, Mathf.min(value, max));
}

// @ts-expect-error: ts(1206)
@inline
export function toFixed (value: f32, mantissa: u8 = 2): f32 {
  const pow10 = Mathf.pow(10.0, mantissa);
  return f32(i32(pow10 * value)) / pow10;
}

// @ts-expect-error: ts(1206)
@inline
export function random (min: f32, max: f32): f32 {
  return Mathf.random() * (max - min) + min;
}

// @ts-expect-error: ts(1206)
@inline
export function degToRad (deg: f32): f32 {
  return deg * Mathf.PI / 180.0;
}
