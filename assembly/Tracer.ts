import { floatToInt } from './utils/Color';
import Vector3 from './utils/Vector3';
import Config from './Config';
import Ray from './Ray';

class Tracer
{
  private readonly width: f64 = Config.width;
  private readonly height: f64 = Config.height;

  // private readonly depth: u8 = Config.maxDepth;
  public readonly samples: u16 = Config.samples;

  public createPPMImage (
    pixels: Float32Array //,
    // samples: number,
    // start: number
  ): void {
    // Image:
    const ratio = this.width / this.height;

    // Camera:
    const focalLength = 1.0;
    const viewportHeight = 2.0;

    const cameraCenter = new Vector3();
    const viewportWidth = viewportHeight * ratio;

    const u = new Vector3(viewportWidth, 0.0, 0.0);
    const v = new Vector3(0.0, -viewportHeight, 0.0);

    const deltaU = u.clone.divideScalar(this.width);
    const deltaV = v.clone.divideScalar(this.height);

    const upperLeft = cameraCenter.clone
      .sub(new Vector3(0.0, 0.0, focalLength))
      .sub(u.divideScalar(2.0)).sub(v.divideScalar(2.0));

    const pixel00Location = deltaU.clone.add(deltaV).multiplyScalar(0.5).add(upperLeft);

    // Render:
    for (let p = 0, h = 0 /*, lw = this.width - 1, lh = this.height - 1 */; h < this.height; h++)
    {
      for (let w = 0; w < this.width; w++, p += 3)
      {
        const center = pixel00Location.clone
          .add(deltaU.clone.multiplyScalar(w))
          .add(deltaV.clone.multiplyScalar(h));

        const direction = center.sub(cameraCenter);

        const ray = new Ray(cameraCenter, direction);

        const color = ray.getColor(ray);

        pixels[p    ] = f32(color.x * 255.999);
        pixels[p + 1] = f32(color.y * 255.999);
        pixels[p + 2] = f32(color.z * 255.999);
      }
    }
  }
}

const tracer = new Tracer();

export function trace (
  start: number,
  pixels: Float32Array,
  colors: Uint8ClampedArray //,
  // sample: u16 = tracer.samples
): Uint8ClampedArray {
  const color = new Vector3();

  tracer.createPPMImage(pixels);
  return floatToInt(colors, pixels, color, /* sample */ 1);
}
