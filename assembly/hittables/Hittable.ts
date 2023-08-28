import Ray from '../Ray';

export default abstract class Hittable
{
  public abstract hit (
    ray: Ray //,
    // tMin: f64,
    // tMax: f64,
    // record: Hits
  ): bool;
}
