/* eslint-disable no-dupe-class-members */
type Vec3 = [number, number, number];

export default class Vector3
{
  private readonly vec = [0.0, 0.0, 0.0] as Vec3;

  public constructor (x?: number, y?: number, z?: number) {
    if (x && y && z) {
      this.vec[0] = x;
      this.vec[1] = y;
      this.vec[2] = z;
    }
  }

  public negate (): Vector3 {
    return new Vector3(
      -this.vec[0],
      -this.vec[1],
      -this.vec[2]
    );
  }

  public get (v: number): number {
    return this.vec[v];
  }

  public add (vec: Vector3): this;
  public add (v1: Vector3, v2: Vector3): Vector3;
  public add (v1: Vector3, v2?: Vector3): Vector3
  {
    if (v2) return new Vector3(
      v1.x + v2.x,
      v1.y + v2.y,
      v1.z + v2.z
    );

    this.vec[0] += v1.x;
    this.vec[1] += v1.y;
    this.vec[2] += v1.z;

    return this;
  }

  public sub (v1: Vector3, v2: Vector3): Vector3 {
    return new Vector3(
      v1.x - v2.x,
      v1.y - v2.y,
      v1.z - v2.z
    );
  }

  public divide (t: number): this;
  public divide (vec: Vector3, t: number): Vector3;
  public divide (vec: Vector3 | number, t?: number): Vector3
  {
    return t
      ? this.multiply((1 / t), vec as Vector3)
      : this.multiply(1 / (vec as number));
  }

  public multiply (t: number): this;
  public multiply (v1: number, v2: Vector3): Vector3;
  public multiply (v1: Vector3, v2: number): Vector3;
  public multiply (v1: Vector3, v2: Vector3): Vector3;
  public multiply (v1: Vector3 | number, v2?: Vector3 | number): Vector3
  {
    if (v2) return typeof v2 === 'number'
      ? this.multiply(v2, v1 as Vector3)
      : typeof v1 === 'number'
        ? new Vector3(v1 * v2.x, v1 * v2.y, v1 * v2.z)
        : new Vector3(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);

    const t = v1 as number;

    this.vec[0] *= t;
    this.vec[1] *= t;
    this.vec[2] *= t;

    return this;
  }

  public set (x: number, y: number, z: number): this {
    this.vec[0] = x;
    this.vec[1] = y;
    this.vec[2] = z;

    return this;
  }

  public cross (v1: Vector3, v2: Vector3): Vector3 {
    return new Vector3(
      v1.y * v2.z - v1.z * v2.y,
      v1.z * v2.x - v1.x * v2.z,
      v1.x * v2.y - v1.y * v2.x
    );
  }

  public dot (v1: Vector3, v2: Vector3): number {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  }

  public unitVector (vec: Vector3): Vector3 {
    return this.divide(vec, vec.length);
  }

  public get lengthSquared (): number {
    return this.vec[0] * this.vec[0] +
      this.vec[1] * this.vec[1] +
      this.vec[2] * this.vec[2];
  }

  public get length (): number {
    return Math.sqrt(this.lengthSquared);
  }

  public get x (): number {
    return this.vec[0];
  }

  public get y (): number {
    return this.vec[1];
  }

  public get z (): number {
    return this.vec[2];
  }

  public print (): string {
    const [x, y, z] = this.vec;
    return `Vector3 { x: ${x}, y: ${y}, z: ${z} }`;
  }
}
