export type BackEndContext = '2d' | 'webgl' | 'webgl2' | 'webgpu';
export type Trace = (pixels: Float32Array) => Float32Array;
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
  u8: Uint8ClampedArray,
  f32: Float32Array,
  samples: number
) => Uint8ClampedArray;
