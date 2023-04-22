import Viewport from '@/utils/Viewport';
import Vector3 from '@/utils/Vector3';

export default class Camera
{
  private readonly height = 2.0;
  private readonly focalLength = 1.0;
  public readonly origin = new Vector3();

  private readonly width = Viewport.size.ratio * this.height;
  public readonly vertical = new Vector3(0.0, this.height, 0.0);
  public readonly horizontal = new Vector3(this.width, 0.0, 0.0);

  public readonly lowerLeftCorner = Vector3.sub(
    Vector3.sub(
      Vector3.sub(this.origin, Vector3.divide(this.horizontal, 2.0)),
      Vector3.divide(this.vertical, 2.0)
    ),
    new Vector3(0.0, 0.0, this.focalLength)
  );
}
