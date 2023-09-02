import { Hittable } from './hittables';
import { IRecord } from './hittables';
import Vector3 from './utils/Vector3';

export default class Ray
{
  private readonly color: Vector3 = new Vector3(1.0);

  public origX: f64 = 0.0;
  public origY: f64 = 0.0;
  public origZ: f64 = 0.0;

  public dirX: f64 = 0.0;
  public dirY: f64 = 0.0;
  public dirZ: f64 = 0.0;

  public getColor (ray: Ray, scene: Hittable, depth: u8): Vector3
  {
    if (depth === 0) return this.color.reset();

    if (scene.hit(ray, 0.001, Infinity, IRecord)) {
      const attenuation = new Vector3();
      const scattered = new Ray();

      if (IRecord.material.scatter(ray, IRecord, scattered, attenuation)) {
        const color = this.getColor(scattered, scene, depth - 1);

        color.x *= attenuation.x;
        color.y *= attenuation.y;
        color.z *= attenuation.z;

        return color;
      }

      return this.color.reset();
    }

    const length = Math.sqrt(
      ray.dirX * ray.dirX +
      ray.dirY * ray.dirY +
      ray.dirZ * ray.dirZ
    );

    ray.dirX /= length;
    ray.dirY /= length;
    ray.dirZ /= length;

    const t = (ray.dirY + 1.0) * 0.5;

    this.color.x = 1.0 * (1.0 - t) + 0.5 * t;
    this.color.y = 1.0 * (1.0 - t) + 0.7 * t;
    this.color.z = 1.0 * (1.0 - t) + 1.0 * t;

    return this.color;
  }

  @inline
  public setDirection (x: f64, y: f64, z: f64): void {
    this.dirX = x;
    this.dirY = y;
    this.dirZ = z;
  }

  @inline
  public setOrigin (x: f64, y: f64, z: f64): void {
    this.origX = x;
    this.origY = y;
    this.origZ = z;
  }
}
