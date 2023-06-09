import { getHex } from '@/utils/Color';
import Canvas from '@/stage/backend/Canvas';
import type { SceneParams } from '@/stage/types';

export default class Canvas2D extends Canvas
{
  private readonly image: ImageData;
  protected declare readonly context: CanvasRenderingContext2D;

  public constructor(params: SceneParams) {
    super(params, '2d');
    this.context.imageSmoothingEnabled = true;
    this.context.imageSmoothingQuality = 'high';
    this.image = this.context.getImageData(0.0, 0.0, this.width, this.height);
  }

  public override drawImage (pixels: Uint8ClampedArray): void {
    for (let p = 0, d = 0; p < pixels.length; p += 3, d += 4)
    {
      this.image.data[d + 0] = pixels[p + 0];
      this.image.data[d + 1] = pixels[p + 1];
      this.image.data[d + 2] = pixels[p + 2];
      this.image.data[d + 3] = 255;
    }

    this.context.putImageData(this.image, 0.0, 0.0);
  }

  public override clear (): void {
    this.context.fillStyle = getHex(this.clearColor);
    this.context.clearRect(0.0, 0.0, this.width, this.height);
    this.context.fillRect(0.0, 0.0, this.width, this.height);
  }
}
