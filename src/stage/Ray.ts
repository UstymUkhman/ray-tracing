import type { Hittable } from '@/stage/hittables';
import { Record } from '@/stage/hittables';
import Vector3 from '@/utils/Vector3';

export default class Ray
{
  private readonly color = new Vector3(1.0);

  private readonly far = Infinity;
  private readonly near = 0.001;

  public constructor (
    private readonly orig = new Vector3(),
    private readonly dir = new Vector3()
  ) {}

  public at (t: number): Vector3 {
    return this.orig.clone.add(this.dir.clone.multiply(t));
  }

  public getColor (ray: Ray, scene: Hittable, depth: number): Vector3 {
    if (!depth) return this.color.reset();

    if (scene.hit(ray, this.near, this.far)) {
      const attenuation = new Vector3();
      const scattered = new Ray();

      if (Record.material.scatter(ray, scattered, attenuation))
        return this.getColor(scattered, scene, depth - 1.0)
          .multiply(attenuation);

      return this.color.reset();
    }

    const t = (ray.dir.normalize.y + 1.0) * 0.5;

    return this.color.reset(1.0)
      .multiply(1.0 - t)
      .add(new Vector3(0.5, 0.7, 1.0)
      .multiply(t));
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
