export type BackEndContext = 'Canvas2D' | 'WebGL' | 'WebGL2' | 'WebGPU';
export type Trace = (pixels: Float32Array) => ArrayLike<number>;
type SceneCanvas = HTMLCanvasElement | OffscreenCanvas;

export type OffscreenCanvas = HTMLCanvasElement & {
  transferControlToOffscreen: () => Transferable
};

import type WebWorker from '@S/utils/worker';

export type SceneParams = {
  backEnd: BackEndContext,
  offscreen?: boolean,
  canvas: SceneCanvas,
  pixelRatio: number,
  worker?: WebWorker,
  tracer?: string
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
