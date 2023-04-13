import {
  Canvas2D,
  CanvasWebGL,
  CanvasWebGL2
  // CanvasWebGPU,
} from '@/stage/backend';

import Tracer from '@/stage/Tracer';
import Events from '@/stage/Events';
import type Worker from '@/utils/worker';
import type { Canvas } from '@/stage/backend';
import type { SceneParams } from '@/stage/types';

export default class Scene
{
  private readonly canvas!: Canvas;
  private readonly tracer?: Tracer;
  private readonly worker?: Worker;

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
    this.worker
      ? this.worker.post('Create::PPMImage', { download })
      : this.showPPMImage({ download, pixels: this.tracer?.createPPMImage() }, true);
  }

  private showPPMImage (data: unknown, worker?: boolean): void {
    const { download, pixels } = data as { download: boolean, pixels: Uint8ClampedArray };
    download && this.downloadPPMImage(pixels, worker);
    this.canvas.drawImage(pixels);
  }

  private downloadPPMImage (pixels: Uint8ClampedArray, worker?: boolean): void {
    let image = `P3\n${this.canvas.width} ${this.canvas.height}\n255\n`;

    for (let p = 0; p < pixels.length; p += 3)
      image += `${pixels[p]} ${pixels[p + 1]} ${pixels[p + 2]}\n`;

    Events.dispatch('Download::PPMImage', { image }, worker);
  }
}
