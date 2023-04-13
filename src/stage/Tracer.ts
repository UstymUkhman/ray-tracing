import Vector3 from '@/utils/Vector3';
import { format } from '@/utils/Color';
import { Config } from '@/stage/Config';
import { toFixed } from '@/utils/Number';

export default class Tracer
{
  public createPPMImage (): Uint8ClampedArray
  {
    const color = new Vector3();
    const { width, height } = Config.Scene;
    const pixels = new Uint8ClampedArray(width * height * 3);

    for (let p = 0, h = height - 1, lw = width - 1, lh = h; h > -1; h--)
    {
      console.info(`Progress: ${toFixed((1 - h / lh) * 100)}%`);

      for (let w = 0; w < width; w++, p += 3)
      {
        color.set((w / lw), (h / lh), 0.25);
        const { x, y, z } = format(color);

        pixels[p + 0] = x;
        pixels[p + 1] = y;
        pixels[p + 2] = z;
      }
    }

    return pixels;
  }
}
