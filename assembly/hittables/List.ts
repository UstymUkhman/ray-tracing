import Ray from '../Ray';
import { IRecord } from './';
import Record from './Record';
import Hittable from './Hittable';

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
    tMin: f64,
    tMax: f64,
    record: Record
  ): bool {
    let hit = false;
    let closest = tMax;

    for (let o = 0, l = this.objects.length; o < l; o++) {
      if (this.objects[o].hit(ray, tMin, closest, IRecord)) {
        closest = IRecord.t;
        record.copy(IRecord);
        hit = true;
      }
    }

    return hit;
  }

  public clear (): void {
    this.objects.length = 0;
  }
}
