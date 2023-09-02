import { random } from './Number';

@final
export default class Vector3
{
  public constructor (
    public x: f32 = 0.0,
    public y: f32 = x,
    public z: f32 = x
  ) {}

  @inline
  public random (min: f32 = 0.0, max: f32 = 1.0): this {
    this.x = random(min, max);
    this.y = random(min, max);
    this.z = random(min, max);

    return this;
  }

  @inline // @operator('*')
  public multiply (vec: Vector3): this {
    this.x = this.x * vec.x;
    this.y = this.y * vec.y;
    this.z = this.z * vec.z;

    return this;
  }

  @inline // @operator('*')
  public multiplyScalar (t: f32): this {
    this.x *= t;
    this.y *= t;
    this.z *= t;

    return this;
  }

  @inline // @operator('/')
  public divideScalar (t: f32): this {
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

  @inline // @operator('=')
  public copy (vec: Vector3): this {
    this.x = vec.x;
    this.y = vec.y;
    this.z = vec.z;

    return this;
  }

  @inline
  public get lengthSquared (): f32 {
    return this.dot(this);
  }

  @inline // @operator('-')
  public sub (vec: Vector3): this {
    this.x -= vec.x;
    this.y -= vec.y;
    this.z -= vec.z;

    return this;
  }

  @inline
  private dot (vec: Vector3): f32 {
    return this.x * vec.x + this.y * vec.y + this.z * vec.z;
  }

  @inline
  public get unitVector (): this {
    return this.divideScalar(this.length);
  }

  @inline
  public get clone (): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }

  @inline
  public get length (): f32 {
    return Mathf.sqrt(this.lengthSquared);
  }
}
