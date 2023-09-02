import Ray from '../Ray';
import Record from './Record';

export default abstract class Hittable
{
  public abstract hit (
    ray: Ray,
    tMin: f32,
    tMax: f32,
    record: Record
  ): bool;
}
