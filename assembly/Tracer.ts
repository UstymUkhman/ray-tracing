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

  private readonly width : f64 = Config.width;
  private readonly height: f64 = Config.height;
  private readonly depth : u8  = Config.maxDepth;

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
    const depth = this.depth;
    const objects =  this.world.objects;

    for (let p = 0, h = this.height, lw = this.width - 1, lh = h - 1; h--; )
    {
      if (Config.log) console.info(`Progress: ${toFixed((1 - h / lh) * 100)}%`);

      for (let w = 0, l = this.width; w < l; ++w, p += 3)
      {
        let x = pixels[p    ];
        let y = pixels[p + 1];
        let z = pixels[p + 2];

        const u = (w + Math.random()) / lw;
        const v = (h + Math.random()) / lh;

        this.camera.setRay(ray, u, v);

        const color = ray.getColor(ray, objects, depth);

        x += <f32>color.x;
        y += <f32>color.y;
        z += <f32>color.z;

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
