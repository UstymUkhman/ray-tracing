import Ray from '../Ray';
import Record from './Record';
import Hittable from './Hittable';
import Vector3 from '../utils/Vector3';
import { Material } from '../materials';

export default class Sphere extends Hittable
{
  public constructor (
    private readonly radius: f64,
    private readonly center: Vector3,
    private readonly material: Material
  ) {
    super();
  }

  @inline
  public override hit (
    ray: Ray,
    tMin: f64,
    tMax: f64,
    record: Record
  ): bool {
    const dx = ray.dirX;
    const dy = ray.dirY;
    const dz = ray.dirZ;

    const ox = ray.origX;
    const oy = ray.origY;
    const oz = ray.origZ;

    const cx = this.center.x;
    const cy = this.center.y;
    const cz = this.center.z;

    const ocx = ox - cx;
    const ocy = oy - cy;
    const ocz = oz - cz;

    const a = dx * dx + dy * dy + dz * dz;
    const halfB = ocx * dx + ocy * dy + ocz * dz;
    const ocls = ocx * ocx + ocy * ocy + ocz * ocz;

    const c = ocls - this.radius * this.radius;
    const d = halfB * halfB - a * c;

    if (d < 0) return false;

    const sqrtD = Math.sqrt(d);
    let root = (-halfB - sqrtD) / a;

    if (root < tMin || root > tMax) {
      root = (-halfB + sqrtD) / a;

      if (root < tMin || root > tMax)
        return false;
    }

    const rx = ox + dx * root;
    const ry = oy + dy * root;
    const rz = oz + dz * root;

    const p = record.point;

    const px = p[0] = rx;
    const py = p[1] = ry;
    const pz = p[2] = rz;

    const onx = (px - cx) / this.radius;
    const ony = (py - cy) / this.radius;
    const onz = (pz - cz) / this.radius;

    record.setFaceNormal(ray, onx, ony, onz);
    record.material = this.material;

    record.t = root;

    return true;
  }
}
