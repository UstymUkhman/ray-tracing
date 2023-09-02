import { Material, Lambertian, Metal, Dielectric } from '../materials';
import { random } from '../utils/Number';
import Vector3 from '../utils/Vector3';
import { List, Sphere } from './';

export default class World
{
  private readonly hittables: List = new List(488);
  private readonly color: Vector3 = new Vector3();

  private sphereCount: u16 = 0;

  public constructor ()
  {
    this.addSphere(
      1000.0,
      new Vector3(0.0, -1000.0, 0.0),
      new Lambertian(new Vector3(0.5))
    );

    // this.generateSmallSpheres();

    this.addSphere(
      1.0,
      new Vector3(0.0, 1.0, 0.0),
      new Dielectric(1.5)
    );

    this.addSphere(
      1.0,
      new Vector3(-4.0, 1.0, 0.0),
      new Lambertian(new Vector3(0.4, 0.2, 0.1))
    );

    this.addSphere(
      1.0,
      new Vector3(4.0, 1.0, 0.0),
      new Metal(new Vector3(0.7, 0.6, 0.5), 0.0)
    );
  }

  private addSphere (radius: f32, center: Vector3, material: Material): void
  {
    this.hittables.add(new Sphere(radius, center, material), this.sphereCount++);
  }

  private generateSmallSpheres (): void
  {
    for (let i: i8 = -11; i < 11; ++i)
    {
      for (let j: i8 = -11; j < 11; ++j)
      {
        const center = new Vector3(
          Mathf.random() * 0.9 + i,
          0.2,
          Mathf.random() * 0.9 + j
        );

        const offset = new Vector3(4.0, 0.2, 0.0);

        if (center.clone.sub(offset).length > 0.9)
        {
          const rand = Mathf.random();

          if (rand < 0.8)
          {
            this.color.random().multiply(this.color.random());
            const sphereMaterial = new Lambertian(this.color);
            this.addSphere(0.2, center, sphereMaterial);
          }
          else if (rand < 0.95)
          {
            this.color.random(0.5);
            const fuzz = random(0.0, 0.5);

            const sphereMaterial = new Metal(this.color, fuzz);
            this.addSphere(0.2, center, sphereMaterial);
          }
          else
          {
            const sphereMaterial = new Dielectric(1.5);
            this.addSphere(0.2, center, sphereMaterial);
          }
        }
      }
    }
  }

  public get objects (): List {
    return this.hittables;
  }
}
