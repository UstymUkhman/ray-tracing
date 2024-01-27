import { type Material, Lambertian, Metal, Dielectric } from '@/stage/materials';
import { type Vec3, default as Vector3 } from '@/utils/Vector3';
import { type Hittable, List, Sphere } from '@/stage/hittables';
import type { SphereUniform } from '@/stage/context/types';
import { random } from '@/utils/Number';

export default class World
{
  private readonly list = new List();
  private readonly color = new Vector3();

  public constructor ()
  {
    this.addSphere(
      1000.0,
      new Vector3(0.0, -1000.0, 0.0),
      new Lambertian(new Vector3(0.5))
    );

    this.generateSmallSpheres();

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

  public createSpheresUniforms (): SphereUniform[]
  {
    return this.hittables.map(hittable => {
      const sphere = hittable as Sphere;

      const material = {
        albedo: [1.0, 1.0, 1.0] as Vec3,
        extra: -1.0,
        type: 0
      };

      if (sphere.material instanceof Metal) {
        material.albedo = sphere.material.albedo.get();
        material.extra = sphere.material.fuzz;
        material.type = 1;
      }

      else if (sphere.material instanceof Dielectric) {
        material.extra = sphere.material.refraction;
        material.type = 2;
      }

      else
        material.albedo = (sphere.material as Lambertian).albedo.get();

      return {
        center: sphere.center.get(),
        radius: sphere.radius,
        material
      };
    });
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
