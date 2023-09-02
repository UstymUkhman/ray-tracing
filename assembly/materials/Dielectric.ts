import Ray from '../Ray';
import Material from './Material';
import Vector3 from '../utils/Vector3';
import Record from '../hittables/Record';

export default class Dielectric extends Material
{
  public constructor (private readonly refraction: f32) {
    super();
  }

  @inline
  // Schlick's reflectance approximation:
  private reflectance (cos: f32, ratio: f32): f32 {
    const reflectance = Mathf.pow((1.0 - ratio) / (1.0 + ratio), 2.0);
    return Mathf.pow((1.0 - cos), 5.0) * (1.0 - reflectance) + reflectance;
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

    const nx = -dx;
    const ny = -dy;
    const nz = -dz;

    const tCos = Mathf.min(nx * rn[0] + ny * rn[1] + nz * rn[2], 1.0);
    const ratio = record.frontFace ? <f32>1.0 / this.refraction : this.refraction;

    const reflect =
      Mathf.sqrt(1.0 - tCos * tCos) * ratio > 1.0 ||
      Mathf.random() < this.reflectance(tCos, ratio);

    if (reflect) {
      const dot = (dx * rn[0] + dy * rn[0] + dz * rn[2]) * 2.0;

      dx -= rn[0] * dot;
      dy -= rn[1] * dot;
      dz -= rn[2] * dot;
    }

    else {
      dx = (rn[0] * tCos + dx) * ratio;
      dy = (rn[1] * tCos + dy) * ratio;
      dz = (rn[2] * tCos + dz) * ratio;

      const lengthSquared = dx * dx + dy * dy + dz * dz;
      const angle = Mathf.abs(1.0 - lengthSquared);
      const nsq = -Mathf.sqrt(angle);

      dx += rn[0] * nsq;
      dy += rn[1] * nsq;
      dz += rn[2] * nsq;
    }

    scattered.setOrigin(rp[0], rp[1], rp[2]);
    scattered.setDirection(dx, dy, dz);

    attenuation.x = 1.0;
    attenuation.y = 1.0;
    attenuation.z = 1.0;

    return true;
  }
}
