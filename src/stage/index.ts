import type { OffscreenCanvas } from '@/stage/types';
import { Config } from '@/stage/Config';
import Worker from '@/utils/worker';
import Scene from '@/stage/Scene';

export default class Stage
{
  private readonly worker = new Worker();

  private readonly offscreen = !DEBUG && (
    typeof HTMLCanvasElement !== 'undefined' && !!(
      HTMLCanvasElement.prototype as OffscreenCanvas
    ).transferControlToOffscreen
  );

  public constructor (canvas: HTMLCanvasElement) {
    const { backEnd, pixelRatio = devicePixelRatio } = Config.Scene;

    !this.offscreen
      ? new Scene({ canvas, backEnd, pixelRatio })
      : this.worker.transfer((canvas as OffscreenCanvas)
        .transferControlToOffscreen(), { backEnd, pixelRatio }
      );
  }
}
