import { type Lambertian, Metal, Dielectric } from '@/stage/materials';
import type { SphereUniform } from '@/stage/context/types';
import { type Sphere, World } from '@/stage/hittables';
import type { SceneParams } from '@/stage/scene/types';
import CanvasWebGL from '@/stage/context/CanvasWebGL';
import Fragment from '@/shaders/webgl2/main.frag';
import Vertex from '@/shaders/webgl2/main.vert';
import type { Vec3 } from '@/utils/Vector3';
import * as Config from '@/stage/Config';
import { Events } from '@/stage/scene';

export default class CanvasWebGL2 extends CanvasWebGL
{
  private samples = 0.0;

  private texture1!: WebGLTexture;
  private texture2!: WebGLTexture;

  private frameBuffer1!: WebGLFramebuffer;
  private frameBuffer2!: WebGLFramebuffer;

  protected declare readonly context: WebGL2RenderingContext;
  private readonly draw = this.drawImage.bind(this, undefined);
  private readonly samplesUniform!: WebGLUniformLocation | null;

  public constructor(params: SceneParams, fragment = Fragment) {
    if (params.tracer !== 'WebGL2')
      super(params, fragment, Vertex);

    else {
      const world = new World();
      const spheres = world.hittables.length;

      super(
        params,

        fragment.replace(
          '#version 300 es',
          `#version 300 es\n#define SPHERES ${spheres}u`
        ),

        Vertex.replace(
          '#version 300 es',
          '#version 300 es\n#define CAMERA'
        )
      );

      this.createWorld(world);
      this.createFrameBufferTextures();
      this.samplesUniform = this.context.getUniformLocation(this.program, 'samples');
    }
  }

  private bindFrameBufferTextures (
    frameBuffer: WebGLFramebuffer,
    texture: WebGLTexture
  ): void {
    this.context.bindFramebuffer(this.context.FRAMEBUFFER, frameBuffer);

    this.context.framebufferTexture2D(
      this.context.FRAMEBUFFER,
      this.context.COLOR_ATTACHMENT0,
      this.context.TEXTURE_2D,
      texture,
      0.0
    );
  }

  private createWorld (world: World): void {
    const spheres: SphereUniform[] = [];

    for (let h = 0, l = world.hittables.length; h < l; h++) {
      const sphere = world.hittables[h] as Sphere;

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

      spheres.push({
        center: sphere.center.get(),
        radius: sphere.radius,
        material
      });
    }

    world.dispose();
    this.updateUniforms(spheres);
  }

  private createFrameBufferTextures (): void {
    this.texture1 = this.context.createTexture() as WebGLTexture;
    this.setActiveTexture(this.textureData, this.texture1);
    this.setTextureParameters();

    this.texture2 = this.context.createTexture() as WebGLTexture;
    this.setActiveTexture(null, this.texture2);
    this.setTextureParameters();

    this.frameBuffer1 = this.context.createFramebuffer() as WebGLFramebuffer;
    this.bindFrameBufferTextures(this.frameBuffer1, this.texture1);

    this.frameBuffer2 = this.context.createFramebuffer() as WebGLFramebuffer;
    this.bindFrameBufferTextures(this.frameBuffer2, this.texture2);
  }

  private updateUniforms (spheres: SphereUniform[]): void {
    for (let s = 0, l = spheres.length; s < l; s++)
    {
      const material = this.context.getUniformLocation(this.program, `spheres[${s}].material`);
      const transform = this.context.getUniformLocation(this.program, `spheres[${s}].transform`);

      this.context.uniform4fv(material, [...spheres[s].material.albedo, spheres[s].material.extra]);
      this.context.uniform4fv(transform, [...spheres[s].center, spheres[s].radius]);
    }

    const maxDepth = this.context.getUniformLocation(this.program, 'maxDepth');
    const height = this.context.getUniformLocation(this.program, 'height');
    const width = this.context.getUniformLocation(this.program, 'width');

    this.context.uniform1ui(maxDepth, Config.maxDepth);
    this.context.uniform1f(height, Config.height);
    this.context.uniform1f(width, Config.width);
  }

  public override drawImage (pixels?: Uint8ClampedArray): void {
    if (pixels) return super.drawImage(pixels);

    this.context.uniform1ui(this.samplesUniform, ++this.samples);
    this.samples < Config.samples && requestAnimationFrame(this.draw);

    this.context.bindFramebuffer(this.context.FRAMEBUFFER, this.frameBuffer2);
    this.context.bindTexture(this.context.TEXTURE_2D, this.texture1);
    this.context.drawArrays(this.context.TRIANGLES, 0.0, 6.0);

    this.context.bindFramebuffer(this.context.FRAMEBUFFER, null);
    this.context.bindTexture(this.context.TEXTURE_2D, this.texture2);
    this.context.drawArrays(this.context.TRIANGLES, 0.0, 6.0);

    const frameBuffer = this.frameBuffer1;
    this.frameBuffer1 = this.frameBuffer2;
    this.frameBuffer2 = frameBuffer;

    const texture = this.texture1;
    this.texture1 = this.texture2;
    this.texture2 = texture;

    Events.dispatch(
      'WebGL2::Stats::Update',
      { sample: this.samples }
    );
  }
}
