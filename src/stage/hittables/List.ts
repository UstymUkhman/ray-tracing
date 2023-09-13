import Record from './Record';
import Hittable from './Hittable';
import type Ray from '@/stage/Ray';

export default class List extends Hittable
{
  private readonly objects: Hittable[] = [];

  public constructor () {
    super();
  }

  public add (object: Hittable): void {
    this.objects.push(object);
  }

  public override hit (
    ray: Ray,
    tMin: number,
    tMax: number
  ): boolean {
    let hit = false;
    let closest = tMax;

    for (let o = 0, l = this.objects.length; o < l; o++)
      if (this.objects[o].hit(ray, tMin, closest)) {
        closest = Record.t;
        hit = true;
      }

    return hit;
  }

  public get hittables (): Hittable[] {
    return this.objects;
  }

  public dispose (): void {
    this.objects.length = 0.0;
  }
}
