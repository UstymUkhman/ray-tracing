import { floatToInt } from '@/utils/Color';
import { World } from '@/stage/hittables';
import * as Config from '@/stage/Config';
import { toFixed } from '@/utils/Number';
import Vector3 from '@/utils/Vector3';
import Camera from '@/stage/Camera';
import Ray from '@/stage/Ray';

class Tracer
{
  private readonly camera: Camera;
  private readonly world = new World();
  private readonly color = new Vector3();

  private readonly width  = Config.width;
  private readonly height = Config.height;
  private readonly depth  = Config.maxDepth;

  public constructor ()
  {
    const ratio = this.width / this.height;

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

  public createPPMImage (pixels: Float32Array): Float32Array {
    const ray = new Ray();

    for (let p = 0, h = this.height, lw = this.width - 1, lh = h - 1; h--; )
    {
      Config.log && console.info(
        `%cProgress: ${toFixed((1 - h / lh) * 100)}%`,
        'background: #3178c6; padding: 2px 5px; color: #FFF;'
      );

      for (let w = 0; w < this.width; w++, p += 3)
      {
        this.color.set(pixels[p], pixels[p + 1], pixels[p + 2]);

        const u = (w + Math.random()) / lw;
        const v = (h + Math.random()) / lh;

        this.camera.setRay(ray, u, v);

        this.color.add(ray.getColor(ray, this.world.objects, this.depth));

        pixels[p] = this.color.x; pixels[p + 1] = this.color.y; pixels[p + 2] = this.color.z;
      }
    }

    return pixels;
  }
}

const tracer = new Tracer();

export function trace (pixels: Float32Array): Float32Array {
  return tracer.createPPMImage(pixels);
}

export function format (
  f32: ArrayLike<number>,
  u8: Uint8ClampedArray,
  samples: number
): Uint8ClampedArray {
  return floatToInt(f32, u8, samples);
}
