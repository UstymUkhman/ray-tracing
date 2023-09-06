import Ray from '../Ray';
import Material from './Material';
import { Record } from '../hittables';
import Vector3 from '../utils/Vector3';

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
      Record.normalX * nx +
      Record.normalY * ny +
      Record.normalZ * nz,
      1.0
    );

    const ratio = Record.frontFace
      ? <f32>1.0 / this.refraction
      : this.refraction;

    const reflect =
      Mathf.sqrt(1.0 - tCos * tCos) * ratio > 1.0 ||
      Mathf.random() < this.reflectance(tCos, ratio);

    if (reflect) {
      const dot = (
        Record.normalX * dx +
        Record.normalY * dy +
        Record.normalZ * dz
      ) * 2.0;

      dx -= Record.normalX * dot;
      dy -= Record.normalY * dot;
      dz -= Record.normalZ * dot;
    }

    else {
      dx = (Record.normalX * tCos + dx) * ratio;
      dy = (Record.normalY * tCos + dy) * ratio;
      dz = (Record.normalZ * tCos + dz) * ratio;

      const lengthSquared = dx * dx + dy * dy + dz * dz;
      const angle = Mathf.abs(1.0 - lengthSquared);
      const nsq = -Mathf.sqrt(angle);

      dx += Record.normalX * nsq;
      dy += Record.normalY * nsq;
      dz += Record.normalZ * nsq;
    }

    scattered.origX = Record.pointX;
    scattered.origY = Record.pointY;
    scattered.origZ = Record.pointZ;

    scattered.dirX = dx;
    scattered.dirY = dy;
    scattered.dirZ = dz;

    attenuation.x = 1.0;
    attenuation.y = 1.0;
    attenuation.z = 1.0;

    return true;
  }
}
