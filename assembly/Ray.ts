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

  public getColor (ray: Ray, scene: Hittable, depth: u8): Vector3 {
    if (!depth) return this.color.reset();

    if (scene.hit(ray, this.near, this.far, IRecord)) {
      const attenuation = new Vector3();
      const scattered = new Ray();

      if (IRecord.material.scatter(ray, IRecord, scattered, attenuation))
        return this.getColor(scattered, scene, depth - 1)
          .multiply(attenuation);

      return this.color.reset();
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
