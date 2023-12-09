import type { GPUCanvas, SceneParams } from '@/stage/scene/types';
import { CanvasWebGL2, CanvasWebGPU } from '@/stage/context';
import WebGPUTracer from '@/shaders/webgpu/Tracer.wgsl';
import WebGLTracer from '@/shaders/webgl2/Tracer.frag';
import { Events } from '@/stage/scene';

export default class GPUScene
{
  private readonly canvas: GPUCanvas;

  public constructor (params: SceneParams) {
    Events.dispatch(`${params.tracer}::Start`);
    this.canvas = this.createCanvas(params);
  }

  private createCanvas (params: SceneParams): GPUCanvas {
    switch (params.context) {
      case 'WebGPU':
        return new CanvasWebGPU(
          params,
          this.onContextReady.bind(this),
          WebGPUTracer
        );

      default: {
        const canvas = new CanvasWebGL2(params, WebGLTracer);
        canvas.drawImage();
        return canvas;
      }
    }
  }

  private onContextReady (): void {
    this.canvas.drawImage();
  }
}
