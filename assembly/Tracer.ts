import { floatToInt } from './utils/Color';
import { toFixed } from './utils/Number';
import Vector3 from './utils/Vector3';
import { World } from './hittables';
import Camera from './Camera';
import Config from './Config';
import Ray from './Ray';

class Tracer
{
  private readonly camera: Camera;
  private last: i32 = i32(Date.now());

  private readonly width: f64 = Config.width;
  private readonly height: f64 = Config.height;

  private readonly depth: u8 = Config.maxDepth;
  public readonly samples: u16 = Config.samples;

  private readonly color: Vector3 = new Vector3();
  private readonly world: World = new World();

  public constructor ()
  {
    const ratio = Config.width / Config.height;

    this.camera = new Camera(
      new Vector3(/* 13.0, 2.0, 3.0 */),
      new Vector3(0.0, 0.0, 0.0),
      new Vector3(0.0, 1.0, 0.0),
      20.0,
      ratio //,
      // 0.1,
      // 10.0
    );
  }

  public createPPMImage (
    pixels: Float32Array,
    samples: u16,
    start: i32
  ): void {
    const ray = new Ray();
    const last = this.samples === samples;

    for (let p = 0, h = this.height, lw = this.width - 1, lh = h - 1; h--; )
    {
      if (last) console.info(`Progress: ${toFixed((1 - h / lh) * 100)}%`);

      for (let w = 0; w < this.width; w++, p += 3)
      {
        /// Temp:
        this.color.reset();

        for (let s: u16 = 0; s < samples; s++)
        {
          const u = (w + Math.random()) / lw;
          const v = (h + Math.random()) / lh;

          this.camera.setRay(ray, u, v);

          this.color.add(
            ray.getColor(ray, this.world.objects, this.depth)
          );
        }
        ///

        /*
          const u = w / lw;
          const v = h / lh;

          this.camera.setRay(ray, u, v);

          const color = ray.getColor(ray, this.world.objects);
        */

        pixels[p    ] = this.color.xf32;
        pixels[p + 1] = this.color.yf32;
        pixels[p + 2] = this.color.zf32;
      }
    }

    const now = i32(Date.now());

    const s = `${last ? 'Total ' : ''}Samples: ${samples}`;
    const tt = `Total Time: ${toFixed(f64(now - start) / 1e3)} sec.`;
    const lrt = `Last Render Time: ${toFixed(f64(now - this.last) / 1e3)} sec.`;

    console.info(`${s} | ${lrt} | ${tt}`);
    this.last = now;
  }
}

const tracer = new Tracer();

export function trace (
  start: i32,
  pixels: Float32Array,
  colors: Uint8ClampedArray,
  sample: u16 = tracer.samples
): Uint8ClampedArray {
  sample = tracer.samples;
  const color = new Vector3();

  tracer.createPPMImage(pixels, sample, start);
  return floatToInt(colors, pixels, color, sample);
}
