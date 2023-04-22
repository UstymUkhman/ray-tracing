import Vector3 from '@/utils/Vector3';

export default class Ray
{
  public constructor (
    private readonly orig: Vector3,
    private readonly dir: Vector3
  ) {}

  public at (t: number): Vector3 {
    return this.orig.add(this.dir.multiply(t));
  }

  public get color (): Vector3 {
    const unitDirection = Vector3.unitVector(this.dir);
    const t = (unitDirection.y + 1.0) * 0.5;

    return new Vector3(1.0, 1.0, 1.0).multiply(1.0 - t)
      .add(new Vector3(0.5, 0.7, 1.0).multiply(t));
      // .add(new Vector3(0.0).multiply(t));
  }

  public get origin (): Vector3 {
    return this.orig;
  }

  public get direction (): Vector3 {
    return this.dir;
  }
}
