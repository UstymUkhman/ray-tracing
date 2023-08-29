import Vector3 from '../utils/Vector3';
import Ray from '../Ray';

export default class Record
{
  public t: f64 = 0.0;

  public frontFace: bool = false;
  // public material!: Material;

  public readonly point: Vector3 = new Vector3();
  public readonly normal: Vector3 = new Vector3();

  public copy (record: Record): void {
    this.frontFace = record.frontFace;
    this.normal.copy(record.normal);
    this.point.copy(record.point);
    this.t = record.t;
  }

  public setFaceNormal (ray: Ray, outwardNormal: Vector3): void {
    this.frontFace = ray.direction.dot(outwardNormal) < 0.0;
    this.normal.copy(this.frontFace ? outwardNormal : outwardNormal.negate);
  }
}
