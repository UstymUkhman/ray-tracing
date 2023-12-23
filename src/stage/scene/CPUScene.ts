import {
  Canvas2D,
  CanvasWebGL,
  CanvasWebGL2,
  CanvasWebGPU
} from '@/stage/context';

import { Events } from '@/stage/scene';
import * as Config from '@/stage/Config';
import type WebWorker from '@/utils/worker';

import { DELTA_UPDATE } from '@/utils/Number';
import type { Canvas } from '@/stage/context';
import type { Trace, Format, ImageData } from '@/stage/types';
import type { SceneParams, Context } from '@/stage/scene/types';

export default class CPUScene
{
  private sample = 0.0;
  private trace!: Trace;
  private format!: Format;

  private collect!: () => void;
  private readonly tracer: string;
  private readonly context: Context;

  private f32 = new Float32Array(
    Config.width * Config.height * 3
  );

  private u8 = new Uint8ClampedArray(
    Config.width * Config.height * 3
  );

  private readonly canvas: Canvas;
  private readonly worker?: WebWorker;
  private readonly samples = Config.samples;

  public constructor (params: SceneParams) {
    this.canvas = this.createCanvas(params);
    this.tracer = this.getTracer(params);
    this.context = params.context;

    ((this.worker = params.worker))
      ? this.createWorkerEvents()
      : this.loadTracer();
  }

  private createCanvas (params: SceneParams): Canvas {
    switch (params.context) {
      case 'WebGPU':
        return new CanvasWebGPU(
          params,
          params.worker
            ? this.onCreateTracer.bind(this)
            : this.onLoadTracer.bind(this)
        );

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
    this.worker?.add('Create::Tracer', this.onCreateTracer.bind(this));
  }

  private onCreateTracer (): void {
    if (this.canvasContextReady) {
      this.worker?.add('Create::PPMImage', this.showPPMImage.bind(this));
      Events.dispatch(`${this.tracer}::Start`);
      this.createPPMImage();
    }
  }

  private loadTracer (): void {
    import(this.tracer === 'AssemblyScript'
      ? '../../../build/release.js'
      : '../Tracer.ts'
    ).then(({ trace, format, collect }) => {
      this.collect = collect;
      this.format = format;
      this.trace = trace;
      this.onLoadTracer();
    });
  }

  private onLoadTracer (): void {
    if (this.canvasContextReady) {
      Events.dispatch(`${this.tracer}::Start`, null, true);
      this.createPPMImage();
    }
  }

  private createPPMImage (download = false): void {
    if (this.worker) return this.worker.post('Create::PPMImage', { download });

    if (this.tracer === 'AssemblyScript') {
      this.f32 = Float32Array.from(
        this.trace(this.f32)
      );

      this.u8 = Uint8ClampedArray.from(
        this.format(this.f32, this.u8, ++this.sample)
      );

      !(this.sample % 1e2) && this.collect();
    }

    else this.format(this.trace(this.f32), this.u8, ++this.sample);
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

  private get canvasContextReady (): boolean {
    return this.context === 'WebGPU' ? (this.canvas as CanvasWebGPU).ready : true;
  }
}
