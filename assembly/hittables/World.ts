import Vector3 from '../utils/Vector3';
import { List, Sphere } from './';

export default class World
{
  private readonly hittables: List = new List();

  public constructor ()
  {
    this.addSphere(0.5, new Vector3(0.0, 0.0, -1.0));
    this.addSphere(100.0, new Vector3(0.0, -100.5, -1.0));
  }

  private addSphere (radius: f64, center: Vector3 /*, material: Material */): void
  {
    this.hittables.add(new Sphere(radius, center /*, material */));
  }

  public get objects (): List {
    return this.hittables;
  }
}
