type RenderingContext = CanvasRenderingContext2D | WebGLRenderingContext;
type Options = CanvasRenderingContext2DSettings | WebGLContextAttributes;

import type { BackEndContext } from '@/scene/types';

export default abstract class Canvas
{
  public abstract draw (x: number, y: number, color: number): void;
  protected readonly context: RenderingContext;
  public readonly backEnd: BackEndContext;

  protected readonly clearColor = 0.0;
  protected readonly height: number;
  protected readonly width: number;
  public abstract clear (): void;

  public constructor(
    canvas: HTMLCanvasElement,
    context: BackEndContext
  ) {
    this.backEnd = context;
    this.width = canvas.width;
    this.height = canvas.height;

    const options = this.getOptions(context);
    this.context = canvas.getContext(context, options) as RenderingContext;
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
}
