import Ray from '@/stage/Ray';
import Material from './Material';
import Vector3 from '@/utils/Vector3';
import { Record } from '@/stage/hittables';

export default class Lambertian extends Material
{
  private readonly albedo: Vector3;
  private readonly direction = new Vector3();

  public constructor (color: Vector3)
  {
    super();
    this.albedo = color.clone;
  }

  public override scatter (
    inRay: Ray,
    scattered: Ray,
    attenuation: Vector3
  ): boolean {
    const scatteredDirection = Record.normal.clone.add(this.direction.randomNormalized);
    scatteredDirection.nearZero && scatteredDirection.copy(Record.normal);

    scattered.direction = scatteredDirection;
    scattered.origin = Record.point;

    attenuation.copy(this.albedo);
    return true;
  }
}
