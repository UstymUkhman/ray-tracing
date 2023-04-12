import {
  Canvas2D,
  CanvasWebGL,
  CanvasWebGL2,
  // CanvasWebGPU,
  type Canvas
} from '@/stage/backend';

import Tracer from '@/stage/Tracer';
import Events from '@/stage/Events';
import type Worker from '@/utils/worker';
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
    this.worker?.add('Create::PPMImage', this.downloadPPMImage.bind(this));
  }

  private createPPMImage (download = false): void {
    const image = this.tracer?.createPPMImage();
    this.worker?.post('Create::PPMImage', { download });
    download && image && Events.dispatch('Download::PPMImage', { image }, true);
  }

  private downloadPPMImage (data: unknown): void {
    const { download, image } = data as { download: boolean, image: string };
    download && Events.dispatch('Download::PPMImage', { image });
  }
}
