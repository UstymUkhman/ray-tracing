import Ray from '@/stage/Ray';
import Material from './Material';
import Vector3 from '@/utils/Vector3';
import { Record } from '@/stage/hittables';

export default class Metal extends Material
{
  public readonly fuzz: number;
  public readonly albedo: Vector3;

  private readonly direction = new Vector3();

  public constructor (color: Vector3, fuzz: number)
  {
    super();
    this.albedo = color.clone;
    this.fuzz = Math.min(fuzz, 1.0);
  }

  public override scatter (
    inRay: Ray,
    scattered: Ray,
    attenuation: Vector3
  ): boolean {
    const reflected = inRay.direction.normalize.reflect(Record.normal);
    this.direction.randomUnitSphere.multiply(this.fuzz).add(reflected);

    scattered.direction = this.direction;
    scattered.origin = Record.point;

    attenuation.copy(this.albedo);

    return this.direction.dot(Record.normal) > 0.0;
  }
}
