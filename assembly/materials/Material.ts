import Ray from '../Ray';
import Vector3 from '../utils/Vector3';
import Record from '../hittables/Record';

export default abstract class Material
{
  public abstract scatter (
    inRay: Ray,
    record: Record,
    scattered: Ray,
    attenuation: Vector3
  ): bool;
}
