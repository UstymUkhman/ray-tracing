type RenderingContext = CanvasRenderingContext2D | WebGLRenderingContext;
type Options = CanvasRenderingContext2DSettings | WebGLContextAttributes;

import type { BackEndContext } from '@/stage/types';
import type { SceneParams } from '@/stage/types';

export default abstract class Canvas
{
  public abstract drawImage (image: Uint8ClampedArray): void;
  protected readonly context: RenderingContext;
  public readonly backEnd: BackEndContext;

  protected readonly clearColor = 0.0;
  protected readonly channels: number;
  public abstract clear (): void;

  public readonly height: number;
  public readonly width: number;
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
          // Stopped working on Chromium if
          // `true` in offscreen canvas:
          desynchronized: !offscreen,
          premultipliedAlpha: false,
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
