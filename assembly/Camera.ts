import Ray from './Ray';
import Vector3 from './utils/Vector3';
import { degToRad, random } from './utils/Number';

export default class Camera
{
  private lowerLeftCorner: Vector3 = new Vector3();

  private horizontal: Vector3 = new Vector3();
  private vertical: Vector3 = new Vector3();
  private origin: Vector3 = new Vector3();

  private u: Vector3 = new Vector3();
  private v: Vector3 = new Vector3();

  private readonly lensRadius: f32;

  private readonly height: f32;
  private readonly width: f32;

  public constructor (
    origin: Vector3,
    lookAt: Vector3,
    vUp: Vector3,
    fov: f32,
    ratio: f32,
    aperture: f32,
    focusDist: f32
  ) {
    const w = origin.clone.sub(lookAt).unitVector;
    const height = Mathf.tan(degToRad(fov) * 0.5);

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

  @inline
  public setRay (ray: Ray, s: f32, t: f32): void {
    const lowerLeftCorner = this.lowerLeftCorner;

    const horizontal = this.horizontal;
    const vertical = this.vertical;
    const origin = this.origin;

    let x = random(-1.0, 1.0);
    let y = random(-1.0, 1.0);

    let lengthSquared = x * x + y * y;

    while (lengthSquared > 1.0) {
      x = random(-1.0, 1.0);
      y = random(-1.0, 1.0);

      lengthSquared = x * x + y * y;
    }

    x *= this.lensRadius;
    y *= this.lensRadius;

    const u = this.u;
    const v = this.v;

    const ofx = u.x * x + v.x * y;
    const ofy = u.y * x + v.y * y;
    const ofz = u.z * x + v.z * y;

    const lcx = lowerLeftCorner.x;
    const lcy = lowerLeftCorner.y;
    const lcz = lowerLeftCorner.z;

    const hx = horizontal.x * s;
    const hy = horizontal.y * s;
    const hz = horizontal.z * s;

    const vx = vertical.x * t;
    const vy = vertical.y * t;
    const vz = vertical.z * t;

    const orx = origin.x;
    const ory = origin.y;
    const orz = origin.z;

    ray.origX = ofx + orx;
    ray.origY = ofy + ory;
    ray.origZ = ofz + orz;

    ray.dirX = lcx + hx + vx - orx - ofx;
    ray.dirY = lcy + hy + vy - ory - ofy;
    ray.dirZ = lcz + hz + vz - orz - ofz;
  }
}
