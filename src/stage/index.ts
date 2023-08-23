import type { OffscreenCanvas } from '@/stage/types';
import type { Event } from '@/utils/Events';
import Config from '@/stage/Config';
import Worker from '@/utils/worker';
import Client from '@/stage/Client';
import Events from '@/stage/Events';
import Scene from '@/stage/Scene';

export default class Stage
{
  private readonly client = new Client();
  private readonly worker = new Worker();

  private readonly offscreen = !DEBUG && (
    typeof HTMLCanvasElement !== 'undefined' && !!(
      HTMLCanvasElement.prototype as OffscreenCanvas
    ).transferControlToOffscreen
  );

  public constructor (canvas: HTMLCanvasElement) {
    Events.createWorkerEvents(this.worker, this.offscreen);
    const { backEnd, pixelRatio = devicePixelRatio } = Config;
    Events.add('Download::PPMImage', this.downloadPPMImage.bind(this));

    !this.offscreen
      ? new Scene({ canvas, worker: this.worker, backEnd, pixelRatio })
      : this.worker.transfer((canvas as OffscreenCanvas)
        .transferControlToOffscreen(), { backEnd, pixelRatio }
      );
  }

  private downloadPPMImage (event: Event): void {
    const { image } = event.data as { image: string };
    this.client.downloadImage(image);
  }
}
