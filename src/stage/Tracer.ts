import { World } from '@/stage/hittables';
import { toFixed } from '@/utils/Number';
import { Config } from '@/stage/Config';
import { format } from '@/utils/Color';
import Vector3 from '@/utils/Vector3';
import Camera from '@/stage/Camera';
import Ray from '@/stage/Ray';

export default class Tracer
{
  private readonly world = new World();
  private readonly color = new Vector3();
  private readonly camera = new Camera();

  private readonly width = Config.Scene.width;
  private readonly height = Config.Scene.height;

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
        const u = w / lw;
        const v = h / lh;

        const ray = new Ray(
          this.camera.origin /*.clone */,
          this.camera.getDirection(u, v)
        );

        this.color.set(...ray.getColor(ray, this.world.objects).get());

        const { x, y, z } = format(this.color);

        pixels[p + 0] = x;
        pixels[p + 1] = y;
        pixels[p + 2] = z;
      }
    }

    return pixels;
  }
}
