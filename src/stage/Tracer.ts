import { toFixed } from '@/utils/Number';
import { Config } from '@/stage/Config';
import { format } from '@/utils/Color';
import Vector3 from '@/utils/Vector3';
import Camera from '@/stage/Camera';
import Ray from '@/stage/Ray';

export default class Tracer
{
  public createPPMImage (): Uint8ClampedArray
  {
    const color = new Vector3();
    const camera = new Camera();

    const { width, height } = Config.Scene;
    const pixels = new Uint8ClampedArray(width * height * 3);

    for (let p = 0, h = height - 1, lw = width - 1, lh = h; h > -1; h--)
    {
      console.info(`Progress: ${toFixed((1 - h / lh) * 100)}%`);

      for (let w = 0; w < width; w++, p += 3)
      {
        const u = w / lw;
        const v = h / lh;

        const ray = new Ray(
          camera.origin /*.clone */,
          camera.getDirection(u, v)
        );

        color.set(...ray.color.get());

        const { x, y, z } = format(color);

        pixels[p + 0] = x;
        pixels[p + 1] = y;
        pixels[p + 2] = z;
      }
    }

    return pixels;
  }
}
