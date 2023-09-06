import type Ray from '@/stage/Ray';
import type Vector3 from '@/utils/Vector3';

export default abstract class Material
{
  public abstract scatter (
    inRay: Ray,
    scattered: Ray,
    attenuation: Vector3
  ): boolean;
}
