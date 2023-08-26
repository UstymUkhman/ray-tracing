import {
  Canvas2D,
  CanvasWebGL,
  CanvasWebGL2
  // CanvasWebGPU,
} from '@S/stage/backend';

import Config from '@S/stage/Config';
import Events from '@S/stage/Events';

import type { Trace } from '@S/stage/types';
import type WebWorker from '@S/utils/worker';
import type { Canvas } from '@S/stage/backend';

import { DELTA_UPDATE } from '@S/utils/Number';
import type { ImageData } from '@S/stage/types';
import type { SceneParams } from '@S/stage/types';

export default class Scene
{
  private sample = 0.0;
  private trace!: Trace;

  private readonly canvas!: Canvas;
  private readonly worker?: WebWorker;

  private readonly start   = Date.now();
  private readonly samples = Config.samples;

  private u8 = new Uint8ClampedArray(
    Config.width * Config.height * 3
  );

  private readonly f32 = new Float32Array(
    Config.width * Config.height * 3
  );

  public constructor (params: SceneParams) {
    const tracer = this.getTracer(params);
    this.canvas = this.createCanvas(params);

    ((this.worker = params.worker))
      ? this.createWorkerEvents(tracer)
      : this.loadTracer(tracer);

    this.canvas.clear();
  }

  private getTracer (params: SceneParams): string {
    return params.tracer !== 'assemblyscript'
      ? 'typescript' : 'assemblyscript';
  }

  private createCanvas (params: SceneParams): Canvas {
    switch (params.backEnd) {
      // TBI
      // case 'webgpu':
      //   return new CanvasWebGPU(params);

      case 'webgl2':
        return new CanvasWebGL2(params);

      case 'webgl':
        return new CanvasWebGL(params);

      default:
        return new Canvas2D(params);
    }
  }

  private createWorkerEvents (tracer: string): void {
    this.worker?.post('Create::Tracer', { tracer });

    this.worker?.add('Create::Tracer', () => {
      this.worker?.add('Create::PPMImage', this.showPPMImage.bind(this));
      this.createPPMImage();
    });
  }

  private loadTracer (tracer: string): void {
    import(tracer === 'assemblyscript'
      ? '../../build/release.js'
      : './Tracer.ts'
    ).then(({ trace }) => {
      this.trace = trace;
      this.createPPMImage();
    });
  }

  private createPPMImage (download = false): void {
    if (this.worker) return this.worker.post('Create::PPMImage', { download });

    this.u8 = this.trace(this.start, this.f32, this.u8, ++this.sample);
    this.showPPMImage({ pixels: this.u8, sample: this.sample, download }, true);
  }

  private showPPMImage (data: unknown, worker?: boolean): void {
    const imageData = data as ImageData;
    this.canvas.drawImage(imageData.pixels);

    this.samples === imageData.sample ||
    !(this.worker ? imageData.sample : this.sample)
      ? imageData.download && this.downloadPPMImage(imageData.pixels, worker)
      : setTimeout(this.createPPMImage.bind(this, imageData.download), DELTA_UPDATE);
  }

  private downloadPPMImage (pixels: Uint8ClampedArray, worker?: boolean): void {
    let image = `P3\n${this.canvas.width} ${this.canvas.height}\n255\n`;

    for (let p = 0; p < pixels.length; p += 3)
      image += `${pixels[p]} ${pixels[p + 1]} ${pixels[p + 2]}\n`;

    Events.dispatch('Download::PPMImage', { image }, worker);
  }
}
