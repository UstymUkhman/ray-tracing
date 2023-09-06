import Ray from '../Ray';
import Material from './Material';
import { Record } from '../hittables';
import Vector3 from '../utils/Vector3';
import { random } from '../utils/Number';

export default class Lambertian extends Material
{
  private readonly albedo: Vector3;

  public constructor (color: Vector3)
  {
    super();
    this.albedo = color.clone;
  }

  @inline
  public override scatter (
    inRay: Ray,
    scattered: Ray,
    attenuation: Vector3
  ): bool {
    let x: f32 = 0.0;
    let y: f32 = 0.0;
    let z: f32 = 0.0;

    let ls: f32 = 0.0;

    do {
      x = random(-1.0, 1.0);
      y = random(-1.0, 1.0);
      z = random(-1.0, 1.0);

      ls = x * x + y * y + z * z;
    } while (ls < 1.0);

    const length = Mathf.sqrt(ls);

    x /= length;
    y /= length;
    z /= length;

    let sdx = Record.normalX + x;
    let sdy = Record.normalY + y;
    let sdz = Record.normalZ + z;

    if (
      Mathf.abs(sdx) < 1e-8 &&
      Mathf.abs(sdy) < 1e-8 &&
      Mathf.abs(sdz) < 1e-8
    ) {
      sdx = Record.normalX;
      sdy = Record.normalY;
      sdz = Record.normalZ;
    }

    scattered.dirX = sdx;
    scattered.dirY = sdy;
    scattered.dirZ = sdz;

    scattered.origX = Record.pointX;
    scattered.origY = Record.pointY;
    scattered.origZ = Record.pointZ;

    const albedo = this.albedo;

    attenuation.x = albedo.x;
    attenuation.y = albedo.y;
    attenuation.z = albedo.z;

    return true;
  }
}
