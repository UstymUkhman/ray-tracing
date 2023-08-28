// import { degToRad } from './utils/Number';
import Vector3 from './utils/Vector3';
import Ray from './Ray';

export default class Camera
{
  private readonly width: f64;
  private readonly height: f64;

  // private readonly lensRadius: f64;

  // private readonly u: Vector3 = new Vector3();
  // private readonly v: Vector3 = new Vector3();

  // private readonly random: Vector3 = new Vector3();
  private origin: Vector3 = new Vector3();

  private vertical: Vector3 = new Vector3();
  private horizontal: Vector3 = new Vector3();

  private lowerLeftCorner: Vector3 = new Vector3();

  public constructor (
    origin: Vector3,
    lookAt: Vector3,
    vUp: Vector3,
    fov: f64,
    ratio: f64 //,
    // aperture: f64,
    // focusDist: f64
  ) {
    this.origin = origin;
    this.height = /* height * */ 2.0;

    this.width = ratio * this.height;

    this.horizontal = new Vector3(this.width, 0.0, 0.0);

    this.vertical = new Vector3(0.0, this.height, 0.0);

    this.lowerLeftCorner = this.origin.clone
      .sub(this.horizontal.clone.divideScalar(2.0))
      .sub(this.vertical.clone.divideScalar(2.0))
      .sub(new Vector3(0.0, 0.0, 1.0));
  }

  public setRay (ray: Ray, u: f64, v: f64): void {
    ray.direction = this.lowerLeftCorner.clone
      .add(this.horizontal.clone.multiplyScalar(u))
      .add(this.vertical.clone.multiplyScalar(v))
      .sub(this.origin);

    ray.origin = this.origin;
  }
}
