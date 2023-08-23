import Ray from '@S/stage/Ray';
import Material from './Material';
import Vector3 from '@S/utils/Vector3';
import type { Hits } from '@S/stage/hittables/types';

export default class Metal extends Material
{
  private readonly fuzz: number;
  private readonly albedo: Vector3;
  private readonly direction = new Vector3();

  public constructor (color: Vector3, fuzz: number)
  {
    super();
    this.albedo = color.clone;
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
