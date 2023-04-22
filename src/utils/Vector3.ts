/* eslint-disable no-dupe-class-members */
type Value<V> = V extends undefined ? Vec3 : number;
type Vec3 = [number, number, number];
type Arg = number | undefined;

export default class Vector3
{
  private readonly vec = [0.0, 0.0, 0.0] as Vec3;

  public constructor (x = 0.0, y?: number, z?: number) {
    this.vec[0] = x;
    this.vec[1] = y ?? x;
    this.vec[2] = z ?? x;
  }

  public negate (): Vector3 {
    return new Vector3(
      -this.vec[0],
      -this.vec[1],
      -this.vec[2]
    );
  }

  public add (vec: Vector3): this {
    this.vec[0] += vec.x;
    this.vec[1] += vec.y;
    this.vec[2] += vec.z;

    return this;
  }

  public static add (v1: Vector3, v2: Vector3): Vector3 {
    return new Vector3(
      v1.x + v2.x,
      v1.y + v2.y,
      v1.z + v2.z
    );
  }

  public static sub (v1: Vector3, v2: Vector3): Vector3 {
    return new Vector3(
      v1.x - v2.x,
      v1.y - v2.y,
      v1.z - v2.z
    );
  }

  public static divide (vec: Vector3, t: number): Vector3 {
    return vec.multiply((1 / t), vec as Vector3);
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

  public static multiply (vec: Vector3, t: number): Vector3 {
    return new Vector3(
      vec.x * t,
      vec.y * t,
      vec.x * t
    );
  }

  public get<V extends Arg = undefined>(v?: V): Value<V>;
  public get(v?: number): Vec3 | number {
    return v === undefined ? this.vec : this.vec[v];
  }

  public set (x: number, y: number, z: number): this {
    this.vec[0] = x;
    this.vec[1] = y;
    this.vec[2] = z;

    return this;
  }

  public static unitVector (vec: Vector3): Vector3 {
    return vec.divide(vec.length);
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
