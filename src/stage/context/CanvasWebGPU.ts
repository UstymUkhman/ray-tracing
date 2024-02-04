import Camera from '@/stage/Camera';
import { Events } from '@/stage/scene';
import { getRGB } from '@/utils/Color';
import * as Config from '@/stage/config';
import { World } from '@/stage/hittables';
import Canvas from '@/stage/context/Canvas';
import Shader from '@/shaders/webgpu/main.wgsl';
import Tracer from '@/shaders/webgpu/Tracer.wgsl';
import type { SceneParams } from '@/stage/scene/types';
import type { SphereUniform } from '@/stage/context/types';

export default class CanvasWebGPU extends Canvas
{
  private samples = 0.0;

  private device!: GPUDevice;
  private adapter!: GPUAdapter;
  private format!: GPUTextureFormat;

  // CPU-Computed Image Texture:
  private imageTexture!: GPUTexture;
  private imageBindGroup!: GPUBindGroup;
  private imagePipeline!: GPURenderPipeline;

  // GPU-Computed Image Texture:
  private computeBindGroup!: GPUBindGroup;
  private tracerUniformBuffer!: GPUBuffer;
  private computePipeline!: GPUComputePipeline;

  private readonly tracerUniform = new Uint32Array(8);
  protected declare readonly context: GPUCanvasContext;
  private readonly workgroupCount: [number, number] = [0, 0];
  private readonly draw = this.drawImage.bind(this, undefined);

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
      ? this.createComputePipeline()
      : this.createImagePipeline();

