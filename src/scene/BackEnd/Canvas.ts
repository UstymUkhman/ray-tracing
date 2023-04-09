type Options = CanvasRenderingContext2DSettings | WebGLContextAttributes;
type RenderingContext = CanvasRenderingContext2D | WebGLRenderingContext;

export default abstract class Canvas
{
  public abstract clear (): void;
  public abstract draw (x: number, y: number, color: number): void;
  protected readonly context: CanvasRenderingContext2D | WebGLRenderingContext;

  protected readonly clearColor = 0.0;
  protected readonly height: number;
  protected readonly width: number;

  public constructor(
    canvas: HTMLCanvasElement,
    context: 'webgl2' | '2d'
  ) {
    this.width = canvas.width;
    this.height = canvas.height;

    const options = this.getOptions(context);
    this.context = canvas.getContext(context, options) as RenderingContext;
  }

  private getOptions (context: 'webgl2' | '2d'): Options {
    return context === 'webgl2'
      ? {
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: true,
        preserveDrawingBuffer: false,
        premultipliedAlpha: false,
        desynchronized: true,
        antialias: true,
        stencil: false,
        depth: false,
        alpha: false
      }
      : {
        willReadFrequently: true,
        desynchronized: false,
        colorSpace: 'srgb',
        alpha: false
      };
  }
}
