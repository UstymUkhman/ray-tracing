type RenderingContext = CanvasRenderingContext2D | WebGLRenderingContext | GPUCanvasContext;
type Options = CanvasRenderingContext2DSettings | WebGLContextAttributes | void;
import type { Context, SceneParams } from '@/stage/scene/types';

export default abstract class Canvas
{
  public abstract drawImage (image?: Uint8ClampedArray): void;
  protected readonly context: RenderingContext;
  protected readonly clearColor = 0.0;
  protected readonly channels: number;

  public abstract clear (): void;
  public readonly height: number;
  public readonly width: number;
  private readonly side: number;

  public constructor(params: SceneParams) {
    const { canvas, context, offscreen } = params;
    this.channels = +(context === 'Canvas2D') + 3.0;

    this.context = canvas.getContext(
      this.getContextId(context),
      this.getOptions(context, offscreen)
    ) as RenderingContext;

    this.width = canvas.width;
    this.height = canvas.height;
    this.side = this.width * this.channels;
  }

  private getContextId (context: Context): OffscreenRenderingContextId {
    switch (context) {
      case 'WebGPU': return 'webgpu';
      case 'WebGL2': return 'webgl2';
      case 'WebGL':  return 'webgl';
      default:       return '2d';

    }
  }

  private getOptions (context: Context, offscreen = false): Options {
    switch (context) {
      case 'WebGPU': return;

      case 'Canvas2D':
        return {
          willReadFrequently: !offscreen,
          desynchronized: offscreen,
          colorSpace: 'srgb',
          alpha: false
        };

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
