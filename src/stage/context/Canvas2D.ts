import { getHex } from '@/utils/Color';
import Canvas from '@/stage/context/Canvas';
import type { SceneParams } from '@/stage/scene/types';

export default class Canvas2D extends Canvas
{
  protected declare readonly context: CanvasRenderingContext2D;
  protected declare readonly image: ImageData;

  public constructor(params: SceneParams)
  {
    super(params);
    this.clear();

    this.context.imageSmoothingEnabled = true;
    this.context.imageSmoothingQuality = 'high';
    this.image = this.context.getImageData(0.0, 0.0, this.width, this.height);
  }

  public override drawImage (pixels: Uint8ClampedArray): void
  {
    this.setImageData(pixels);
    this.context.putImageData(this.image, 0.0, 0.0);
  }

  protected override clear (): void
  {
    this.context.fillStyle = getHex(this.clearColor);
    this.context.clearRect(0.0, 0.0, this.width, this.height);
    this.context.fillRect(0.0, 0.0, this.width, this.height);
  }
}
