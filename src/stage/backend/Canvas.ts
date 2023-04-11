type RenderingContext = CanvasRenderingContext2D | WebGLRenderingContext;
type Options = CanvasRenderingContext2DSettings | WebGLContextAttributes;

import type { BackEndContext } from '@/stage/types';
import type { SceneParams } from '@/stage/types';

export default abstract class Canvas
{
  public abstract draw (x: number, y: number, color: number): void;
  protected readonly context: RenderingContext;
  public readonly backEnd: BackEndContext;

  protected readonly clearColor = 0.0;
  protected readonly channels: number;
  protected readonly height: number;
  protected readonly width: number;

  public abstract clear (): void;
  private readonly side: number;

  public constructor(
    params: SceneParams,
    context: BackEndContext
  ) {
    this.backEnd = context;
    const alpha = context === '2d';
    const { canvas, offscreen } = params;

    this.context = canvas.getContext(
      context, this.getOptions(context, offscreen)
    ) as RenderingContext;

    this.width = canvas.width;
    this.height = canvas.height;

    this.channels = +alpha + 3.0;
    this.side = this.width * this.channels;
  }

  private getOptions (context: BackEndContext, offscreen = false): Options {
    switch (context) {
      case '2d':
        return {
          willReadFrequently: !offscreen,
          desynchronized: offscreen,
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
    return y * this.side + x * this.channels;
  }
}
