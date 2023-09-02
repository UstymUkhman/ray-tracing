import Ray from '../Ray';
import { IRecord } from './';
import Record from './Record';
import Hittable from './Hittable';

export default class List extends Hittable
{
  private readonly objects: StaticArray<Hittable>;

  public constructor (private length: u16) {
    super();
    this.objects = new StaticArray(length);
  }

  public add (object: Hittable, o: u16): void {
    this.objects[o] = object;
    this.length = ++o;
  }

  public override hit (
    ray: Ray,
    tMin: f32,
    tMax: f32,
    record: Record
  ): bool {
    let hit = false;
    let closest = tMax;

    for (let o: u16 = 0, l = this.length; o < l; ++o) {
      const object = this.objects[o];

      if (object.hit(ray, tMin, closest, IRecord))
      {
        closest = IRecord.t;
        record.copy(IRecord);
        hit = true;
      }
    }

    return hit;
  }
}
