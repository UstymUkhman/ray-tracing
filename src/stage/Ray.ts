import Vector3 from '@/utils/Vector3';
import { Record } from '@/stage/hittables';
import type { Hittable } from '@/stage/hittables';

export default class Ray
{
  private readonly color = new Vector3(1.0);
  private readonly far = Infinity;
  private readonly near = 0.001;

  public constructor (
    private readonly orig: Vector3,
    private readonly dir: Vector3
  ) {}

  public at (t: number): Vector3 {
    return this.orig.clone.add(this.dir.multiply(t));
  }

  public getColor (ray: Ray, scene: Hittable, depth: number): Vector3 {
    if (!depth) return this.color.reset();

    if (scene.hit(ray, this.near, this.far, Record))
      return this.getColor(
        new Ray(
          Record.point,
          Record.point.clone
            .add(Record.normal)
            .add(this.randomUnitSphere)
            .sub(Record.point)
        ), scene, depth - 1.0
      ).multiply(0.5);

    const t = (ray.dir.unitVector.y + 1.0) * 0.5;

    return this.color.reset(1.0)
      .multiply(1.0 - t)
      .add(new Vector3(0.5, 0.7, 1.0)
      .multiply(t));
  }

  private get randomUnitSphere (): Vector3 {
    const rand = new Vector3();

    for ( ; ; )
      if (rand.random(-1.0).lengthSquared < 1.0)
        return rand;
  }

  public set direction (dir: Vector3) {
    this.dir.copy(dir);
  }

  public get direction (): Vector3 {
    return this.dir;
  }

  public set origin (orig: Vector3) {
    this.orig.copy(orig);
  }

  public get origin (): Vector3 {
    return this.orig;
  }
}
