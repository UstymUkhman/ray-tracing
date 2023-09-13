import { type Lambertian, Metal, Dielectric } from '@/stage/materials';
import { type Sphere, World } from '@/stage/hittables';
import type { SceneParams } from '@/stage/scene/types';
import CanvasWebGL from '@/stage/context/CanvasWebGL';
import Fragment from '@/shaders/webgl2/main.frag';
import Vertex from '@/shaders/webgl2/main.vert';
import type { Vec3 } from '@/utils/Vector3';

export default class CanvasWebGL2 extends CanvasWebGL
{
  protected declare readonly context: WebGL2RenderingContext;

  public constructor(params: SceneParams, fragment = Fragment, vertex = Vertex) {
    super(params, fragment, vertex);
  }

  public createWorld (): void {
    const world = new World();
    const spheres: USphere[] = [];

    for (let h = 0, l = world.hittables.length; h < l; h++) {
      const sphere = world.hittables[h] as Sphere;

      const material = {
        albedo: [1.0, 1.0, 1.0] as Vec3,
        extra: 0.0,
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

      spheres.push({
        center: sphere.center.get(),
        radius: sphere.radius,
        material
      });
    }

    world.dispose();
    this.updateUniforms(spheres);
  }

  private updateUniforms (spheres: USphere[]): void {
    for (let s = 0, l = spheres.length; s < l; s++)
    {
      const albedo = this.context.getUniformLocation(this.program, `spheres[${s}].material.albedo`);
      const extra = this.context.getUniformLocation(this.program, `spheres[${s}].material.extra`);
      const type = this.context.getUniformLocation(this.program, `spheres[${s}].material.type`);

      const center = this.context.getUniformLocation(this.program, `spheres[${s}].center`);
      const radius = this.context.getUniformLocation(this.program, `spheres[${s}].radius`);

      this.context.uniform3fv(albedo, spheres[s].material.albedo);
      this.context.uniform1f(extra, spheres[s].material.extra);
      this.context.uniform1ui(type, spheres[s].material.type);

      this.context.uniform3fv(center, spheres[s].center);
      this.context.uniform1f(radius, spheres[s].radius);
    }
  }

  public override drawImage (pixels?: Uint8ClampedArray): void {
    pixels
      ? super.drawImage(pixels)
      : this.context.drawArrays(this.context.TRIANGLES, 0.0, 6.0);
  }
}

type USphere = {
  radius: number;
  center: Vec3;

  material: {
    type: number;
    albedo: Vec3;
    extra: number;
  }
};
