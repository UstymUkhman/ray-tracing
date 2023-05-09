import Vector3 from '@/utils/Vector3';
import { Record } from '@/stage/hittables';
import type { Hittable } from '@/stage/hittables';

export default class Ray
{
  private readonly color = new Vector3(1.0);

  public constructor (
    private readonly orig: Vector3,
    private readonly dir: Vector3
  ) {}

  public at (t: number): Vector3 {
    return this.orig.clone.add(this.dir.multiply(t));
  }

  public getColor (ray: Ray, scene: Hittable): Vector3 {
    if (scene.hit(ray, 0.0, Infinity, Record))
      return new Vector3(1.0).add(Record.normal).multiply(0.5);

    const t = (ray.dir.unitVector.y + 1.0) * 0.5;

    return this.color.reset(1.0)
      .multiply(1.0 - t)
      .add(new Vector3(0.5, 0.7, 1.0)
      .multiply(t));
  }

  public get direction (): Vector3 {
    return this.dir;
  }

  public get origin (): Vector3 {
    return this.orig;
  }
}
