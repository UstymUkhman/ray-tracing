import { World } from '@/stage/hittables';
import { toFixed } from '@/utils/Number';
import { Config } from '@/stage/Config';
import Viewport from '@/utils/Viewport';
import { format } from '@/utils/Color';
import Vector3 from '@/utils/Vector3';
import Camera from '@/stage/Camera';
import Ray from '@/stage/Ray';

export default class Tracer
{
  private readonly world = new World();
  private readonly color = new Vector3();

  private readonly width = Config.Scene.width;
  private readonly height = Config.Scene.height;

  private readonly depth = Config.Scene.maxDepth;
  private readonly samples = Config.Scene.samples;

  private readonly camera = new Camera(
    new Vector3(-2.0, 2.0, 1.0),
    new Vector3(0.0, 0.0, -1.0),
    new Vector3(0.0, 1.0, 0.0),
    20.0,
    Viewport.size.ratio
  );

  public createPPMImage (): Uint8ClampedArray
  {
    const pixels = new Uint8ClampedArray(
      this.width * this.height * 3
    );

    const start = Date.now();
    const ray = new Ray();

    for (let p = 0, h = this.height - 1, lw = this.width - 1, lh = h; h > -1; h--)
    {
      console.info(`Progress: ${toFixed((1 - h / lh) * 100)}%`);

      for (let w = 0; w < this.width; w++, p += 3)
      {
        this.color.reset();

        for (let s = 0; s < this.samples; s++)
        {
          const u = (w + Math.random()) / lw;
          const v = (h + Math.random()) / lh;

          this.camera.setRay(ray, u, v);

          this.color.add(ray.getColor(ray, this.world.objects, this.depth));
        }

        const { x, y, z } = format(this.color, this.samples);

        pixels[p + 0] = x;
        pixels[p + 1] = y;
        pixels[p + 2] = z;
      }
    }

    console.info(`Time: ${toFixed((Date.now() - start) / 1e3)} sec.`);

    return pixels;
  }
}