    onInitialize?.();
  }

  private createComputePipeline (size = 16): void {
    const world = new World();
    this.createImagePipeline(true);
    const { width, height } = Config;
    const spheres = world.hittables.length;

    const [cameraUniformBuffer, spheresUniformBuffer] =
      this.createUniforms(world.createSpheresUniforms());

    const computeBindGroupLayout = this.device.createBindGroupLayout({
      label: 'Compute Bind Group Layout',

      entries: [{
        binding: 0,
        buffer: { type: 'uniform' },
        visibility: GPUShaderStage.COMPUTE
      }, {
        binding: 1,
        buffer: { type: 'uniform' },
        visibility: GPUShaderStage.COMPUTE
      }, {
        binding: 2,
        buffer: { type: 'uniform' },
        visibility: GPUShaderStage.COMPUTE
      }, {
        binding: 3,
        buffer: { type: 'storage' },
        visibility: GPUShaderStage.COMPUTE
      }, {
        binding: 4,
        visibility: GPUShaderStage.COMPUTE,
        storageTexture: { format: this.imageTexture.format }
      }]
    });

    const computePipelineLayout = this.device.createPipelineLayout({
      bindGroupLayouts: [computeBindGroupLayout],
      label: 'Compute Pipeline Layout'
    });

    const colorBuffer = this.device.createBuffer({
      label: 'Compute Color Buffer',
      usage: GPUBufferUsage.STORAGE,
      size: width * height * 16
    });

    this.computeBindGroup = this.device.createBindGroup({
      layout: computeBindGroupLayout,
      label: 'Compute Bind Group',

      entries: [{
        binding: 0,
        resource: { buffer: cameraUniformBuffer }
      }, {
        binding: 1,
        resource: { buffer: this.tracerUniformBuffer }
      }, {
        binding: 2,
        resource: { buffer: spheresUniformBuffer }
      }, {
        binding: 3,
        resource: { buffer: colorBuffer }
      }, {
        binding: 4,
        resource: this.imageTexture.createView()
      }]
    });

    const shaderModule = this.device.createShaderModule({
      code: `const SPHERES = ${spheres}u;\n${Tracer}`,
      label: 'Compute Shader'
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

    this.workgroupCount[0] = Math.ceil(width / size);
    this.workgroupCount[1] = Math.ceil(height / size);

    world.dispose();
  }

  private createImagePipeline (compute = false): void {
    const imageLabel = compute && 'Framebuffer Texture' || 'CPU Computed Image';
    const storageUsage = compute && GPUTextureUsage.STORAGE_BINDING || 0;
    // Doesn't really matter since "rgba16float" works in both cases:
    const imageFormat = compute && 'rgba16float' || 'rgba8unorm';

    this.imageTexture = this.device.createTexture({
      size: [Config.width, Config.height],
      format: imageFormat,
      label: imageLabel,

      usage:
        GPUTextureUsage.RENDER_ATTACHMENT |
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.COPY_DST |
        storageUsage
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
      label: 'Image Bind Group',

      entries: [
        { binding: 0, resource: this.imageTexture.createView() },
        { binding: 1, resource: this.sampler }
      ]
    });
  }

  public override drawImage (pixels?: Uint8ClampedArray): Promise<void> | void {
    if (pixels) return this.setActiveTexture(pixels);

    const commandEncoder = this.device.createCommandEncoder();
    const computePass = commandEncoder.beginComputePass();

    this.tracerUniform[1] = ++this.samples;

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

    renderPass.setBindGroup(0, this.imageBindGroup);
    renderPass.setPipeline(this.imagePipeline);
    renderPass.draw(6); renderPass.end();

    this.samples < Config.samples &&
      requestAnimationFrame(this.draw);

    this.device.queue.submit([
      commandEncoder.finish()
    ]);

    Events.dispatch(
      'WebGPU::Stats::Update',
      { sample: this.samples }
    );
  }

  private createUniforms (spheres: SphereUniform[]): GPUBuffer[] {
    this.tracerUniform[0] = Config.maxDepth;

    this.tracerUniformBuffer = this.device.createBuffer({
      label: 'Compute Tracer Uniform',
      size: this.tracerUniform.byteLength,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });

    const {
      u,
      v,
      origin,
      vertical,
      horizontal,
      lowerLeftCorner,
      lensRadius
    } = new Camera().uniform;

    const cameraUniform = new Float32Array(24);

    const cameraUniformBuffer = this.device.createBuffer({
      size: cameraUniform.byteLength,
      label: 'Compute Camera Uniform',
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });

    cameraUniform[0]  = u[0];
    cameraUniform[1]  = u[1];
    cameraUniform[2]  = u[2];

    cameraUniform[4]  = v[0];
    cameraUniform[5]  = v[1];
    cameraUniform[6]  = v[2];

    cameraUniform[8]  = origin[0];
    cameraUniform[9]  = origin[1];
    cameraUniform[10] = origin[2];

    cameraUniform[12] = vertical[0];
    cameraUniform[13] = vertical[1];
    cameraUniform[14] = vertical[2];

    cameraUniform[16] = horizontal[0];
    cameraUniform[17] = horizontal[1];
    cameraUniform[18] = horizontal[2];

    cameraUniform[20] = lowerLeftCorner[0];
    cameraUniform[21] = lowerLeftCorner[1];
    cameraUniform[22] = lowerLeftCorner[2];

    cameraUniform[23] = lensRadius;

    this.device.queue.writeBuffer(cameraUniformBuffer, 0, cameraUniform);

    const spheresUniform = new Float32Array(spheres.length * 8);

    const spheresUniformBuffer = this.device.createBuffer({
      size: spheresUniform.byteLength,
      label: 'Compute Spheres Uniform',
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });

    for (let s = 0, u = 0, l = spheres.length; s < l; s++, u += 8)
    {
      spheresUniform[u + 0] = spheres[s].center[0]; // transform.x
      spheresUniform[u + 1] = spheres[s].center[1]; // transform.y
      spheresUniform[u + 2] = spheres[s].center[2]; // transform.z
      spheresUniform[u + 3] = spheres[s].radius;    // transform.w

      spheresUniform[u + 4] = spheres[s].material.albedo[0]; // material.r
      spheresUniform[u + 5] = spheres[s].material.albedo[1]; // material.g
      spheresUniform[u + 6] = spheres[s].material.albedo[2]; // material.b
      spheresUniform[u + 7] = spheres[s].material.extra;     // material.a
    }

    this.device.queue.writeBuffer(spheresUniformBuffer, 0, spheresUniform);

    return [cameraUniformBuffer, spheresUniformBuffer];
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
