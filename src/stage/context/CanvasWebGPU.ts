import { Events } from '@/stage/scene';
import { getRGB } from '@/utils/Color';
import Canvas from '@/stage/context/Canvas';
import type { SceneParams } from '@/stage/scene/types';

export default class CanvasWebGPU extends Canvas
{
  private device!: GPUDevice;
  private adapter!: GPUAdapter;
  private format!: GPUTextureFormat;

  protected declare readonly context: GPUCanvasContext;

  public constructor (params: SceneParams) {
    super(params);

    this.initializeWebGPU()
      .then(this.clear.bind(this))
      .catch(error => Events.dispatch(
        'WebGPU::Init::Fail', error.message
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  public override drawImage (pixels?: Uint8ClampedArray): void {}
}
