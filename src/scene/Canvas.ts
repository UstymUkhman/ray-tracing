import type { OffscreenCanvas, SceneParams } from '@/scene/types';
import { Config } from '@/scene/Config';
import Worker from '@/utils/worker';
import Scene from '@/scene/Scene';

export default class Canvas
{
  private readonly worker = new Worker();

  private readonly offscreen = !DEBUG && (
    typeof HTMLCanvasElement !== 'undefined' && !!(
      HTMLCanvasElement.prototype as OffscreenCanvas
    ).transferControlToOffscreen
  );

  public constructor (canvas: HTMLCanvasElement) {
    const { backEnd, pixelRatio = devicePixelRatio } = Config.Scene;

    this.offscreen
      ? this.worker.transfer((canvas as OffscreenCanvas)
        .transferControlToOffscreen(), { backEnd, pixelRatio }
      )
      : Canvas.createScene({ canvas, backEnd, pixelRatio });
  }

  public static createScene (params: SceneParams): void {
    new Scene(params);
  }
}
