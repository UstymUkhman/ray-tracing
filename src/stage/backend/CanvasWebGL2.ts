import type { SceneParams } from '@S/stage/types';
import Vertex from '@S/shaders/webgl2/main.vert?raw';
import Fragment from '@S/shaders/webgl2/main.frag?raw';
import CanvasWebGL from '@S/stage/backend/CanvasWebGL';

export default class CanvasWebGL2 extends CanvasWebGL
{
  public constructor(params: SceneParams) {
    super(params, 'webgl2', Fragment, Vertex);
  }
}
