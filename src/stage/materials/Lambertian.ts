import Ray from '@/stage/Ray';
import Material from './Material';
import Vector3 from '@/utils/Vector3';
import { Record } from '@/stage/hittables';

export default class Lambertian extends Material
{
  public readonly albedo: Vector3;
  public readonly direction = new Vector3();

  public constructor (color: Vector3) {
    super();
    this.albedo = color.clone;
  }

  public override scatter (
    _: Ray,
    scattered: Ray,
    attenuation: Vector3
  ): boolean {
    const direction = Record.normal.clone.add(this.direction.randomNormalized);
    direction.nearZero && direction.copy(Record.normal);

    scattered.direction = direction;
    scattered.origin = Record.point;

    attenuation.copy(this.albedo);
    return true;
  }
}
