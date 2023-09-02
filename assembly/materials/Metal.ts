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

    dx /= length;
    dy /= length;
    dz /= length;

    const dot = (
      dx * record.normalX +
      dy * record.normalY +
      dz * record.normalZ
    ) * 2.0;

    const rx = dx - record.normalX * dot;
    const ry = dy - record.normalY * dot;
    const rz = dz - record.normalZ * dot;

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

    scattered.origX = record.pointX;
    scattered.origY = record.pointY;
    scattered.origZ = record.pointZ;

    const albedo = this.albedo;

    attenuation.x = albedo.x;
    attenuation.y = albedo.y;
    attenuation.z = albedo.z;

    scattered.dirX = x;
    scattered.dirY = y;
    scattered.dirZ = z;

    return (
      x * record.normalX +
      y * record.normalY +
      z * record.normalZ
    ) > 0.0;
  }
}
