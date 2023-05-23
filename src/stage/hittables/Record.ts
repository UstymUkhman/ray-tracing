import type Ray from '@/stage/Ray';
import Vector3 from '@/utils/Vector3';

class Record
{
  public t = 0.0;
  public frontFace = false;
  public readonly point = new Vector3();
  public readonly normal = new Vector3();

  public copy (record: Record): void {
    this.frontFace = record.frontFace;
    this.normal.copy(record.normal);
    this.point.copy(record.point);
    this.t = record.t;
  }

  public setFaceNormal (ray: Ray, outwardNormal: Vector3): void {
    this.frontFace = ray.direction.clone.dot(outwardNormal) < 0.0;
    this.normal.copy(this.frontFace ? outwardNormal : outwardNormal.negate);
  }
}

export default new Record();
