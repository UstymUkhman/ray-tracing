import type { SceneParams } from '@/stage/scene/types';
import Fragment from '@/shaders/webgl/main.frag?raw';
import Vertex from '@/shaders/webgl/main.vert?raw';
import Canvas from '@/stage/context/Canvas';
import { getRGB } from '@/utils/Color';

type ShaderType =
  | WebGLRenderingContextBase['FRAGMENT_SHADER']
  | WebGLRenderingContextBase['VERTEX_SHADER'];

export default class CanvasWebGL extends Canvas
{
  private texture!: WebGLTexture;
  protected program!: WebGLProgram;

  protected readonly textureData = new Uint8ClampedArray(
    this.width * this.height * this.channels
  );

  protected declare readonly context: WebGLRenderingContext;

  public constructor(params: SceneParams, fragment = Fragment, vertex = Vertex)
  {
    super(params);

    this.createProgram(fragment, vertex);
    this.createScene();
    this.clear();
  }

  private loadShader(source: string, type: ShaderType): WebGLShader | void {
    const shader = this.context.createShader(type) as WebGLShader;
    this.context.shaderSource(shader, source);
    this.context.compileShader(shader);

    if (!this.context.getShaderParameter(shader, this.context.COMPILE_STATUS)) {
      console.error(
        `An error occurred compiling the shaders: ${this.context.getShaderInfoLog(
          shader
        )}`
      );

      return this.context.deleteShader(shader);
    }

    return shader;
  }

  private setBufferData(width = this.width, height = this.height): void {
    this.context.bufferData(
      this.context.ARRAY_BUFFER,

      new Float32Array([
        0.0, 0.0,
        width, 0.0,
        0.0, height,
        0.0, height,
        width, 0.0,
        width, height
      ]),

      this.context.STATIC_DRAW
    );
  }

  private createProgram(frag: string, vert: string): void {
    const fragment = this.loadShader(frag, this.context.FRAGMENT_SHADER);
    const vertex = this.loadShader(vert, this.context.VERTEX_SHADER);
    this.program = this.context.createProgram() as WebGLProgram;

    if (vertex && fragment) {
      this.context.attachShader(this.program, fragment);
      this.context.attachShader(this.program, vertex);
      this.context.linkProgram(this.program);
    }

    if (!this.context.getProgramParameter(this.program, this.context.LINK_STATUS))
      return console.error(
        `Unable to initialize shader program: ${
          this.context.getProgramInfoLog(this.program)
        }`
      );

    this.context.clear(this.context.COLOR_BUFFER_BIT);
    const rgb = getRGB(this.clearColor, 1.0);

    const r = rgb.get('r') ?? 0.0;
    const g = rgb.get('g') ?? 0.0;
    const b = rgb.get('b') ?? 0.0;

    this.context.clearColor(r, g, b, 1.0);
    this.context.useProgram(this.program);
  }

  protected setTextureParameters (): void {
    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_WRAP_S, this.context.CLAMP_TO_EDGE);
    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_WRAP_T, this.context.CLAMP_TO_EDGE);

    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_MIN_FILTER, this.context.NEAREST);
    this.context.texParameteri(this.context.TEXTURE_2D, this.context.TEXTURE_MAG_FILTER, this.context.NEAREST);
  }

  protected setActiveTexture (
    data: Uint8ClampedArray | null = this.textureData,
    texture = this.texture
  ): void {
    this.context.activeTexture(this.context.TEXTURE0);
    this.context.bindTexture(this.context.TEXTURE_2D, texture);

    this.context.texImage2D(
      this.context.TEXTURE_2D,
      0.0,
      this.context.RGB,
      this.width,
      this.height,
      0.0,
      this.context.RGB,
      this.context.UNSIGNED_BYTE,
      data
    );
  }

  private createScene (): void {
    const coords = this.context.getAttribLocation(this.program, 'coords');
    this.context.bindBuffer(this.context.ARRAY_BUFFER, this.context.createBuffer());

    this.setBufferData(1.0, 1.0);
    this.context.enableVertexAttribArray(coords);
    this.context.vertexAttribPointer(coords, 2.0, this.context.FLOAT, false, 0.0, 0.0);

    const position = this.context.getAttribLocation(this.program, 'position');
    this.context.bindBuffer(this.context.ARRAY_BUFFER, this.context.createBuffer());

    this.setBufferData();
    this.context.enableVertexAttribArray(position);
    this.context.vertexAttribPointer(position, 2.0, this.context.FLOAT, false, 0.0, 0.0);

    const resolution = this.context.getUniformLocation(this.program, 'resolution');
    this.context.uniform2f(resolution, this.width, this.height);

    this.texture = this.context.createTexture() as WebGLTexture;

    this.setBufferData();
    this.setActiveTexture();
    this.setTextureParameters();
  }

  protected override clear (): void {
    this.context.clear(this.context.COLOR_BUFFER_BIT);
  }

  public override drawImage (pixels: Uint8ClampedArray): void {
    this.setActiveTexture(pixels);
    this.context.drawArrays(this.context.TRIANGLES, 0.0, 6.0);
  }
}
