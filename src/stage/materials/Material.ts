import type Ray from '@/stage/Ray';
import type Vector3 from '@/utils/Vector3';
import type { Hits } from '@/stage/hittables/types';

export default abstract class Material
{
  public abstract scatter (
    inRay: Ray,
    record: Hits,
    scattered: Ray,
    attenuation: Vector3
  ): boolean;
}
