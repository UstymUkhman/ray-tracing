import { List, Sphere } from '@/stage/hittables';
import Vector3 from '@/utils/Vector3';

export default class World
{
  private readonly hittables = new List();

  public constructor () {
    this.addSphere(new Vector3(0.0, 0.0, -1.0), 0.5);
    this.addSphere(new Vector3(0.0, -100.5, -1.0), 100.0);
  }

  private addSphere (center: Vector3, radius: number): void {
    this.hittables.add(new Sphere(center, radius));
  }

  public get objects (): List {
    return this.hittables;
  }
}
