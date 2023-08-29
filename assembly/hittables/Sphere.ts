import Ray from '../Ray';
import Record from './Record';
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
    ray: Ray,
    tMin: f64,
    tMax: f64,
    record: Record
  ): bool {
    const oc = ray.origin.clone.sub(this.center);

    const a = ray.direction.lengthSquared;
    const halfB = oc.dot(ray.direction);

    const c = oc.lengthSquared - this.radius * this.radius;
    const d = halfB * halfB - a * c;

    if (d < 0) return false;

    const sqrtD = Math.sqrt(d);
    let root = (-halfB - sqrtD) / a;

    if (root < tMin || root > tMax) {
      root = (-halfB + sqrtD) / a;

      if (root < tMin || root > tMax) {
        return false;
      }
    }

    record.t = root;
    record.point.copy(ray.at(record.t));

    const outwardNormal = record.point.clone
      .sub(this.center).divideScalar(this.radius);

    record.setFaceNormal(ray, outwardNormal);

    return true;
  }
}
