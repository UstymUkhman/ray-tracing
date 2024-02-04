import { width as WIDTH, height as HEIGHT } from '../src/stage/config';
import * as Config from '../src/stage/config/camera';
import { degToRad, random } from './utils/Number';
import Vector3 from './utils/Vector3';
import Ray from './Ray';

export default class Camera
{
  private lowerLeftCorner: Vector3 = new Vector3();

  private horizontal: Vector3 = new Vector3();
  private vertical: Vector3 = new Vector3();
  private origin: Vector3 = new Vector3();

  private u: Vector3 = new Vector3();
  private v: Vector3 = new Vector3();

  private readonly lensRadius: f32;

  public constructor () {
    const height = Mathf.tan(degToRad(<f32>Config.fov) * 0.5) * 2.0;

    const origin = new Vector3(
      <f32>Config.origin[0],
      <f32>Config.origin[1],
      <f32>Config.origin[2]
    );

    const w = origin.clone.sub(
      new Vector3(
        <f32>Config.lookAt[0],
        <f32>Config.lookAt[1],
        <f32>Config.lookAt[2]
      )
    ).normalize;

    this.u = new Vector3(
      <f32>Config.vUp[0],
      <f32>Config.vUp[1],
      <f32>Config.vUp[2]
    )
      .cross(w)
      .normalize;

    this.v = w.clone.cross(this.u);
    this.origin = origin;

    const width = f32(WIDTH) / f32(HEIGHT) * height;
    this.lensRadius = <f32>Config.aperture * 0.5;

    this.horizontal = this.u.clone
      .multiplyScalar(width)
      .multiplyScalar(<f32>Config.focusDist);

    this.vertical = this.v.clone
      .multiplyScalar(height)
      .multiplyScalar(<f32>Config.focusDist);

    this.lowerLeftCorner = this.origin.clone
      .sub(this.horizontal.clone.divideScalar(2.0))
      .sub(this.vertical.clone.divideScalar(2.0))
      .sub(w.multiplyScalar(<f32>Config.focusDist));
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
