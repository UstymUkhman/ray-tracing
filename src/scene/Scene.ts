import Canvas2D from '@/scene/BackEnd/Canvas2D';
import type Canvas from '@/scene/BackEnd/Canvas';
import type { SceneParams } from '@/scene/types';
// import CanvasWebGL from '@/scene/BackEnd/CanvasWebGL';

export default class Scene
{
  private readonly canvas: Canvas;

  public constructor (params: SceneParams) {
    // this.canvas = new CanvasWebGL(params.canvas);
    this.canvas = new Canvas2D(params.canvas);

    this.canvas.clear();

    this.canvas.draw(128, 128, 0xffffff);
  }
}
