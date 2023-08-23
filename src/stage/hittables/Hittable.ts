import type Ray from '@S/stage/Ray';
import type { Hits } from './types';

export default abstract class Hittable
{
  public abstract hit (
    ray: Ray,
    tMin: number,
    tMax: number,
    record: Hits
  ): boolean;
}
