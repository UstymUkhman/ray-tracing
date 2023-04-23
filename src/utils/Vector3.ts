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

  public multiply (t: number): this;
  public multiply (v: Vector3): Vector3;
  public multiply (f: Vector3 | number): Vector3
  {
    if (typeof f !== 'number')
      return this.set(
        this.vec[0] * f.x,
        this.vec[1] * f.y,
        this.vec[2] * f.z
      );

    const t = f as number;

    this.vec[0] *= t;
    this.vec[1] *= t;
    this.vec[2] *= t;

    return this;
  }

  public divide (t: number): this;
  public divide (v: Vector3): Vector3;
  public divide (f: Vector3 | number): Vector3
  {
    return typeof f === 'number'
      ? this.multiply((1 / f))
      : this.set(
        this.vec[0] / f.x,
        this.vec[1] / f.y,
        this.vec[2] / f.z
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

  public get lengthSquared (): number {
    return this.dot(this);
  }

  public cross (vec: Vector3): this {
    return this.set(
      this.vec[1] * vec.z - this.vec[2] * vec.y,
      this.vec[2] * vec.x - this.vec[0] * vec.z,
      this.vec[0] * vec.y - this.vec[1] * vec.x
    );
  }

  public dot (vec: Vector3): number {
    return this.vec[0] * vec.x +
      this.vec[1] * vec.y +
      this.vec[2] * vec.z;
  }

  public add (vec: Vector3): this {
    this.vec[0] += vec.x;
    this.vec[1] += vec.y;
    this.vec[2] += vec.z;

    return this;
  }

  public sub (vec: Vector3): this {
    this.vec[0] -= vec.x;
    this.vec[1] -= vec.y;
    this.vec[2] -= vec.z;

    return this;
  }

  public get unitVector (): this {
    return this.divide(this.length);
  }

  public get length (): number {
    return Math.sqrt(this.lengthSquared);
  }

  public get clone (): Vector3 {
    return new Vector3(...this.get());
  }

  public reset (s = 0.0): this {
    return this.set(s, s, s);
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

  public negate (): this {
    this.vec[0] *= -1;
    this.vec[1] *= -1;
    this.vec[2] *= -1;

    return this;
  }
}
