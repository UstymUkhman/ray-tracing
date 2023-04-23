import Viewport from '@/utils/Viewport';
import Vector3 from '@/utils/Vector3';

export default class Camera
{
  private readonly height = 2.0;
  private readonly focalLength = 1.0;
  public readonly origin = new Vector3();

  private readonly width = Viewport.size.ratio * this.height;
  private readonly vertical = new Vector3(0.0, this.height, 0.0);
  private readonly horizontal = new Vector3(this.width, 0.0, 0.0);

  private readonly lowerLeftCorner = this.origin.clone
      .sub(this.horizontal.clone.divide(2.0))
      .sub(this.vertical.clone.divide(2.0))
      .sub(new Vector3(0.0, 0.0, this.focalLength));

  public getDirection (u: number, v: number): Vector3 {
    return this.lowerLeftCorner.clone
      .add(this.horizontal.clone.multiply(u))
      .add(this.vertical.clone.multiply(v))
      .sub(this.origin);
  }
}
