import { type Material, Lambertian, Metal } from '@/stage/materials';
import { List, Sphere } from '@/stage/hittables';
import Vector3 from '@/utils/Vector3';

export default class World
{
  private readonly hittables = new List();

  public constructor () {
    const groundMaterial = new Lambertian(new Vector3(0.8, 0.8, 0.0));
    const centerMaterial = new Lambertian(new Vector3(0.7, 0.3, 0.3));
    const rightMaterial = new Metal(new Vector3(0.8, 0.6, 0.2), 1.0);
    const leftMaterial = new Metal(new Vector3(0.8), 0.3);

    this.addSphere(new Vector3(0.0, -100.5, -1.0), 100.0, groundMaterial);
    this.addSphere(new Vector3(0.0, 0.0, -1.0), 0.5, centerMaterial);
    this.addSphere(new Vector3(1.0, 0.0, -1.0), 0.5, rightMaterial);
    this.addSphere(new Vector3(-1.0, 0.0, -1.0), 0.5, leftMaterial);
  }

  private addSphere (center: Vector3, radius: number, material: Material): void {
    this.hittables.add(new Sphere(center, radius, material));
  }

  public get objects (): List {
    return this.hittables;
  }
}
