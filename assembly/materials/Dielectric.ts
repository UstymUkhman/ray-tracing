import Ray from '../Ray';
import Material from './Material';
import Vector3 from '../utils/Vector3';
import Record from '../hittables/Record';

export default class Dielectric extends Material
{
  public constructor (private readonly refraction: f64) {
    super();
  }

  // Schlick's reflectance approximation:
  private reflectance (cos: f64, ratio: f64): f64 {
    const reflectance = Math.pow((1.0 - ratio) / (1.0 + ratio), 2.0);
    return Math.pow((1.0 - cos), 5.0) * (1.0 - reflectance) + reflectance;
  }

  public override scatter (
    inRay: Ray,
    record: Record,
    scattered: Ray,
    attenuation: Vector3
  ): bool {
    const direction = inRay.direction.unitVector;
    const tCos = Math.min(direction.clone.negate.dot(record.normal), 1.0);
    const ratio = record.frontFace ? 1.0 / this.refraction : this.refraction;

    const reflect =
      Math.sqrt(1.0 - tCos * tCos) * ratio > 1.0 ||
      Math.random() < this.reflectance(tCos, ratio);

    reflect
      ? direction.reflect(record.normal)
      : direction.refract(record.normal, ratio);

    scattered.direction = direction;
    scattered.origin = record.point;

    attenuation.reset(1.0);

    return true;
  }
}
