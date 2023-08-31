import {
  Canvas2D,
  CanvasWebGL,
  CanvasWebGL2
  // CanvasWebGPU,
} from '@S/stage/backend';

import Config from '@S/stage/Config';
import Events from '@S/stage/Events';
import type WebWorker from '@S/utils/worker';

import { DELTA_UPDATE } from '@S/utils/Number';
import type { Canvas } from '@S/stage/backend';
import type { Trace, Format } from '@S/stage/types';
import type { SceneParams, ImageData } from '@S/stage/types';

export default class Scene
{
  private sample = 0.0;
  private trace!: Trace;
  private format!: Format;
  private readonly tracer;

  private f32 = new Float32Array(
    Config.width * Config.height * 3
  );

  private u8 = new Uint8ClampedArray(
    Config.width * Config.height * 3
  );

  private readonly canvas!: Canvas;
  private readonly worker?: WebWorker;
  private readonly samples = Config.samples;

  public constructor (params: SceneParams) {
    this.canvas = this.createCanvas(params);
    this.tracer = this.getTracer(params);

    ((this.worker = params.worker))
      ? this.createWorkerEvents()
      : this.loadTracer();

    this.canvas.clear();
  }

  private createCanvas (params: SceneParams): Canvas {
    switch (params.backEnd) {
      // TBI
      // case 'WebGPU':
      //   return new CanvasWebGPU(params);

      case 'WebGL2':
        return new CanvasWebGL2(params);

      case 'WebGL':
        return new CanvasWebGL(params);

      default:
        return new Canvas2D(params);
    }
  }

  private getTracer (params: SceneParams): string {
    return params.tracer !== 'AssemblyScript'
      ? 'TypeScript' : 'AssemblyScript';
  }

  private createWorkerEvents (): void {
    this.worker?.post('Create::Tracer', { tracer: this.tracer });

    this.worker?.add('Create::Tracer', () => {
      this.worker?.add('Create::PPMImage', this.showPPMImage.bind(this));
      Events.dispatch(`${this.tracer}::Start`);
      this.createPPMImage();
    });
  }

  private loadTracer (): void {
    import(this.tracer === 'AssemblyScript'
      ? '../../build/release.js'
      : './Tracer.ts'
    ).then(({ trace, format }) => {
      this.trace = trace;
      this.format = format;

      this.createPPMImage();

      Events.dispatch(
        `${this.tracer}::Start`,
        null, true
      );
    });
  }

  private createPPMImage (download = false): void {
    if (this.worker) return this.worker.post('Create::PPMImage', { download });

    this.f32 = new Float32Array(this.trace(this.f32));
    this.u8 = new Uint8ClampedArray(this.format(this.f32, this.u8, ++this.sample));

    this.showPPMImage({ pixels: this.u8, sample: this.sample, download }, true);
  }

  private showPPMImage (data: unknown, worker?: boolean): void {
    const imageData = data as ImageData;
    this.canvas.drawImage(imageData.pixels);

    this.samples === imageData.sample ||
    !(this.worker ? imageData.sample : this.sample)
      ? imageData.download && this.downloadPPMImage(imageData.pixels, worker)
      : setTimeout(this.createPPMImage.bind(this, imageData.download), DELTA_UPDATE);

    Events.dispatch(`${this.tracer}::Stats::Update`, { sample: imageData.sample }, worker);
  }

  private downloadPPMImage (pixels: Uint8ClampedArray, worker?: boolean): void {
    let image = `P3\n${this.canvas.width} ${this.canvas.height}\n255\n`;

    for (let p = 0; p < pixels.length; p += 3)
      image += `${pixels[p]} ${pixels[p + 1]} ${pixels[p + 2]}\n`;

    Events.dispatch('PPMImage::Download', { image }, worker);
  }
}
