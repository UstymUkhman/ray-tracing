type RenderingContext = CanvasRenderingContext2D | WebGLRenderingContext;
type Options = CanvasRenderingContext2DSettings | WebGLContextAttributes;

import type { BackEndContext } from '@/stage/types';

export default abstract class Canvas
{
  public abstract draw (x: number, y: number, color: number): void;
  protected readonly BYTES_PER_ELEMENT: number;
  protected readonly context: RenderingContext;
  public readonly backEnd: BackEndContext;

  protected readonly clearColor = 0.0;
  protected readonly height: number;
  protected readonly width: number;
  public abstract clear (): void;
  private readonly side: number;

  public constructor(
    canvas: HTMLCanvasElement,
    context: BackEndContext
  ) {
    this.backEnd = context;
    this.width = canvas.width;
    this.height = canvas.height;

    this.context = canvas.getContext(
      context, this.getOptions(context)
    ) as RenderingContext;

    this.BYTES_PER_ELEMENT = +(context === '2d') + 3.0;
    this.side = this.width * this.BYTES_PER_ELEMENT;
  }

  private getOptions (context: BackEndContext): Options {
    switch (context) {
      case '2d':
        return {
          // Should be `true` when "on screen":
          willReadFrequently: false,
          desynchronized: true,
          colorSpace: 'srgb',
          alpha: false
        };

      // TBI
      case 'webgpu':
        return {};

      default:
        return {
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: true,
          preserveDrawingBuffer: false,
          premultipliedAlpha: false,
          desynchronized: true,
          antialias: true,
          stencil: false,
          depth: false,
          alpha: false
        };
    }
  }

  protected getPixel (x: number, y: number): number {
    return y * this.side + x * this.BYTES_PER_ELEMENT;
  }
}
