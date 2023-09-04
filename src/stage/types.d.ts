export type Trace = (pixels: Float32Array) => ArrayLike<number>;

export type OffscreenCanvas = HTMLCanvasElement & {
  transferControlToOffscreen: () => Transferable
};

export type ImageData = {
  pixels: Uint8ClampedArray;
  download: boolean;
  sample: number;
};

export type Format = (
  f32: ArrayLike<number>,
  u8: Uint8ClampedArray,
  samples: number
) => ArrayLike<number>;
