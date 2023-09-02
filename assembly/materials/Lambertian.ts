import Ray from '../Ray';
import Material from './Material';
import Vector3 from '../utils/Vector3';
import Record from '../hittables/Record';
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
    record: Record,
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

    let sdx = record.normalX + x;
    let sdy = record.normalY + y;
    let sdz = record.normalZ + z;

    if (
      Mathf.abs(sdx) < 1e-8 &&
      Mathf.abs(sdy) < 1e-8 &&
      Mathf.abs(sdz) < 1e-8
    ) {
      sdx = record.normalX;
      sdy = record.normalY;
      sdz = record.normalZ;
    }

    scattered.dirX = sdx;
    scattered.dirY = sdy;
    scattered.dirZ = sdz;

    scattered.origX = record.pointX;
    scattered.origY = record.pointY;
    scattered.origZ = record.pointZ;

    const albedo = this.albedo;

    attenuation.x = albedo.x;
    attenuation.y = albedo.y;
    attenuation.z = albedo.z;

    return true;
  }
}
