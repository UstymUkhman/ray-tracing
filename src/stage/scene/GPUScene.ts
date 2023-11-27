import type { GPUCanvas, SceneParams } from '@/stage/scene/types';
import { CanvasWebGL2, CanvasWebGPU } from '@/stage/context';
import Tracer from '@/shaders/webgl2/Tracer.frag';
import { Events } from '@/stage/scene';

export default class GPUScene
{
  private readonly canvas: GPUCanvas;

  public constructor (params: SceneParams) {
    Events.dispatch(`${params.tracer}::Start`);
    this.canvas = this.createCanvas(params);
    this.canvas.drawImage();
  }

  private createCanvas (params: SceneParams): GPUCanvas {
    switch (params.context) {
      case 'WebGPU':
        return new CanvasWebGPU(params);

      default:
        return new CanvasWebGL2(params, Tracer);
    }
  }
}
