import Ray from '../Ray';
import Material from './Material';
import Vector3 from '../utils/Vector3';
import Record from '../hittables/Record';

export default class Lambertian extends Material
{
  private readonly albedo: Vector3;
  private readonly direction: Vector3 = new Vector3();

  public constructor (color: Vector3)
  {
    super();
    this.albedo = color.clone;
  }

  public override scatter (
    inRay: Ray,
    record: Record,
    scattered: Ray,
    attenuation: Vector3
  ): bool {
    const scatteredDirection = record.normal.add(this.direction.randomUnitVector);
    scatteredDirection.nearZero && scatteredDirection.copy(record.normal);

    scattered.direction = scatteredDirection;
    scattered.origin = record.point;

    attenuation.copy(this.albedo);

    return true;
  }
}
