import type Ray from '@/stage/Ray';

export default abstract class Hittable
{
  public abstract hit (
    ray: Ray,
    tMin: number,
    tMax: number
  ): boolean;
}
