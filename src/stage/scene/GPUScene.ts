import type { SceneParams } from '@/stage/scene/types';
import Tracer from '@/shaders/webgl2/Tracer.frag';
import Vertex from '@/shaders/webgl2/main.vert';
import { CanvasWebGL2 } from '@/stage/context';

export default class GPUScene
{
  private readonly canvas: CanvasWebGL2;

  public constructor (params: SceneParams) {
    this.canvas = this.createCanvas(params);
    this.canvas.createWorld();
    this.canvas.clear();
    this.canvas.drawImage();
  }

  private createCanvas (params: SceneParams): CanvasWebGL2 {
    switch (params.context) {
      // TBI
      // case 'WebGPU':
      //   return new CanvasWebGPU(params);

      default:
        return new CanvasWebGL2(
          params,
          Tracer,
          Vertex.replace(
            '#version 300 es',
            '#version 300 es\n#define CAMERA'
          )
        );
    }
  }
}
