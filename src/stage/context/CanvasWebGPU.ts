import { Events } from '@/stage/scene';
import { getRGB } from '@/utils/Color';
import * as Config from '@/stage/Config';
import Canvas from '@/stage/context/Canvas';
import Shader from '@/shaders/webgpu/main.frag.wgsl';
import type { SceneParams } from '@/stage/scene/types';

export default class CanvasWebGPU extends Canvas
{
  private device!: GPUDevice;
  private adapter!: GPUAdapter;
  private format!: GPUTextureFormat;

  // CPU-Computed Image Texture:
  private imageTexture!: GPUTexture;
  private imageBindGroup!: GPUBindGroup;
  private imagePipeline!: GPURenderPipeline;

  // GPU-Computed Image Texture:
  private tracerPipeline!: GPURenderPipeline;

  protected declare readonly context: GPUCanvasContext;

  public constructor (
    params: SceneParams,
    onInitialize?: () => void,
    shader = Shader
  ) {
    super(params);

    this.initializeWebGPU()
      .then(
        this.createRenderPipeline.bind(
          this,
          shader,
          params.tracer,
          onInitialize
        )
      )
      .catch(error => Events.dispatch(
        'WebGPU::Init::Fail',
        error.message
      )
    );
  }

  private async initializeWebGPU (): Promise<void> {
    if (!navigator.gpu) throw new Error(
      'WebGPU is not supported on this browser.'
    );

    const gpuAdapter = await navigator.gpu.requestAdapter({
      powerPreference: 'high-performance',
      forceFallbackAdapter: false
    });

    if (gpuAdapter)
      this.adapter = gpuAdapter;
    else
      throw new Error('No appropriate GPUAdapter found.');

    if (!this.context) throw new Error('Failed to initialize WebGPU context.');

    this.device = await this.adapter.requestDevice();
    this.format = navigator.gpu.getPreferredCanvasFormat();
    this.context.configure({ device: this.device, format: this.format });
  }

  private createRenderPipeline (
    shader: string,
    tracer?: string,
    onInitialize?: () => void
  ): void {
    this.clear();

    tracer === 'WebGPU'
      ? this.createTracerPipeline(shader)
      : this.createImagePipeline(shader);

    onInitialize?.();
  }

  private createTracerPipeline (shader: string): void {
    const shaderModule = this.device.createShaderModule({
      label: 'Tracer Shader',
      code: shader
    });

    this.tracerPipeline = this.device.createRenderPipeline({
      label: 'Tracer Pipeline',
      layout: 'auto',

      vertex: {
        entryPoint: 'mainVert',
        module: shaderModule
      },

      fragment: {
        targets: [{ format: this.format }],
        entryPoint: 'mainFrag',
        module: shaderModule
      }
    });
  }

  private createImagePipeline (shader: string): void {
    const { width, height } = Config;

    const sampler = this.device.createSampler({
      addressModeU: 'clamp-to-edge',
      addressModeV: 'clamp-to-edge',

      minFilter: 'nearest',
      magFilter: 'nearest'
    });

    this.imageTexture = this.device.createTexture({
      label: 'CPU Computed Image',
      size: [width, height],
      format: 'rgba8unorm',

      usage:
        GPUTextureUsage.RENDER_ATTACHMENT |
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.COPY_DST
    });

    const shaderModule = this.device.createShaderModule({
      label: 'Main Shader',
      code: shader
    });

    this.imagePipeline = this.device.createRenderPipeline({
      label: 'Image Pipeline',
      layout: 'auto',

      vertex: {
        entryPoint: 'mainVert',
        module: shaderModule
      },

      fragment: {
        targets: [{ format: this.format }],
        entryPoint: 'mainFrag',
        module: shaderModule
      }
    });

    this.imageBindGroup = this.device.createBindGroup({
      layout: this.imagePipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: this.imageTexture.createView() },
        { binding: 1, resource: sampler }
      ]
    });
  }

  private setActiveTexture (data: Uint8ClampedArray): void {
    const { width, height } = Config;
    this.setImageData(data);

    this.device.queue.copyExternalImageToTexture(
      { source: this.image, flipY: true },
      { texture: this.imageTexture },
      { width, height }
    );

    const commandEncoder = this.device.createCommandEncoder({
      label: 'Renderer Command Encoder'
    });

    const pass = commandEncoder.beginRenderPass({
      colorAttachments: [{
        view: this.context.getCurrentTexture().createView(),
        storeOp: 'store',
        loadOp: 'clear'
      }]
    });

    pass.setBindGroup(0, this.imageBindGroup);
    pass.setPipeline(this.imagePipeline);

    pass.draw(6);
    pass.end();

    this.device.queue.submit([
      commandEncoder.finish()
    ]);
  }

  public override drawImage (pixels?: Uint8ClampedArray): Promise<void> | void {
    if (pixels) return this.setActiveTexture(pixels);

    const commandEncoder = this.device.createCommandEncoder({
      label: 'Renderer Command Encoder'
    });

    const pass = commandEncoder.beginRenderPass({
      colorAttachments: [{
        view: this.context.getCurrentTexture().createView(),
        storeOp: 'store',
        loadOp: 'clear'
      }]
    });

    pass.setPipeline(this.tracerPipeline);
    pass.draw(6);
    pass.end();

    this.device.queue.submit([
      commandEncoder.finish()
    ]);
  }

  protected override clear (): void {
    const commandEncoder = this.device.createCommandEncoder();
    const rgb = getRGB(this.clearColor, 1.0);

    const r = rgb.get('r') ?? 0.0;
    const g = rgb.get('g') ?? 0.0;
    const b = rgb.get('b') ?? 0.0;

    const renderPass = commandEncoder.beginRenderPass({
      colorAttachments: [{
        view: this.context.getCurrentTexture().createView(),
        clearValue: [r, g, b, 1.0],
        storeOp: 'store',
        loadOp: 'clear'
      }]
    });

    renderPass.end();

    this.device.queue.submit([
      commandEncoder.finish()
    ]);
  }

  public get ready (): boolean {
    return !!this.imagePipeline;
  }
}
