import * as Config from '../src/stage/config';
import { floatToInt } from './utils/Color';
import { toFixed } from './utils/Number';
import { World } from './hittables';
import Camera from './Camera';
import Ray from './Ray';

class Tracer
{
  private readonly world: World = new World();
  private readonly camera: Camera = new Camera();
  private readonly depth: u8 = <u8>Config.maxDepth;

  public createPPMImage (pixels: StaticArray<f32>): StaticArray<f32> {
    const ray = new Ray();
    const depth = this.depth;

    const width = <u16>Config.width;
    const height = <u16>Config.height;

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
