import Canvas2D from '@/scene/BackEnd/Canvas2D';
import type Canvas from '@/scene/BackEnd/Canvas';
import type { SceneParams } from '@/scene/types';
import CanvasWebGL from '@/scene/BackEnd/CanvasWebGL';

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

      // case 'webgl2':
      //   return new CanvasWebGL2(params.canvas);

      case 'webgl':
        return new CanvasWebGL(params.canvas);

      default:
        return new Canvas2D(params.canvas);
    }
  }
}
