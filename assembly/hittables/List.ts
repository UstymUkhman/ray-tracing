import Ray from '../Ray';
import { IRecord } from './';
import Record from './Record';
import Hittable from './Hittable';

export default class List extends Hittable
{
  private readonly objects: StaticArray<Hittable>;

  public constructor (private length: i32) {
    super();
    this.objects = new StaticArray(length);
  }

  public add (object: Hittable, o: i32): void {
    unchecked(this.objects[o] = object);
    this.length = ++o;
  }

  public override hit (
    ray: Ray,
    tMin: f64,
    tMax: f64,
    record: Record
  ): bool {
    let hit = false;
    let closest = tMax;

    for (let o = 0, l = this.length; o < l; ++o)
      if (unchecked(this.objects[o]).hit(ray, tMin, closest, IRecord))
      {
        closest = IRecord.t;
        record.copy(IRecord);
        hit = true;
      }

    return hit;
  }
}
