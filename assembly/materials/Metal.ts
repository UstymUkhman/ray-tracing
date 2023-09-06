import Ray from '../Ray';
import Material from './Material';
import { Record } from '../hittables';
import Vector3 from '../utils/Vector3';
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
      dx * Record.normalX +
      dy * Record.normalY +
      dz * Record.normalZ
    ) * 2.0;

    const rx = dx - Record.normalX * dot;
    const ry = dy - Record.normalY * dot;
    const rz = dz - Record.normalZ * dot;

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

    scattered.origX = Record.pointX;
    scattered.origY = Record.pointY;
    scattered.origZ = Record.pointZ;

    const albedo = this.albedo;

    attenuation.x = albedo.x;
    attenuation.y = albedo.y;
    attenuation.z = albedo.z;

    scattered.dirX = x;
    scattered.dirY = y;
    scattered.dirZ = z;

    return (
      x * Record.normalX +
      y * Record.normalY +
      z * Record.normalZ
    ) > 0.0;
  }
}
