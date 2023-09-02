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
  private readonly world: World = new World();
  private readonly depth : u8  = Config.maxDepth;

  public constructor ()
  {
    const ratio = f32(Config.width) / f32(Config.height);

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
    const depth = this.depth;

    const width = Config.width;
    const height = Config.height;

    const objects =  this.world.objects;

    for (let p: u32 = 0, h = height, lw = width - 1, lh = h - 1; h--; )
    {
      if (Config.log) console.info(`Progress: ${toFixed((1 - h / lh) * 100)}%`);

      for (let w: u16 = 0, l = width; w < l; ++w, p += 3)
      {
        let x = pixels[p    ];
        let y = pixels[p + 1];
        let z = pixels[p + 2];

        const u = (w + Mathf.random()) / lw;
        const v = (h + Mathf.random()) / lh;

        this.camera.setRay(ray, u, v);

        const color = ray.getColor(ray, objects, depth);

        x += color.x;
        y += color.y;
        z += color.z;

        pixels[p    ] = x;
        pixels[p + 1] = y;
        pixels[p + 2] = z;
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
