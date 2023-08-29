import { Hittable } from './hittables';
import { IRecord } from './hittables';
import Vector3 from './utils/Vector3';

export default class Ray
{
  private readonly color: Vector3 = new Vector3(1.0);

  private readonly far: f64 = Infinity;
  private readonly near: f64 = 0.001;

  public constructor (
    private readonly orig: Vector3 = new Vector3(),
    private readonly dir: Vector3 = new Vector3()
  ) {}

  public at (t: f64): Vector3 {
    return this.orig.clone.add(this.dir.clone.multiplyScalar(t));
  }

  public getColor (ray: Ray, scene: Hittable): Vector3 {
    if (scene.hit(ray, this.near, this.far, IRecord)) {
      return this.color.reset(1.0).add(IRecord.normal).multiplyScalar(0.5);
    }

    const t = (ray.dir.unitVector.y + 1.0) * 0.5;

    return this.color.reset(1.0)
      .multiplyScalar(1.0 - t)
      .add(new Vector3(0.5, 0.7, 1.0)
      .multiplyScalar(t));
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
