import { width as WIDTH, height as HEIGHT } from '@/stage/config';
import type { CameraUniform } from '@/stage/context/types';
import * as Config from '@/stage/config/camera';
import { degToRad } from '@/utils/Number';
import Vector3 from '@/utils/Vector3';
import type Ray from '@/stage/Ray';

export default class Camera
{
  private readonly u: Vector3;
  private readonly v: Vector3;

  private readonly origin: Vector3;
  private readonly vertical: Vector3;

  private readonly lensRadius: number;
  private readonly horizontal: Vector3;

  private readonly random = new Vector3();
  private readonly lowerLeftCorner: Vector3;

  public constructor () {
    const origin = new Vector3(...Config.origin);
    const height = Math.tan(degToRad(Config.fov) * 0.5) * 2.0;
    const w = origin.clone.sub(new Vector3(...Config.lookAt)).normalize;

    this.u = new Vector3(...Config.vUp).cross(w).normalize;
    this.v = w.clone.cross(this.u);
    this.origin = origin;

    const width = WIDTH / HEIGHT * height;
    this.lensRadius = Config.aperture * 0.5;

    this.horizontal = this.u.clone
      .multiply(width)
      .multiply(Config.focusDist);

    this.vertical = this.v.clone
      .multiply(height)
      .multiply(Config.focusDist);

    this.lowerLeftCorner = this.origin.clone
      .sub(this.horizontal.clone.divide(2.0))
      .sub(this.vertical.clone.divide(2.0))
      .sub(w.multiply(Config.focusDist));
  }

  public setRay (ray: Ray, s: number, t: number): void {
    const randomDisk = this.random.randomUnitDisk.multiply(this.lensRadius);

    const offset = this.u.clone.multiply(randomDisk.x)
      .add(this.v.clone.multiply(randomDisk.y));

    ray.direction = this.lowerLeftCorner.clone
      .add(this.horizontal.clone.multiply(s))
      .add(this.vertical.clone.multiply(t))
      .sub(this.origin).sub(offset);

    ray.origin = offset.add(this.origin);
  }

  public get uniform (): CameraUniform {
    return {
      lowerLeftCorner: this.lowerLeftCorner.get(),
      horizontal: this.horizontal.get(),
      vertical: this.vertical.get(),
      lensRadius: this.lensRadius,
      origin: this.origin.get(),
      v: this.v.get(),
      u: this.u.get()
    };
  }
}
