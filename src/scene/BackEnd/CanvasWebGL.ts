import { getRGB } from '@/utils/Color';
import Canvas from '@/scene/BackEnd/Canvas';
import Vertex from '@/shaders/webgl/main.vert';
import Fragment from '@/shaders/webgl/main.frag';
import type { BackEndContext } from '@/scene/types';

type ShaderType =
  | WebGLRenderingContextBase['FRAGMENT_SHADER']
  | WebGLRenderingContextBase['VERTEX_SHADER'];

export default class CanvasWebGL extends Canvas
{
  private program!: WebGLProgram;
  private color!: WebGLUniformLocation;

  protected declare readonly context: WebGLRenderingContext;

  public constructor(
    canvas: HTMLCanvasElement, context = 'webgl',
    fragment = Fragment, vertex = Vertex
  ) {
    super(canvas, context as BackEndContext);
    this.createProgram(fragment, vertex);
    this.createScene();
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

    if (!this.context.getProgramParameter(this.program, this.context.LINK_STATUS)) {
      return console.error(
        `Unable to initialize shader program: ${this.context.getProgramInfoLog(
          this.program
        )}`
      );
    }

    this.context.clear(this.context.COLOR_BUFFER_BIT);
    const { r, g, b } = getRGB(this.clearColor, 1.0);

    this.context.clearColor(r, g, b, 1.0);
    this.context.useProgram(this.program);
  }

  private createScene (): void {
    this.color = this.context.getUniformLocation(this.program, 'color') as WebGLUniformLocation;
    const resolution = this.context.getUniformLocation(this.program, 'resolution');
    const position = this.context.getAttribLocation(this.program, 'position');

    this.context.uniform2f(resolution, this.width, this.height);
    this.context.bindBuffer(this.context.ARRAY_BUFFER, this.context.createBuffer());

    this.context.enableVertexAttribArray(position);
    this.context.vertexAttribPointer(position, 2.0, this.context.FLOAT, false, 0.0, 0.0);
  }

  public override clear (): void {
    this.context.clear(this.context.COLOR_BUFFER_BIT);
  }

  public override draw (x: number, y: number, color: number): void {
    const { r, g, b } = getRGB(color, 1.0);
    this.context.uniform4f(this.color, r, g, b, 1.0);

    this.context.bufferData(
      this.context.ARRAY_BUFFER,
      new Float32Array([x + 0.5, y + 0.5]),
      this.context.STATIC_DRAW
    );

    this.context.drawArrays(this.context.POINTS, 0.0, 1.0);
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
}
