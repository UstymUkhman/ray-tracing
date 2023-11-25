import type WebWorker from '@/utils/worker';
import type { CanvasWebGL2, CanvasWebGPU } from '@/stage/context';

export type Context = 'Canvas2D' | 'WebGL' | 'WebGL2' | 'WebGPU';
type SceneCanvas = HTMLCanvasElement | OffscreenCanvas;
export type GPUCanvas = CanvasWebGL2 | CanvasWebGPU;

export type SceneParams =
{
  offscreen?: boolean,
  canvas: SceneCanvas,
  worker?: WebWorker,
  context: Context,
  tracer?: string
};
