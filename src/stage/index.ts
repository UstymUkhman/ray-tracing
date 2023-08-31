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

  public readonly offscreen = !DEBUG && (
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

      if (!this.offscreen)
        new Scene({ canvas, worker, tracer, backEnd, pixelRatio });

      else {
        Events.add('PPMImage::Download', this.downloadPPMImage.bind(this));

        Events.add('AssemblyScript::Stats::Update', (event: Event) =>
          this.updateStats(event, 'AssemblyScript')
        );

        Events.add('TypeScript::Stats::Update', (event: Event) =>
          this.updateStats(event, 'TypeScript')
        );

        Events.add(
          'AssemblyScript::Start',
          this.startStats.bind(this, 'AssemblyScript')
        );

        Events.add(
          'TypeScript::Start',
          this.startStats.bind(this, 'TypeScript')
        );

        worker.transfer(
          (canvas as OffscreenCanvas)
            .transferControlToOffscreen(),
          { tracer, backEnd, pixelRatio }
        );
      }
    });

    !this.offscreen &&
      Events.add('PPMImage::Download', this.downloadPPMImage.bind(this));
  }

  private updateStats (event: Event, tracer: string): void {
    this.offscreen && Events.dispatch(`${tracer}::Stats::Update`, event.data);
  }

  private downloadPPMImage (event: Event): void {
    const { image } = event.data as { image: string };
    this.client.downloadImage(image);
  }

  private startStats (tracer: string): void {
    this.offscreen && Events.dispatch(`${tracer}::Start`);
  }
}
