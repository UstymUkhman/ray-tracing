import Vector3 from '@/utils/Vector3';

export default class Ray
{
  private readonly spherePos = new Vector3(0.0, 0.0, -1.0);
  private readonly col = new Vector3(1.0, 1.0, 1.0);
  private readonly sphereRad = 0.5;

  public constructor (
    private readonly orig: Vector3,
    private readonly dir: Vector3
  ) {}

  private at (t: number): Vector3 {
    return this.orig.clone.add(this.dir.multiply(t));
  }

  private sphereHit (center: Vector3, radius: number): number {
    const oc = this.orig.clone.sub(center);

    const a = this.dir.lengthSquared;
    const halfB = oc.dot(this.dir);

    const c = oc.lengthSquared - radius * radius;
    const d = halfB * halfB - a * c;

    return d > 0.0
      ? (-halfB - Math.sqrt(d)) / a
      : -1.0;
  }

  public get color (): Vector3 {
    let t = this.sphereHit(this.spherePos, this.sphereRad);

    if (t > 0.0) return this.at(t)
      .sub(this.spherePos.clone).unitVector
      .add(this.col).multiply(0.5);

    t = (this.dir.unitVector.y + 1.0) * 0.5;

    return this.col.reset(1.0)
      .multiply(1.0 - t)
      .add(new Vector3(0.5, 0.7, 1.0)
      .multiply(t));
  }
}
