import { Material } from '../materials';
import Ray from '../Ray';

export default class Record
{
  public t: f32 = 0.0;

  public material!: Material;
  public frontFace: bool = false;

  // Convert These:
  public readonly point: StaticArray<f32> = new StaticArray<f32>(3);
  public readonly normal: StaticArray<f32> = new StaticArray<f32>(3);

  @inline
  public copy (record: Record): void {
    this.frontFace = record.frontFace;

    const n = record.normal;
    const p = record.point;

    this.normal[0] = n[0];
    this.normal[1] = n[1];
    this.normal[2] = n[2];

    this.point[0] = p[0];
    this.point[1] = p[1];
    this.point[2] = p[2];

    this.t = record.t;
  }

  @inline
  public setFaceNormal (
    ray: Ray,
    onx: f32,
    ony: f32,
    onz: f32
  ): void {
    const dx = ray.dirX;
    const dy = ray.dirY;
    const dz = ray.dirZ;

    this.frontFace = (dx * onx + dy * ony + dz * onz) < 0.0;

    if (!this.frontFace) {
      onx = -onx;
      ony = -ony;
      onz = -onz;
    }

    this.normal[0] = onx;
    this.normal[1] = ony;
    this.normal[2] = onz;
  }
}
