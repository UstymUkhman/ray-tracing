export type BackEndContext = '2d' | 'webgl' | 'webgl2' | 'webgpu';
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

export type Trace = (
  start: number,
  f32: Float32Array,
  sample?: number
) => Float32Array;
