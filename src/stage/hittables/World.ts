import { type Material, Lambertian, Metal, Dielectric } from '@/stage/materials';
import { List, Sphere } from '@/stage/hittables';
import { random } from '@/utils/Number';
import Vector3 from '@/utils/Vector3';

export default class World
{
  private readonly hittables = new List();
  private readonly color = new Vector3();

  public constructor ()
  {
    this.addSphere(
      new Vector3(0.0, -1000.0, 0.0),
      1000.0,
      new Lambertian(new Vector3(0.5))
    );

    this.generateSmallSpheres();

    this.addSphere(
      new Vector3(0.0, 1.0, 0.0),
      1.0,
      new Dielectric(1.5)
    );

    this.addSphere(
      new Vector3(-4.0, 1.0, 0.0),
      1.0,
      new Lambertian(new Vector3(0.4, 0.2, 0.1))
    );

    this.addSphere(
      new Vector3(4.0, 1.0, 0.0),
      1.0,
      new Metal(new Vector3(0.7, 0.6, 0.5), 0.0)
    );
  }

  private addSphere (center: Vector3, radius: number, material: Material): void
  {
    this.hittables.add(new Sphere(center, radius, material));
  }

  private generateSmallSpheres (): void
  {
    for (let i = -11; i < 11; i++)
    {
      for (let j = -11; j < 11; j++)
      {
        const center = new Vector3(
          Math.random() * 0.9 + i,
          0.2,
          Math.random() * 0.9 + j
        );

        const offset = new Vector3(4.0, 0.2, 0.0);

        if (center.clone.sub(offset).length > 0.9)
        {
          const rand = Math.random();

          if (rand < 0.8)
          {
            this.color.random().multiply(this.color.random());
            const sphereMaterial = new Lambertian(this.color);
            this.addSphere(center, 0.2, sphereMaterial);
          }
          else if (rand < 0.95)
          {
            this.color.random(0.5);
            const fuzz = random(0.0, 0.5);

            const sphereMaterial = new Metal(this.color, fuzz);
            this.addSphere(center, 0.2, sphereMaterial);
          }
          else
          {
            const sphereMaterial = new Dielectric(1.5);
            this.addSphere(center, 0.2, sphereMaterial);
          }
        }
      }
    }
  }

  public get objects (): List {
    return this.hittables;
  }
}
