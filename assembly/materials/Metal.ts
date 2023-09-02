import Ray from '../Ray';
import Material from './Material';
import Vector3 from '../utils/Vector3';
import Record from '../hittables/Record';
import { random } from '../utils/Number';

export default class Metal extends Material
{
  private readonly fuzz: f32;
  private readonly albedo: Vector3;

  public constructor (color: Vector3, fuzz: f32)
  {
    super();
    this.albedo = color.clone;
    this.fuzz = Mathf.min(fuzz, 1.0);
  }

  @inline
  public override scatter (
    inRay: Ray,
    record: Record,
    scattered: Ray,
    attenuation: Vector3
  ): bool {
    let dx = inRay.dirX;
    let dy = inRay.dirY;
    let dz = inRay.dirZ;

    const dls = dx * dx + dy * dy + dz * dz;
    const length = Mathf.sqrt(dls);

    const rn = record.normal;
    const rp = record.point;

    dx /= length;
    dy /= length;
    dz /= length;

    const dot = (dx * rn[0] + dy * rn[1] + dz * rn[2]) * 2.0;

    const rx = dx - rn[0] * dot;
    const ry = dy - rn[1] * dot;
    const rz = dz - rn[2] * dot;

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

    x = x * this.fuzz + rx;
    y = y * this.fuzz + ry;
    z = z * this.fuzz + rz;

    attenuation.copy(this.albedo);
    scattered.setDirection(x, y, z);
    scattered.setOrigin(rp[0], rp[1], rp[2]);

    return (x * rn[0] + y * rn[1] + z * rn[2]) > 0.0;
  }
}
