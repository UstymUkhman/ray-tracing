import Ray from '../Ray';
import Record from './Record';

export default abstract class Hittable
{
  public abstract hit (
    ray: Ray,
    tMin: f64,
    tMax: f64,
    record: Record
  ): bool;
}
