import type { OffscreenCanvas } from '@S/stage/types';
import type { Event } from '@S/utils/Events';
import WebWorker from '@S/utils/worker';
import Config from '@S/stage/Config';
import Client from '@S/stage/Client';
import Events from '@S/stage/Events';
import Scene from '@S/stage/Scene';

export default class Stage
{
  private readonly client = new Client();

  private readonly offscreen = !DEBUG && (
    typeof HTMLCanvasElement !== 'undefined' && !!(
      HTMLCanvasElement.prototype as OffscreenCanvas
    ).transferControlToOffscreen
  );

  public constructor (scenes: HTMLCanvasElement[]) {
    scenes.forEach(canvas => {
      const worker = new WebWorker();
      const { tracer } = canvas.dataset;

      Events.createWorkerEvents(worker, this.offscreen);
      const { backEnd, pixelRatio = devicePixelRatio } = Config;

      this.offscreen &&
        Events.add('Download::PPMImage', this.downloadPPMImage.bind(this));

      !this.offscreen
        ? new Scene({ canvas, worker, tracer, backEnd, pixelRatio })
        : worker.transfer((canvas as OffscreenCanvas)
          .transferControlToOffscreen(),
          { tracer, backEnd, pixelRatio }
        );
    });

    !this.offscreen &&
      Events.add('Download::PPMImage', this.downloadPPMImage.bind(this));
  }

  private downloadPPMImage (event: Event): void {
    const { image } = event.data as { image: string };
    this.client.downloadImage(image);
  }
}
