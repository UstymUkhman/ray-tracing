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

    dx /= length;
    dy /= length;
    dz /= length;

    const nx = -dx;
    const ny = -dy;
    const nz = -dz;

    const tCos = Mathf.min(
      record.normalX * nx +
      record.normalY * ny +
      record.normalZ * nz,
      1.0
    );

    const ratio = record.frontFace
      ? <f32>1.0 / this.refraction
      : this.refraction;

    const reflect =
      Mathf.sqrt(1.0 - tCos * tCos) * ratio > 1.0 ||
      Mathf.random() < this.reflectance(tCos, ratio);

    if (reflect) {
      const dot = (
        record.normalX * dx +
        record.normalY * dy +
        record.normalZ * dz
      ) * 2.0;

      dx -= record.normalX * dot;
      dy -= record.normalY * dot;
      dz -= record.normalZ * dot;
    }

    else {
      dx = (record.normalX * tCos + dx) * ratio;
      dy = (record.normalY * tCos + dy) * ratio;
      dz = (record.normalZ * tCos + dz) * ratio;

      const lengthSquared = dx * dx + dy * dy + dz * dz;
      const angle = Mathf.abs(1.0 - lengthSquared);
      const nsq = -Mathf.sqrt(angle);

      dx += record.normalX * nsq;
      dy += record.normalY * nsq;
      dz += record.normalZ * nsq;
    }

    scattered.origX = record.pointX;
    scattered.origY = record.pointY;
    scattered.origZ = record.pointZ;

    scattered.dirX = dx;
    scattered.dirY = dy;
    scattered.dirZ = dz;

    attenuation.x = 1.0;
    attenuation.y = 1.0;
    attenuation.z = 1.0;

    return true;
  }
}
