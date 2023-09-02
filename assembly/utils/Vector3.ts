import { random } from './Number';

export default class Vector3
{
  public constructor (
    public x: f64 = 0.0,
    public y: f64 = x,
    public z: f64 = x
  ) {}

  @inline
  public random (min: f64 = 0.0, max: f64 = 1.0): this {
    this.x = random(min, max);
    this.y = random(min, max);
    this.z = random(min, max);

    return this;
  }

  @inline
  public multiply (vec: Vector3): this {
    this.x = this.x * vec.x;
    this.y = this.y * vec.y;
    this.z = this.z * vec.z;

    return this;
  }

  @inline
  public multiplyScalar (t: f64): this {
    this.x *= t;
    this.y *= t;
    this.z *= t;

    return this;
  }

  @inline
  public divideScalar (t: f64): this {
    return this.multiplyScalar(1.0 / t);
  }

  @inline
  public cross (vec: Vector3): this {
    const x = this.y * vec.z - this.z * vec.y;
    const y = this.z * vec.x - this.x * vec.z;
    const z = this.x * vec.y - this.y * vec.x;

    this.x = x;
    this.y = y;
    this.z = z;

    return this;
  }

  @inline
  public reset (s: f64 = 0.0): this {
    this.x = s;
    this.y = s;
    this.z = s;

    return this;
  }

  @inline
  public copy (vec: Vector3): this {
    this.x = vec.x;
    this.y = vec.y;
    this.z = vec.z;

    return this;
  }

  @inline
  public get lengthSquared (): f64 {
    return this.dot(this);
  }

  @inline
  public sub (vec: Vector3): this {
    this.x -= vec.x;
    this.y -= vec.y;
    this.z -= vec.z;

    return this;
  }

  @inline
  public dot (vec: Vector3): f64 {
    return this.x * vec.x +
      this.y * vec.y +
      this.z * vec.z;
  }

  @inline
  public get unitVector (): this {
    return this.divideScalar(this.length);
  }

  @inline
  public get clone (): Vector3 {
    return new Vector3(
      this.x,
      this.y,
      this.z
    );
  }

  @inline
  public get length (): f64 {
    return Math.sqrt(this.lengthSquared);
  }
}
