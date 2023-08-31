import { floatToInt } from './utils/Color';
import { toFixed } from './utils/Number';
import Vector3 from './utils/Vector3';
import { World } from './hittables';
import Camera from './Camera';
import Config from './Config';
import Ray from './Ray';

class Tracer
{
  private readonly width: f64 = Config.width;
  private readonly height: f64 = Config.height;
  private readonly depth: u8 = Config.maxDepth;

  private readonly color: Vector3 = new Vector3();
  private readonly world: World = new World();
  private readonly camera: Camera;

  public constructor ()
  {
    const ratio = Config.width / Config.height;

    this.camera = new Camera(
      new Vector3(13.0, 2.0, 3.0),
      new Vector3(0.0, 0.0, 0.0),
      new Vector3(0.0, 1.0, 0.0),
      20.0,
      ratio,
      0.1,
      10.0
    );
  }

  public createPPMImage (pixels: StaticArray<f32>): StaticArray<f32> {
    const ray = new Ray();

    for (let p = 0, h = this.height, lw = this.width - 1, lh = h - 1; h--; )
    {
      if (Config.log) console.info(`Progress: ${toFixed((1 - h / lh) * 100)}%`);

      for (let w = 0, l = this.width; w < l; ++w, p += 3)
      {
        this.color.set(
          unchecked(pixels[p    ]),
          unchecked(pixels[p + 1]),
          unchecked(pixels[p + 2])
        );

        const u = (w + Math.random()) / lw;
        const v = (h + Math.random()) / lh;

        this.camera.setRay(ray, u, v);

        this.color.add(ray.getColor(ray, this.world.objects, this.depth));

        unchecked(pixels[p    ] = this.color.xf32);
        unchecked(pixels[p + 1] = this.color.yf32);
        unchecked(pixels[p + 2] = this.color.zf32);
      }
    }

    return pixels;
  }
}

const tracer = new Tracer();

export function trace (pixels: StaticArray<f32>): StaticArray<f32> {
  return tracer.createPPMImage(pixels);
}

export function format (
  pixels: StaticArray<f32>,
  colors: StaticArray<u8>,
  samples: u16
): StaticArray<u8> {
  return floatToInt(pixels, colors, samples);
}
