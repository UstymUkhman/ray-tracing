import type { OffscreenCanvas, SceneParams } from '@/scene/types';
import { Config } from '@/scene/Config';
import Worker from '@/utils/worker';
import Scene from '@/scene/Scene';

export default class Canvas
{
  // private static scene!: Scene;
  private readonly worker = new Worker();

  private readonly offscreen = !DEBUG && (
    typeof HTMLCanvasElement !== 'undefined' && !!(
      HTMLCanvasElement.prototype as OffscreenCanvas
    ).transferControlToOffscreen
  );

  public constructor (canvas: HTMLCanvasElement) {
    const pixelRatio = Config.Scene.pixelRatio ?? devicePixelRatio;

    this.offscreen
      ? this.worker.transfer((canvas as OffscreenCanvas)
        .transferControlToOffscreen(), { pixelRatio }
      )
      : Canvas.createScene({ canvas, pixelRatio });
  }

  public static createScene (params: SceneParams): void {
    /* this.scene = */ new Scene(params);
  }
}
