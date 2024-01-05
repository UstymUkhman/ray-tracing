type RenderingContext = CanvasRenderingContext2D | WebGLRenderingContext | GPUCanvasContext;
type Options = CanvasRenderingContext2DSettings | WebGLContextAttributes | void;
import type { Context, SceneParams } from '@/stage/scene/types';

export default abstract class Canvas
{
  public abstract drawImage (image?: Uint8ClampedArray): void;
  protected readonly textureData: Uint8ClampedArray;
  protected readonly context: RenderingContext;
  protected readonly image: ImageData;

  protected readonly clearColor = 0.0;
  protected abstract clear (): void;
  public readonly height: number;
  public readonly width: number;

  public constructor(params: SceneParams) {
    const { canvas, context, offscreen } = params;

    this.width = canvas.width;
    this.height = canvas.height;

    this.context = canvas.getContext(
      this.getContextId(context),
      this.getOptions(context, offscreen)
    ) as RenderingContext;

    this.textureData = new Uint8ClampedArray(
      this.width * this.height * 4
    );

    this.image = new ImageData(
      this.textureData,
      this.width,
      this.height
    );
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
          alpha: true
        };

      default:
        return {
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: true,
          preserveDrawingBuffer: false,
          // Stopped working on Chromium if
          // `true` in offscreen canvas:
          desynchronized: !offscreen,
          premultipliedAlpha: true,
          antialias: true,
          stencil: false,
          depth: false,
          alpha: true
        };
    }
  }

  protected setImageData (pixels: Uint8ClampedArray): void {
    for (let p = 0, d = 0; p < pixels.length; p += 3, d += 4) {
      this.image.data[d    ] = pixels[p    ];
      this.image.data[d + 1] = pixels[p + 1];
      this.image.data[d + 2] = pixels[p + 2];
      this.image.data[d + 3] = 0xff;
    }
  }
}
