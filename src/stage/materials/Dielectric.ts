import Ray from '@/stage/Ray';
import Material from './Material';
import Vector3 from '@/utils/Vector3';
import { Record } from '@/stage/hittables';

export default class Dielectric extends Material
{
  public constructor (public readonly refraction: number) {
    super();
  }

  // Schlick's reflectance approximation:
  private reflectance (cos: number, ratio: number): number {
    const reflectance = Math.pow((1.0 - ratio) / (1.0 + ratio), 2.0);
    return Math.pow((1.0 - cos), 5.0) * (1.0 - reflectance) + reflectance;
  }

  public override scatter (
    inRay: Ray,
    scattered: Ray,
    attenuation: Vector3
  ): boolean {
    const direction = inRay.direction.normalize;
    const tCos = Math.min(direction.clone.negate.dot(Record.normal), 1.0);
    const ratio = Record.frontFace ? 1.0 / this.refraction : this.refraction;

    const reflect =
      Math.sqrt(1.0 - tCos * tCos) * ratio > 1.0 ||
      Math.random() < this.reflectance(tCos, ratio);

    reflect
      ? direction.reflect(Record.normal)
      : direction.refract(Record.normal, ratio);

    scattered.direction = direction;
    scattered.origin = Record.point;

    attenuation.reset(1.0);

    return true;
  }
}
