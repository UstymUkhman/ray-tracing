type SceneCanvas = HTMLCanvasElement | OffscreenCanvas;

export type OffscreenCanvas = HTMLCanvasElement & {
  transferControlToOffscreen: () => Transferable
};

export type SceneParams = {
  canvas: SceneCanvas,
  pixelRatio: number
};
