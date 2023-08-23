import {
  Canvas2D,
  CanvasWebGL,
  CanvasWebGL2
  // CanvasWebGPU,
} from '@S/stage/backend';

import Config from '@S/stage/Config';
import Tracer from '@S/stage/Tracer';
import Events from '@S/stage/Events';
import Vector3 from '@S/utils/Vector3';
import type Worker from '@S/utils/worker';

import { floatToInt } from '@S/utils/Color';
import type { Canvas } from '@S/stage/backend';
import { DELTA_UPDATE } from '@S/utils/Number';
import type { ImageData } from '@S/stage/types';
import type { SceneParams } from '@S/stage/types';

export default class Scene
{
  private sample = 0.0;

  private readonly canvas!: Canvas;
  private readonly tracer?: Tracer;
  private readonly worker?: Worker;

  private readonly start = Date.now();
  private readonly color = new Vector3();
  private readonly samples = Config.samples;

  private readonly f32 = new Float32Array(
    Config.width * Config.height * 3
  );

  private readonly uint8 = new Uint8ClampedArray(
    Config.width * Config.height * 3
  );

  public constructor (params: SceneParams) {
    this.canvas = this.createCanvas(params);

    !(this.worker = params.worker)
      ? this.tracer = new Tracer()
      : this.createWorkerEvents();

    this.canvas.clear();
    this.createPPMImage();
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

  private createWorkerEvents (): void {
    this.worker?.add('Create::PPMImage', this.showPPMImage.bind(this));
  }

  private createPPMImage (download = false): void {
    if (this.worker) return this.worker.post('Create::PPMImage', { download });

    this.tracer?.createPPMImage(this.f32, this.start, ++this.sample);
    floatToInt(this.f32, this.uint8, this.color, this.sample);

    this.showPPMImage({ pixels: this.uint8, sample: this.sample, download }, true);
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
