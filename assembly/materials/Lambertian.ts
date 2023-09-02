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
    const rn = record.normal;
    const rp = record.point;

    x /= length;
    y /= length;
    z /= length;

    let sdx = rn[0] + x;
    let sdy = rn[1] + y;
    let sdz = rn[2] + z;

    if (
      Mathf.abs(sdx) < 1e-8 &&
      Mathf.abs(sdy) < 1e-8 &&
      Mathf.abs(sdz) < 1e-8
    ) {
      sdx = rn[0];
      sdy = rn[1];
      sdz = rn[2];
    }

    scattered.setOrigin(rp[0], rp[1], rp[2]);
    scattered.setDirection(sdx, sdy, sdz);
    attenuation.copy(this.albedo);

    return true;
  }
}
