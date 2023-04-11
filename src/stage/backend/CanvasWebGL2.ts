import Vertex from '@/shaders/webgl2/main.vert?raw';
import Fragment from '@/shaders/webgl2/main.frag?raw';
import CanvasWebGL from '@/stage/backend/CanvasWebGL';

export default class CanvasWebGL2 extends CanvasWebGL
{
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas, 'webgl2', Fragment, Vertex);
  }
}
