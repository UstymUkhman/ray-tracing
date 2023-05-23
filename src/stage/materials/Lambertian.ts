import Ray from '@/stage/Ray';
import Material from './Material';
import Vector3 from '@/utils/Vector3';
import type { Hits } from '@/stage/hittables/types';

export default class Lambertian extends Material
{
  private readonly direction = new Vector3();

  public constructor (private readonly albedo: Vector3) {
    super();
  }

  public override scatter (
    inRay: Ray,
    record: Hits,
    scattered: Ray,
    attenuation: Vector3
  ): boolean {
    const scatteredDirection = record.normal.add(this.direction.randomUnitVector);
    scatteredDirection.nearZero && scatteredDirection.copy(record.normal);

    scattered.direction = scatteredDirection;
    scattered.origin = record.point;

    attenuation.copy(this.albedo);

    return true;
  }
}
