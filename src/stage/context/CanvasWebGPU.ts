import { Events } from '@/stage/scene';
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
    this.initializeWebGPU().catch(error => {
      Events.dispatch(
        'WebGPU::Init::Fail',
        error.message
      );
    });
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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public override clear (): void {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  public override drawImage (pixels?: Uint8ClampedArray): void {}
}
