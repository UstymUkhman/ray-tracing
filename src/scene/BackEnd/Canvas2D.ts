import Canvas from '@/scene/BackEnd/Canvas';
import { getHex, getRGB } from '@/utils/Color';

export default class Canvas2D extends Canvas
{
  private readonly image: ImageData;
  protected declare readonly context: CanvasRenderingContext2D;

  public constructor(canvas: HTMLCanvasElement) {
    super(canvas, '2d');
    this.context.imageSmoothingEnabled = true;
    this.context.imageSmoothingQuality = 'high';
    this.image = this.context.getImageData(0.0, 0.0, this.width, this.height);
  }

  public override draw (x: number, y: number, color: number): void {
    const { r, g, b } = getRGB(color, 255.0);
    const offset = this.getPixel(x, y);

    this.image.data.set([r, g, b, 255], offset);
    this.context.putImageData(this.image, 0.0, 0.0);
  }

  public override clear (): void {
    this.context.fillStyle = getHex(this.clearColor);
    this.context.clearRect(0.0, 0.0, this.width, this.height);
    this.context.fillRect(0.0, 0.0, this.width, this.height);
  }
}
