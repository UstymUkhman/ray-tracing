import { Config } from '@/stage/Config';
import { toFixed } from '@/utils/Number';

export default class Tracer
{
  public createPPMImage (): string {
    const { width, height } = Config.Scene;
    let image = `P3\n${width} ${height}\n255\n`;

    for (let h = height - 1, lw = width - 1, lh = h; h > -1; h--)
    {
      console.info(`Progress: ${toFixed((1 - h / lh) * 100)}%`);

      for (let w = 0; w < width; w++)
      {
        const r = 255.999 * (w / lw) | 0;
        const g = 255.999 * (h / lh) | 0;
        const b = 255.999 * 0.25     | 0;

        image += `${r} ${g} ${b}\n`;
      }
    }

    return image;
  }
}
