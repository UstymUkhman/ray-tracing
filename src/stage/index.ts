import { Events, CPUScene, GPUScene } from '@/stage/scene';
import type { OffscreenCanvas } from '@/stage/types';
import type { Context } from '@/stage/scene/types';
import type { Event } from '@/utils/Events';
import { download } from '@/utils/Image';
import WebWorker from '@/utils/worker';

export default class Stage
{
  public readonly offscreen = !DEBUG && (
    typeof HTMLCanvasElement !== 'undefined' && !!(
      HTMLCanvasElement.prototype as OffscreenCanvas
    ).transferControlToOffscreen
  );

  public constructor (scenes: HTMLCanvasElement[]) {
    scenes.forEach(canvas => {
      const { processing, tracer } = canvas.dataset;
      const context = canvas.dataset.context as Context;

      if (processing === 'GPU')
        return new GPUScene({ canvas, context, tracer });

      const worker = new WebWorker();
      Events.createWorkerEvents(worker, this.offscreen);

      if (!this.offscreen)
        return new CPUScene({ canvas, context, worker, tracer });

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

        return worker.transfer(
          (canvas as OffscreenCanvas)
            .transferControlToOffscreen(),
          { tracer, context }
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
    download((event.data as { image: string }).image);
  }

  private startStats (tracer: string): void {
    this.offscreen && Events.dispatch(`${tracer}::Start`);
  }
}
