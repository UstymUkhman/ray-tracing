import Record from './Record';
import Hittable from './Hittable';
import type Ray from '@/stage/Ray';
import Vector3 from '@/utils/Vector3';
import type { Material } from '@/stage/materials';

export default class Sphere extends Hittable
{
  public constructor (
    private readonly radius: number,
    private readonly center: Vector3,
    private readonly material: Material
  ) {
    super();
  }

  public override hit (
    ray: Ray,
    tMin: number,
    tMax: number
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

      if (root < tMin || root > tMax) {
        return false;
      }
    }

    Record.point.copy(ray.at(root));

    const outwardNormal = Record.point.clone
      .sub(this.center).divide(this.radius);

    Record.setFaceNormal(ray, outwardNormal);
    Record.material = this.material;
    Record.t = root;

    return true;
  }
}
