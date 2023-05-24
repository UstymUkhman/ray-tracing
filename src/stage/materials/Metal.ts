import Ray from '@/stage/Ray';
import Material from './Material';
import Vector3 from '@/utils/Vector3';
import type { Hits } from '@/stage/hittables/types';

export default class Metal extends Material
{
  private readonly direction = new Vector3();

  public constructor (
    private readonly albedo: Vector3,
    private readonly fuzz: number
  ) {
    super();
    this.fuzz = Math.min(fuzz, 1.0);
  }

  public override scatter (
    inRay: Ray,
    record: Hits,
    scattered: Ray,
    attenuation: Vector3
  ): boolean {
    const reflected = inRay.direction.unitVector.reflect(record.normal);
    this.direction.randomUnitSphere.multiply(this.fuzz).add(reflected);

    scattered.direction = this.direction;
    scattered.origin = record.point;

    attenuation.copy(this.albedo);

    return this.direction.dot(record.normal) > 0.0;
  }
}
