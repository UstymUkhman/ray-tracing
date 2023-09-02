import { Hittable } from './hittables';
import { IRecord } from './hittables';
import Vector3 from './utils/Vector3';

export default class Ray
{
  private readonly color: Vector3 = new Vector3(1.0);

  public origX: f32 = 0.0;
  public origY: f32 = 0.0;
  public origZ: f32 = 0.0;

  public dirX: f32 = 0.0;
  public dirY: f32 = 0.0;
  public dirZ: f32 = 0.0;

  public getColor (ray: Ray, scene: Hittable, depth: u8): Vector3
  {
    if (!depth) {
      const c = this.color;

      c.x = 0.0;
      c.y = 0.0;
      c.z = 0.0;

      return c;
    }

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

      const c = this.color;

      c.x = 0.0;
      c.y = 0.0;
      c.z = 0.0;

      return c;
    }

    const length = Mathf.sqrt(
      ray.dirX * ray.dirX +
      ray.dirY * ray.dirY +
      ray.dirZ * ray.dirZ
    );

    ray.dirX /= length;
    ray.dirY /= length;
    ray.dirZ /= length;

    const c = this.color;
    const t = (ray.dirY + 1.0) * 0.5;

    c.x = 1.0 * (1.0 - t) + 0.5 * t;
    c.y = 1.0 * (1.0 - t) + 0.7 * t;
    c.z = 1.0 * (1.0 - t) + 1.0 * t;

    return c;
  }
}
