import { degToRad } from './utils/Number';
import Vector3 from './utils/Vector3';
import Ray from './Ray';

export default class Camera
{
  private readonly width: f64;
  private readonly height: f64;
  private readonly lensRadius: f64;

  private u: Vector3 = new Vector3();
  private v: Vector3 = new Vector3();

  private origin: Vector3 = new Vector3();
  private vertical: Vector3 = new Vector3();
  private horizontal: Vector3 = new Vector3();

  private lowerLeftCorner: Vector3 = new Vector3();
  private readonly random: Vector3 = new Vector3();

  public constructor (
    origin: Vector3,
    lookAt: Vector3,
    vUp: Vector3,
    fov: f64,
    ratio: f64,
    aperture: f64,
    focusDist: f64
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
      .multiplyScalar(this.width)
      .multiplyScalar(focusDist);

    this.vertical = this.v.clone
      .multiplyScalar(this.height)
      .multiplyScalar(focusDist);

    this.lowerLeftCorner = this.origin.clone
      .sub(this.horizontal.clone.divideScalar(2.0))
      .sub(this.vertical.clone.divideScalar(2.0))
      .sub(w.multiplyScalar(focusDist));
  }

  public setRay (ray: Ray, s: f64, t: f64): void {
    const randomDisk = this.random.randomUnitDisk.multiplyScalar(this.lensRadius);

    const offset = this.u.clone.multiplyScalar(randomDisk.x)
      .add(this.v.clone.multiplyScalar(randomDisk.y));

    ray.direction = this.lowerLeftCorner.clone
      .add(this.horizontal.clone.multiplyScalar(s))
      .add(this.vertical.clone.multiplyScalar(t))
      .sub(this.origin).sub(offset);

    ray.origin = offset.add(this.origin);
  }
}
