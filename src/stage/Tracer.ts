import { World } from '@/stage/hittables';
import { toFixed } from '@/utils/Number';
import Viewport from '@/utils/Viewport';
import { format } from '@/utils/Color';
import Vector3 from '@/utils/Vector3';
import Camera from '@/stage/Camera';
import Config from '@/stage/Config';
import Ray from '@/stage/Ray';

export default class Tracer
{
  private last = Date.now();

  private readonly camera: Camera;
  private readonly world = new World();
  private readonly color = new Vector3();

  private readonly width  = Config.width;
  private readonly height = Config.height;
  private readonly depth  = Config.maxDepth;

  private readonly samples: number = Config.samples;

  public constructor ()
  {
    this.camera = new Camera(
      new Vector3(13.0, 2.0, 3.0),
      new Vector3(0.0, 0.0, 0.0),
      new Vector3(0.0, 1.0, 0.0),
      20.0,
      Viewport.size.ratio,
      0.1,
      10.0
    );
  }

  public createPPMImage (
    pixels: Uint8ClampedArray,
    start: number,
    samples = this.samples
  ): void {
    const ray = new Ray();
    const last = this.samples === samples;

    for (let p = 0, h = this.height - 1, lw = this.width - 1, lh = h; h > -1; h--)
    {
      last && console.info(`Progress: ${toFixed((1 - h / lh) * 100)}%`);

      for (let w = 0; w < this.width; w++, p += 3)
      {
        this.color.reset();

        for (let s = 0; s < samples; s++)
        {
          const u = (w + Math.random()) / lw;
          const v = (h + Math.random()) / lh;

          this.camera.setRay(ray, u, v);

          this.color.add(ray.getColor(ray, this.world.objects, this.depth));
        }

        const { x, y, z } = format(this.color, samples);

        pixels[p + 0] = x;
        pixels[p + 1] = y;
        pixels[p + 2] = z;
      }
    }

    const now = Date.now();

    const s = `${(last && 'Total ') || ''}Samples: ${samples}`;
    const tt = `Total Time: ${toFixed((now - start) / 1e3)} sec.`;
    const lrt = `Last Render Time: ${toFixed((now - this.last) / 1e3)} sec.`;

    console.info(`${s} | ${lrt} | ${tt}`);
    this.last = now;
  }
}
