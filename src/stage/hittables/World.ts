import { type Material, Lambertian, Metal, Dielectric } from '@/stage/materials';
import { type Hittable, List, Sphere } from '@/stage/hittables';
import { random } from '@/utils/Number';
import Vector3 from '@/utils/Vector3';

export default class World
{
  private readonly list = new List();
  private readonly color = new Vector3();

  public constructor (spheres = 11)
  {
    this.addSphere(
      1000.0,
      new Vector3(0.0, -1000.0, 0.0),
      new Lambertian(new Vector3(0.5))
    );

    this.generateSmallSpheres(spheres);

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

  private addSphere (radius: number, center: Vector3, material: Material): void
  {
    this.list.add(new Sphere(radius, center, material));
  }

  private generateSmallSpheres (s: number): void
  {
    for (let i = -s; i < s; i++)
    {
      for (let j = -s; j < s; j++)
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

  public get hittables (): Hittable[] {
    return this.list.hittables;
  }

  public get objects (): List {
    return this.list;
  }

  public dispose (): void {
    this.list.dispose();
    this.color.reset();
  }
}
