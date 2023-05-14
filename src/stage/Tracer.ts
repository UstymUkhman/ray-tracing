import { World } from '@/stage/hittables';
import { toFixed } from '@/utils/Number';
import { Config } from '@/stage/Config';
import { format } from '@/utils/Color';
import Vector3 from '@/utils/Vector3';
import Camera from '@/stage/Camera';

export default class Tracer
{
  private readonly world = new World();
  private readonly color = new Vector3();
  private readonly camera = new Camera();

  private readonly width = Config.Scene.width;
  private readonly height = Config.Scene.height;
  private readonly samples = Config.Scene.samples;

  public createPPMImage (): Uint8ClampedArray
  {
    const pixels = new Uint8ClampedArray(
      this.width * this.height * 3
    );

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

          const ray = this.camera.getRay(u, v);

          this.color.add(ray.getColor(ray, this.world.objects));
        }

        const { x, y, z } = format(this.color, this.samples);

        pixels[p + 0] = x;
        pixels[p + 1] = y;
        pixels[p + 2] = z;
      }
    }

    return pixels;
  }
}
