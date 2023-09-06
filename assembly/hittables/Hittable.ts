import Ray from '../Ray';

export default abstract class Hittable
{
  public abstract hit (
    ray: Ray,
    tMin: f32,
    tMax: f32
  ): bool;
}
