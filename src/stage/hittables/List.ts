import Record from './Record';
import Hittable from './Hittable';
import type Ray from '@/stage/Ray';
import type { Hits } from './types';

export default class List extends Hittable
{
  private readonly objects: Hittable[] = [];

  public constructor (object?: Hittable) {
    super();
    object && this.add(object);
  }

  public add (object: Hittable): void {
    this.objects.push(object);
  }

  public override hit (
    ray: Ray,
    tMin: number,
    tMax: number,
    record: Hits
  ): boolean {
    let hit = false;
    let closest = tMax;

    for (let o = 0, l = this.objects.length; o < l; o++) {
      if (this.objects[o].hit(ray, tMin, closest, Record)) {
        closest = Record.t;
        record.copy(Record);
        hit = true;
      }
    }

    return hit;
  }

  public clear (): void {
    this.objects.length = 0;
  }
}
