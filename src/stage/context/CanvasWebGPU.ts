import { Events } from '@/stage/scene';
import { getRGB } from '@/utils/Color';
import * as Config from '@/stage/Config';
import { World } from '@/stage/hittables';
import Canvas from '@/stage/context/Canvas';
import Shader from '@/shaders/webgpu/main.wgsl';
import Tracer from '@/shaders/webgpu/Tracer.wgsl';
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
  private tracerBindGroup!: GPUBindGroup;
  private computeBindGroup!: GPUBindGroup;
  private tracerUniformBuffer!: GPUBuffer;
  private tracerPipeline!: GPURenderPipeline;
  private computePipeline!: GPUComputePipeline;

  private readonly tracerUniform = new Uint32Array(8);
  protected declare readonly context: GPUCanvasContext;
  private readonly workgroupCount: [number, number] = [0, 0];

  public constructor (params: SceneParams, onInitialize?: () => void) {
    super(params);

    this.initializeWebGPU()
      .then(
        this.createRenderPipeline.bind(
          this,
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
    if (!navigator.gpu)
      throw new Error('WebGPU is not supported on this browser.');

    if (!this.context)
      throw new Error('Failed to initialize WebGPU context.');

    const gpuAdapter = await navigator.gpu.requestAdapter({
      powerPreference: 'high-performance',
      forceFallbackAdapter: false
    });

    if (gpuAdapter)
      this.adapter = gpuAdapter;
    else
      throw new Error('No appropriate GPUAdapter found.');

    const requiredFeatures: GPUFeatureName[] = [];
    this.format = navigator.gpu.getPreferredCanvasFormat();
    this.format === 'bgra8unorm' && requiredFeatures.push('bgra8unorm-storage');

    if (!this.adapter.features.has('bgra8unorm-storage')) throw new Error(
      '"bgra8unorm-storage" is not supported on this GPUAdapter.'
    );

    this.device = await this.adapter.requestDevice({ requiredFeatures });

    this.context.configure({
      usage: GPUTextureUsage.RENDER_ATTACHMENT |
        GPUTextureUsage.STORAGE_BINDING,

      device: this.device,
      format: this.format
    });
  }

  private createRenderPipeline (tracer?: string, onInitialize?: () => void): void {
    this.clear();

    tracer === 'WebGPU'
      ? this.createTracerPipeline()
      : this.createImagePipeline();

    onInitialize?.();
  }

  private createComputePipeline (size = 16): GPUTexture {
    const world = new World();
    const spheres = 5; // world.hittables.length;

    this.tracerUniform[0] = Config.maxDepth;

    // this.createUniforms(world.createSpheresUniforms());

    const framebuffer = this.device.createTexture({
      size: [Config.width, Config.height],
      label: 'Framebuffer Texture',
      format: 'rgba16float',

      usage:
        GPUTextureUsage.RENDER_ATTACHMENT |
        GPUTextureUsage.STORAGE_BINDING |
        GPUTextureUsage.TEXTURE_BINDING
    });

    this.tracerUniformBuffer = this.device.createBuffer({
      label: 'Tracer Uniform',
      size: this.tracerUniform.byteLength,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });

    const computeBindGroupLayout = this.device.createBindGroupLayout({
      label: 'Compute Bind Group Layout',

      entries: [{
        binding: 0,
        visibility: GPUShaderStage.COMPUTE,
        storageTexture: { format: framebuffer.format }
      }, {
        binding: 1,
        buffer: { type: 'uniform' },
        visibility: GPUShaderStage.COMPUTE
      }]
    });

    const computePipelineLayout = this.device.createPipelineLayout({
      bindGroupLayouts: [computeBindGroupLayout],
      label: 'Compute Pipeline Layout'
    });

    this.computeBindGroup = this.device.createBindGroup({
      layout: computeBindGroupLayout,
      label: 'Compute Bind Group',

      entries: [{
        binding: 0,
        resource: framebuffer.createView()
      }, {
        binding: 1,
        resource: { buffer: this.tracerUniformBuffer }
      }]
    });

    const shaderModule = this.device.createShaderModule({
      label: 'Compute Shader',
      code: `const SPHERES = ${spheres}u;\n${Tracer}`
    });

    this.computePipeline = this.device.createComputePipeline({
      layout: computePipelineLayout,
      label: 'Compute Pipeline',

      compute: {
        constants: { size },
        module: shaderModule,
        entryPoint: 'mainCompute'
      }
    });

    this.workgroupCount[0] = Math.ceil(Config.width / size);
    this.workgroupCount[1] = Math.ceil(Config.height / size);

    world.dispose();
    return framebuffer;
  }

  private createTracerPipeline (): void {
    const framebuffer = this.createComputePipeline();

    const shaderModule = this.device.createShaderModule({
      label: 'Tracer Shader',
      code: Shader
    });

    this.tracerPipeline = this.device.createRenderPipeline({
      label: 'Tracer Pipeline',
      layout: 'auto',

      vertex: {
        entryPoint: 'mainVertex',
        module: shaderModule
      },

      fragment: {
        targets: [{ format: this.format }],
        entryPoint: 'mainFragment',
        module: shaderModule
      }
    });

    this.tracerBindGroup = this.device.createBindGroup({
      layout: this.tracerPipeline.getBindGroupLayout(0),
      label: 'Tracer Bind Group',

      entries: [{
        binding: 0,
        resource: framebuffer.createView()
      }, {
        binding: 1,
        resource: this.sampler
      }]
    });
  }

  private createImagePipeline (): void {
    const { width, height } = Config;

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
      label: 'Image Shader',
      code: Shader
    });

    this.imagePipeline = this.device.createRenderPipeline({
      label: 'Image Pipeline',
      layout: 'auto',

      vertex: {
        entryPoint: 'mainVertex',
        module: shaderModule
      },

      fragment: {
        targets: [{ format: this.format }],
        entryPoint: 'mainFragment',
        module: shaderModule
      }
    });

    this.imageBindGroup = this.device.createBindGroup({
      layout: this.imagePipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: this.imageTexture.createView() },
        { binding: 1, resource: this.sampler }
      ]
    });
  }

  private setActiveTexture (data: Uint8ClampedArray): void {
    const commandEncoder = this.device.createCommandEncoder();
    const { width, height } = Config;
    this.setImageData(data);

    this.device.queue.copyExternalImageToTexture(
      { source: this.image, flipY: true },
      { texture: this.imageTexture },
      { width, height }
    );

    const renderPass = commandEncoder.beginRenderPass({
      colorAttachments: [{
        view: this.context.getCurrentTexture().createView(),
        storeOp: 'store',
        loadOp: 'clear'
      }]
    });

    renderPass.setBindGroup(0, this.imageBindGroup);
    renderPass.setPipeline(this.imagePipeline);
    renderPass.draw(6); renderPass.end();

    this.device.queue.submit([
      commandEncoder.finish()
    ]);
  }

  public override drawImage (pixels?: Uint8ClampedArray): Promise<void> | void {
    if (pixels) return this.setActiveTexture(pixels);

    const commandEncoder = this.device.createCommandEncoder();
    const computePass = commandEncoder.beginComputePass();

    this.tracerUniform[1] = 100; // samples

    this.tracerUniform[4] = Math.random() * 0xffffffff; // seed.x
    this.tracerUniform[5] = Math.random() * 0xffffffff; // seed.y
    this.tracerUniform[6] = Math.random() * 0xffffffff; // seed.z

    this.device.queue.writeBuffer(
      this.tracerUniformBuffer,
      0,
      this.tracerUniform
    );

    computePass.setPipeline(this.computePipeline);
    computePass.setBindGroup(0, this.computeBindGroup);
    computePass.dispatchWorkgroups(...this.workgroupCount);

    computePass.end();

    const renderPass = commandEncoder.beginRenderPass({
      colorAttachments: [{
        view: this.context.getCurrentTexture().createView(),
        storeOp: 'store',
        loadOp: 'clear'
      }]
    });

    renderPass.setBindGroup(0, this.tracerBindGroup);
    renderPass.setPipeline(this.tracerPipeline);
    renderPass.draw(6); renderPass.end();

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

  private get sampler (): GPUSampler {
    return this.device.createSampler({
      addressModeU: 'clamp-to-edge',
      addressModeV: 'clamp-to-edge',

      minFilter: 'linear',
      magFilter: 'linear'
    });
  }

  public get ready (): boolean {
    return !!this.imagePipeline;
  }
}
