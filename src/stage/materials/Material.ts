import type Ray from '@S/stage/Ray';
import type Vector3 from '@S/utils/Vector3';
import type { Hits } from '@S/stage/hittables/types';

export default abstract class Material
{
  public abstract scatter (
    inRay: Ray,
    record: Hits,
    scattered: Ray,
    attenuation: Vector3
  ): boolean;
}
