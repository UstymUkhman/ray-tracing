import Config from './Config';

export default class Tracer
{
  private readonly width: f64 = Config.width;
  private readonly height: f64 = Config.height;

  // private readonly depth: u8 = Config.maxDepth;
  public readonly samples: u16 = Config.samples;

  public createPPMImage (
    pixels: Float32Array //,
    // samples: number,
    // start: number
  ): void {
    for (let p = 0, h = this.height, lw = this.width - 1, lh = h - 1; h--; )
    {
      for (let w = 0; w < this.width; w++, p += 3)
      {
        const x = w / lw;
        const y = h / lh;
        const z = 0.0;

        pixels[p    ] = f32(x * 255.999);
        pixels[p + 1] = f32(y * 255.999);
        pixels[p + 2] = f32(z * 255.999);
      }
    }
  }
}
