import Vertex from '@/shaders/webgl2/main.vert?raw';
import Fragment from '@/shaders/webgl2/main.frag?raw';
import CanvasWebGL from '@/stage/context/CanvasWebGL';
import type { SceneParams } from '@/stage/scene/types';

export default class CanvasWebGL2 extends CanvasWebGL
{
  private readonly cpuScene: boolean = true;

  public constructor(params: SceneParams, fragment = Fragment)
  {
    super(params, fragment, Vertex);
    this.cpuScene = params.tracer !== 'WebGL2';
  }

  public override drawImage (pixels: Uint8ClampedArray): void {
    this.cpuScene
      ? super.drawImage(pixels)
      : this.context.drawArrays(this.context.TRIANGLES, 0.0, 6.0);
  }
}
