import Ray from '../Ray';
import Material from './Material';
import Vector3 from '../utils/Vector3';
import Record from '../hittables/Record';

export default class Metal extends Material
{
  private readonly fuzz: f64;
  private readonly albedo: Vector3;
  private readonly direction: Vector3 = new Vector3();

  public constructor (color: Vector3, fuzz: f64)
  {
    super();
    this.albedo = color.clone;
    this.fuzz = Math.min(fuzz, 1.0);
  }

  public override scatter (
    inRay: Ray,
    record: Record,
    scattered: Ray,
    attenuation: Vector3
  ): bool {
    const reflected = inRay.direction.unitVector.reflect(record.normal);
    this.direction.randomUnitSphere.multiplyScalar(this.fuzz).add(reflected);

    scattered.direction = this.direction;
    scattered.origin = record.point;

    attenuation.copy(this.albedo);

    return this.direction.dot(record.normal) > 0.0;
  }
}
