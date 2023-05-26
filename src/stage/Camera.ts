import { degToRad } from '@/utils/Number';
import Vector3 from '@/utils/Vector3';
import type Ray from '@/stage/Ray';

export default class Camera
{
  private readonly u: Vector3;
  private readonly v: Vector3;

  private readonly width: number;
  private readonly height: number;

  private readonly origin: Vector3;
  private readonly vertical: Vector3;

  private readonly lensRadius: number;
  private readonly horizontal: Vector3;

  private readonly random = new Vector3();
  private readonly lowerLeftCorner: Vector3;

  public constructor (
    origin: Vector3,
    lookAt: Vector3,
    vUp: Vector3,
    fov: number,
    ratio: number,
    aperture: number,
    focusDist: number
  ) {
    const w = origin.clone.sub(lookAt).unitVector;
    const height = Math.tan(degToRad(fov) * 0.5);

    this.u = vUp.cross(w).unitVector;
    this.v = w.clone.cross(this.u);

    this.origin = origin;
    this.height = height * 2.0;

    this.width = ratio * this.height;
    this.lensRadius = aperture * 0.5;

    this.horizontal = this.u.clone
      .multiply(this.width)
      .multiply(focusDist);

    this.vertical = this.v.clone
      .multiply(this.height)
      .multiply(focusDist);

    this.lowerLeftCorner = this.origin.clone
      .sub(this.horizontal.clone.divide(2.0))
      .sub(this.vertical.clone.divide(2.0))
      .sub(w.multiply(focusDist));
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
}
