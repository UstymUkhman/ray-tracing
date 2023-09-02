import { Material } from '../materials';
import Ray from '../Ray';

export default class Record
{
  public frontFace: bool = false;
  public material!: Material;

  public normalX: f32 = 0.0;
  public normalY: f32 = 0.0;
  public normalZ: f32 = 0.0;

  public pointX: f32 = 0.0;
  public pointY: f32 = 0.0;
  public pointZ: f32 = 0.0;

  public t: f32 = 0.0;

  @inline
  public copy (record: Record): void {
    this.frontFace = record.frontFace;

    this.normalX = record.normalX;
    this.normalY = record.normalY;
    this.normalZ = record.normalZ;

    this.pointX = record.pointX;
    this.pointY = record.pointY;
    this.pointZ = record.pointZ;

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

    this.normalX = onx;
    this.normalY = ony;
    this.normalZ = onz;
  }
}
