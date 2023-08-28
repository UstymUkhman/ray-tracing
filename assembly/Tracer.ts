import { floatToInt } from './utils/Color';
import Vector3 from './utils/Vector3';
import { Sphere } from './hittables';
import Camera from './Camera';
import Config from './Config';
import Ray from './Ray';

class Tracer
{
  private readonly camera: Camera;

  private readonly width: f64 = Config.width;
  private readonly height: f64 = Config.height;

  // private readonly depth: u8 = Config.maxDepth;
  public readonly samples: u16 = Config.samples;

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
    pixels: Float32Array //,
    // samples: u16,
    // start: f64
  ): void {
    // Image:
    const ray = new Ray();

    const sphere = new Sphere(0.5, new Vector3(0.0, 0.0, -1.0));

    // Render:
    for (let p = 0, h = this.height, lw = this.width - 1, lh = h - 1; h--; )
    {
      for (let w = 0; w < this.width; w++, p += 3)
      {
        const u = w / lw;
        const v = h / lh;

        this.camera.setRay(ray, u, v);

        const color = ray.getColor(ray, sphere);

        pixels[p    ] = f32(color.x * 255.999);
        pixels[p + 1] = f32(color.y * 255.999);
        pixels[p + 2] = f32(color.z * 255.999);
      }
    }
  }
}

const tracer = new Tracer();

export function trace (
  start: f64,
  pixels: Float32Array,
  colors: Uint8ClampedArray //,
  // sample: u16 = tracer.samples
): Uint8ClampedArray {
  const color = new Vector3();

  tracer.createPPMImage(pixels);
  return floatToInt(colors, pixels, color, /* sample */ 1);
}
