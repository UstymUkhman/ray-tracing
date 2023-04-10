import type { SceneParams } from '@/scene/types';
import type Canvas from '@/scene/BackEnd/Canvas';
import {
  Canvas2D,
  CanvasWebGL,
  CanvasWebGL2
  // CanvasWebGPU,
} from '@/scene/BackEnd';

export default class Scene
{
  private readonly canvas!: Canvas;

  public constructor (params: SceneParams) {
    this.canvas = this.createCanvas(params);

    this.canvas.clear();

    this.canvas.draw(128, 128, 0xffffff);
  }

  private createCanvas (params: SceneParams): Canvas {
    switch (params.backEnd) {
      // TBI
      // case 'webgpu':
      //   return new CanvasWebGPU(params.canvas);

      case 'webgl2':
        return new CanvasWebGL2(params.canvas);

      case 'webgl':
        return new CanvasWebGL(params.canvas);

      default:
        return new Canvas2D(params.canvas);
    }
  }
}
