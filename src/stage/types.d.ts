export type BackEndContext = '2d' | 'webgl' | 'webgl2' | 'webgpu';
type SceneCanvas = HTMLCanvasElement | OffscreenCanvas;

export type OffscreenCanvas = HTMLCanvasElement & {
  transferControlToOffscreen: () => Transferable
};

export type SceneParams = {
  backEnd: BackEndContext,
  offscreen?: boolean,
  canvas: SceneCanvas,
  pixelRatio: number
};
