import { Config } from '@/stage/Config';
import { toFixed } from '@/utils/Number';

export default class Tracer
{
  public createPPMImage (): Uint8ClampedArray
  {
    const { width, height } = Config.Scene;
    const pixels = new Uint8ClampedArray(width * height * 3);

    for (let p = 0, h = height - 1, lw = width - 1, lh = h; h > -1; h--)
    {
      console.info(`Progress: ${toFixed((1 - h / lh) * 100)}%`);

      for (let w = 0; w < width; w++, p += 3)
      {
        const r = 255.999 * (w / lw) | 0;
        const g = 255.999 * (h / lh) | 0;
        const b = 255.999 * 0.25     | 0;

        pixels[p + 0] = r;
        pixels[p + 1] = g;
        pixels[p + 2] = b;
      }
    }

    return pixels;
  }
}
