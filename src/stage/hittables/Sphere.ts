import Hittable from './Hittable';
import type Ray from '@/stage/Ray';
import type { Hits } from './types';
import Vector3 from '@/utils/Vector3';

export default class Sphere extends Hittable
{
  public constructor (
    private readonly center: Vector3 = new Vector3(),
    private readonly radius: number = 0.0
  ) {
    super();
  }

  public override hit (
    ray: Ray,
    tMin: number,
    tMax: number,
    record: Hits
  ): boolean {
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

      if (root < tMin || root > tMax)
        return false;
    }

    record.t = root;
    record.point.copy(ray.at(record.t));

    const outwardNormal = record.point.clone
      .sub(this.center).divide(this.radius);

    record.setFaceNormal(ray, outwardNormal);

    return true;
  }
}
