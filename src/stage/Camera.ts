import { degToRad } from '@/utils/Number';
import Vector3 from '@/utils/Vector3';
import Ray from '@/stage/Ray';

export default class Camera
{
  private readonly width: number;
  private readonly height: number;

  private readonly vertical: Vector3;
  private readonly horizontal: Vector3;

  // private readonly focalLength = 1.0;
  private readonly lowerLeftCorner: Vector3;

  public constructor (
    private readonly origin: Vector3,
    lookAt: Vector3,
    vUp: Vector3,
    fov: number,
    ratio: number
  ) {
    const w = this.origin.clone.sub(lookAt).unitVector;
    const height = Math.tan(degToRad(fov) * 0.5);

    const u = vUp.cross(w).unitVector;
    const v = w.clone.cross(u);

    this.height = height * 2.0;
    this.width = ratio * this.height;

    this.vertical = v.multiply(this.height);
    this.horizontal = u.multiply(this.width);

    this.lowerLeftCorner = this.origin.clone
      .sub(this.horizontal.clone.divide(2.0))
      .sub(this.vertical.clone.divide(2.0))
      .sub(w);
  }

  public setRay (ray: Ray, s: number, t: number): Ray {
    ray.direction = this.lowerLeftCorner.clone
      .add(this.horizontal.clone.multiply(s))
      .add(this.vertical.clone.multiply(t))
      .sub(this.origin);

    ray.origin = this.origin;

    return ray;
  }
}
