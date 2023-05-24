import { type Material, Lambertian, Metal, Dielectric } from '@/stage/materials';
import { List, Sphere } from '@/stage/hittables';
import Vector3 from '@/utils/Vector3';

export default class World
{
  private readonly hittables = new List();

  public constructor () {
    const groundMaterial = new Lambertian(new Vector3(0.8, 0.8, 0.0));
    const centerMaterial = new Lambertian(new Vector3(0.1, 0.2, 0.5));

    const rightMaterial = new Metal(new Vector3(0.8, 0.6, 0.2), 0.0);
    const leftMaterial = new Dielectric(1.5);

    this.addSphere(new Vector3(0.0, -100.5, -1.0), 100.0, groundMaterial);
    this.addSphere(new Vector3(0.0, 0.0, -1.0), 0.5, centerMaterial);
    this.addSphere(new Vector3(-1.0, 0.0, -1.0), 0.5, leftMaterial);
    this.addSphere(new Vector3(-1.0, 0.0, -1.0), -0.4, leftMaterial);
    this.addSphere(new Vector3(1.0, 0.0, -1.0), 0.5, rightMaterial);
  }

  private addSphere (center: Vector3, radius: number, material: Material): void {
    this.hittables.add(new Sphere(center, radius, material));
  }

  public get objects (): List {
    return this.hittables;
  }
}
