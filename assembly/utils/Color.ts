import { clampf } from './Number';

// @ts-expect-error: ts(1206)
@inline
export const floatToInt = (
  pixels: StaticArray<f32>,
  colors: StaticArray<u8>,
  samples: u16
): StaticArray<u8> => {
  for (let p = 0, lp = pixels.length; p < lp; p += 3)
  {
    let x = pixels[p    ];
    let y = pixels[p + 1];
    let z = pixels[p + 2];

    x = Mathf.sqrt(x / samples);
    y = Mathf.sqrt(y / samples);
    z = Mathf.sqrt(z / samples);

    x = clampf(x * 256, 0, 0xff);
    y = clampf(y * 256, 0, 0xff);
    z = clampf(z * 256, 0, 0xff);

    colors[p    ] = <u8>x;
    colors[p + 1] = <u8>y;
    colors[p + 2] = <u8>z;
  }

  return colors;
};
