import { clamp, random } from '@/utils/Number';
export type Vec3 = [number, number, number];

export default class Vector3
{
  private readonly vec: Vec3 = [0.0, 0.0, 0.0];

  public constructor (x = 0.0, y = x, z = x) {
    this.vec[0] = x;
    this.vec[1] = y;
    this.vec[2] = z;
  }

  public refract (normal: Vector3, eoe: number): this {
    const theta = Math.min(this.clone.negate.dot(normal), 1.0);
    this.copy(normal.clone.multiply(theta).add(this).multiply(eoe));

    const angle = Math.abs(1.0 - this.lengthSquared);
    return this.add(normal.multiply(-Math.sqrt(angle)));
  }

  public set (x: number, y: number, z: number): this {
    this.vec[0] = x;
    this.vec[1] = y;
    this.vec[2] = z;

    return this;
  }

  /* public randomHemisphere (normal: Vector3): this {
    this.randomUnitSphere;
    return this.dot(normal) > 0.0 ? this : this.negate;
  } */

  public multiply (t: number): this;
  // eslint-disable-next-line no-dupe-class-members
  public multiply (v: Vector3): Vector3;
  // eslint-disable-next-line no-dupe-class-members
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
  // eslint-disable-next-line no-dupe-class-members
  public divide (v: Vector3): Vector3;
  // eslint-disable-next-line no-dupe-class-members
  public divide (f: Vector3 | number): Vector3
  {
    return typeof f === 'number'
      ? this.multiply(1.0 / f)
      : this.set(
        this.vec[0] / f.x,
        this.vec[1] / f.y,
        this.vec[2] / f.z
      );
  }

  public random (min = 0.0, max = 1.0): this {
    return this.set(
      random(min, max),
      random(min, max),
      random(min, max)
    );
  }

  public reflect (normal: Vector3): Vector3 {
    return this.sub(normal.clone.multiply(this.dot(normal) * 2.0));
  }

  public get randomNormalized (): Vector3 {
    return this.randomUnitSphere.normalize;
  }

  public get randomUnitSphere (): this {
    for ( ; ; )
      if (this.random(-1.0).lengthSquared < 1.0)
        return this;
  }

  public get lengthSquared (): number {
    return this.dot(this);
  }

  public get randomUnitDisk (): this {
    for ( ; ; ) {
      this.random(-1.0);
      this.vec[2] = 0.0;

      if (this.lengthSquared < 1.0)
        return this;
    }
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

  public copy (vec: Vector3): this {
    const { x, y, z } = vec;
    return this.set(x, y, z);
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

  public get nearZero (): boolean {
    return Math.abs(this.vec[0]) < 1e-8 &&
      Math.abs(this.vec[1]) < 1e-8 &&
      Math.abs(this.vec[2]) < 1e-8;
  }

  public get normalize (): this {
    return this.divide(this.length);
  }

  public get length (): number {
    return Math.sqrt(this.lengthSquared);
  }

  public get clone (): Vector3 {
    return new Vector3(
      this.vec[0],
      this.vec[1],
      this.vec[2]
    );
  }

  public reset (s = 0.0): this {
    return this.set(s, s, s);
  }

  public get negate (): this {
    return this.multiply(-1.0);
  }

  public get sqrt (): this {
    return this.set(
      Math.sqrt(this.vec[0]),
      Math.sqrt(this.vec[1]),
      Math.sqrt(this.vec[2])
    );
  }

  public get rgb (): this {
    return this.set(
      clamp(this.vec[0] * 256 | 0, 0, 0xff),
      clamp(this.vec[1] * 256 | 0, 0, 0xff),
      clamp(this.vec[2] * 256 | 0, 0, 0xff)
    );
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

  public get (): Vec3 {
    return [...this.vec];
  }
}
