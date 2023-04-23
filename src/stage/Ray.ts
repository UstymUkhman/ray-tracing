import Vector3 from '@/utils/Vector3';

export default class Ray
{
  private readonly col = new Vector3(1.0, 1.0, 1.0);

  public constructor (
    private readonly orig: Vector3,
    private readonly dir: Vector3
  ) {}

  public at (t: number): Vector3 {
    return this.orig.add(this.dir.multiply(t));
  }

  public get color (): Vector3 {
    const t = (this.dir.unitVector.y + 1.0) * 0.5;

    return this.col.reset(1.0)
      .multiply(1.0 - t)
      .add(new Vector3(0.5, 0.7, 1.0)
      .multiply(t));
  }
}
