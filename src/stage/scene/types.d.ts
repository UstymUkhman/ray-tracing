export type Context = 'Canvas2D' | 'WebGL' | 'WebGL2' | 'WebGPU';
type SceneCanvas = HTMLCanvasElement | OffscreenCanvas;
import type WebWorker from '@/utils/worker';

export type SceneParams = {
  offscreen?: boolean,
  canvas: SceneCanvas,
  pixelRatio: number,
  worker?: WebWorker,
  context: Context,
  tracer: string
};
