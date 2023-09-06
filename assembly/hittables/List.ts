import Ray from '../Ray';
import { Record } from './';
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
    tMax: f32
  ): bool {
    let hit = false;
    let closest = tMax;

    for (let o: u16 = 0, l = this.length; o < l; ++o) {
      const object = this.objects[o];

      if (object.hit(ray, tMin, closest)) {
        closest = Record.t;
        hit = true;
      }
    }

    return hit;
  }
}
