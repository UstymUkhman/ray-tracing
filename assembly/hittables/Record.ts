import { Material } from '../materials';
import Vector3 from '../utils/Vector3';
import Ray from '../Ray';

export default class Record
{
  public t: f64 = 0.0;

  public material!: Material;
  public frontFace: bool = false;

  public readonly point: Vector3 = new Vector3();
  public readonly normal: Vector3 = new Vector3();

  @inline
  public copy (record: Record): void {
    this.frontFace = record.frontFace;
    this.normal.copy(record.normal);
    this.point.copy(record.point);
    this.t = record.t;
  }

  @inline
  public setFaceNormal (ray: Ray, outwardNormal: Vector3): void {
    this.frontFace = ray.direction.dot(outwardNormal) < 0.0;
    this.normal.copy(this.frontFace ? outwardNormal : outwardNormal.negate);
  }
}
