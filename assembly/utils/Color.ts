import Vector3 from './Vector3';

// @ts-expect-error: ts(1206)
@inline
function format (color: Vector3, samples: u16): Vector3 {
  return color.divideScalar(samples).sqrt.rgb;
}

// @ts-expect-error: ts(1206)
@inline
export const floatToInt = (
  colors: Uint8ClampedArray,
  pixels: Float32Array,
  samples: u16
): Uint8ClampedArray => {
  const color = new Vector3();

  for (let p = 0, lp = pixels.length; p < lp; p += 3) {
    format(color.set(
      unchecked(pixels[p    ]),
      unchecked(pixels[p + 1]),
      unchecked(pixels[p + 2])
    ), samples);

    unchecked(colors[p    ] = color.xu8);
    unchecked(colors[p + 1] = color.yu8);
    unchecked(colors[p + 2] = color.zu8);
  }

  return colors;
};
