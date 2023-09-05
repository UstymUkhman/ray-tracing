import type { SceneParams } from '@/stage/scene/types';
import Tracer from '@/shaders/webgl2/Tracer.frag';
import { CanvasWebGL2 } from '@/stage/context';
import type { Canvas } from '@/stage/context';

export default class GPUScene
{
  private readonly canvas: Canvas;

  public constructor (params: SceneParams) {
    this.canvas = this.createCanvas(params);
    this.canvas.clear();
    this.canvas.drawImage();
  }

  private createCanvas (params: SceneParams): Canvas {
    switch (params.context) {
      // TBI
      // case 'WebGPU':
      //   return new CanvasWebGPU(params);

      default:
        return new CanvasWebGL2(params, Tracer);
    }
  }
}
