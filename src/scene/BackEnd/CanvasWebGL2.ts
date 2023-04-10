import Vertex from '@/shaders/webgl2/main.vert';
import Fragment from '@/shaders/webgl2/main.frag';
import CanvasWebGL from '@/scene/BackEnd/CanvasWebGL';

export default class CanvasWebGL2 extends CanvasWebGL
{
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas, 'webgl2', Fragment, Vertex);
  }
}
