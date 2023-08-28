import Ray from '../Ray';
import Hittable from './Hittable';
import Vector3 from '../utils/Vector3';

export default class Sphere extends Hittable
{
  public constructor (
    private readonly radius: f64,
    private readonly center: Vector3 //,
    // private readonly material: Material
  ) {
    super();
  }

  public override hit (
    ray: Ray //,
    // tMin: f64,
    // tMax: f64,
    // record: Hits
  ): f64 /* bool */ {
    const oc = ray.origin.clone.sub(this.center);

    const a = ray.direction.lengthSquared;
    // const halfB = oc.dot(ray.direction);
    const b = oc.dot(ray.direction) * 2.0;

    const c = oc.lengthSquared - this.radius * this.radius;
    // const d = halfB * halfB - a * c;
    const d = b * b - a * c * 4.0;

    return d < 0.0 ? -1.0 : (-b - Math.sqrt(d)) / (a * 2.0);
  }
}
