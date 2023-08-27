import { clamp, random } from './Number';

export default class Vector3
{
  private readonly vec: StaticArray<f64> = new StaticArray<f64>(3);

  public constructor (x: f64 = 0.0, y: f64 = x, z: f64 = x) {
    this.vec[0] = x;
    this.vec[1] = y;
    this.vec[2] = z;
  }

  public refract (normal: Vector3, eoe: f64): this {
    const theta = Math.min(this.clone.negate.dot(normal), 1.0);
    this.copy(normal.clone.multiplyScalar(theta).add(this).multiplyScalar(eoe));

    const angle = Math.abs(1.0 - this.lengthSquared);
    return this.add(normal.multiplyScalar(-Math.sqrt(angle)));
  }

  public randomHemisphere (normal: Vector3): this {
    this.randomUnitSphere;
    return this.dot(normal) > 0.0 ? this : this.negate;
  }

  public random (min = 0.0, max = 1.0): this {
    return this.set(
      random(min, max),
      random(min, max),
      random(min, max)
    );
  }

  public reflect (normal: Vector3): Vector3 {
    return this.sub(normal.clone.multiplyScalar(this.dot(normal) * 2));
  }

  public set (x: f64, y: f64, z: f64): this {
    this.vec[0] = x;
    this.vec[1] = y;
    this.vec[2] = z;

    return this;
  }

  public get randomUnitVector (): Vector3 {
    return this.randomUnitSphere.unitVector;
  }

  public get randomUnitSphere (): this {
    for ( ; ; )
      if (this.random(-1.0).lengthSquared < 1.0)
        return this;
  }

  public get randomUnitDisk (): this {
    for ( ; ; ) {
      this.random(-1.0);
      this.vec[2] = 0.0;

      if (this.lengthSquared < 1.0)
        return this;
    }
  }

  public multiply (vec: Vector3): this {
    return this.set(
      this.vec[0] * vec.x,
      this.vec[1] * vec.y,
      this.vec[2] * vec.z
    );
  }

  public multiplyScalar (t: f64): this {
    this.vec[0] *= t;
    this.vec[1] *= t;
    this.vec[2] *= t;

    return this;
  }

  public divide (vec: Vector3): this {
    return this.set(
      this.vec[0] / vec.x,
      this.vec[1] / vec.y,
      this.vec[2] / vec.z
    );
  }

  public divideScalar (t: f64): this {
    return this.multiplyScalar(1.0 / t);
  }

  public cross (vec: Vector3): this {
    return this.set(
      this.vec[1] * vec.z - this.vec[2] * vec.y,
      this.vec[2] * vec.x - this.vec[0] * vec.z,
      this.vec[0] * vec.y - this.vec[1] * vec.x
    );
  }

  public copy (vec: Vector3): this {
    return this.set(vec.x, vec.y, vec.z);
  }

  public get lengthSquared (): f64 {
    return this.dot(this);
  }

  public getComponent (v: u8): f64 {
    return this.vec[v];
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

  public dot (vec: Vector3): f64 {
    return this.vec[0] * vec.x +
      this.vec[1] * vec.y +
      this.vec[2] * vec.z;
  }

  public get(): StaticArray<f64> {
    return this.vec;
  }

  public get unitVector (): this {
    return this.divideScalar(this.length);
  }

  public get nearZero (): bool {
    return Math.abs(this.vec[0]) < 1e-8 &&
      Math.abs(this.vec[1]) < 1e-8 &&
      Math.abs(this.vec[2]) < 1e-8;
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

  public get print (): string {
    return `Vector3 { x: ${this.vec[0]}, y: ${this.vec[1]}, z: ${this.vec[2]} }`;
  }

  public get negate (): this {
    this.vec[0] *= -1.0;
    this.vec[1] *= -1.0;
    this.vec[2] *= -1.0;

    return this;
  }

  public get length (): f64 {
    return Math.sqrt(this.lengthSquared);
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
      clamp(i32(this.vec[0] * 256), 0, 0xff),
      clamp(i32(this.vec[1] * 256), 0, 0xff),
      clamp(i32(this.vec[2] * 256), 0, 0xff)
    );
  }

  public get xu8 (): u8 {
    return <u8>this.vec[0];
  }

  public get yu8 (): u8 {
    return <u8>this.vec[1];
  }

  public get zu8 (): u8 {
    return <u8>this.vec[2];
  }

  public get x (): f64 {
    return this.vec[0];
  }

  public get y (): f64 {
    return this.vec[1];
  }

  public get z (): f64 {
    return this.vec[2];
  }
}
