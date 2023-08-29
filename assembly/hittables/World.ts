import { Material, Lambertian, Metal } from '../materials';
import Vector3 from '../utils/Vector3';
import { List, Sphere } from './';

export default class World
{
  private readonly hittables: List = new List();

  public constructor ()
  {
    this.addSphere(
      100.0,
      new Vector3(0.0, -100.5, -1.0),
      new Lambertian(new Vector3(0.8, 0.8, 0.0))
    );

    this.addSphere(
      0.5,
      new Vector3(0.0, 0.0, -1.0),
      new Lambertian(new Vector3(0.7, 0.3, 0.3))
    );

    this.addSphere(
      0.5,
      new Vector3(-1.0, 0.0, -1.0),
      new Metal(new Vector3(0.8), 0.3)
    );

    this.addSphere(
      0.5,
      new Vector3(1.0, 0.0, -1.0),
      new Metal(new Vector3(0.8, 0.6, 0.2), 1.0)
    );
  }

  private addSphere (radius: f64, center: Vector3, material: Material): void
  {
    this.hittables.add(new Sphere(radius, center, material));
  }

  public get objects (): List {
    return this.hittables;
  }
}
