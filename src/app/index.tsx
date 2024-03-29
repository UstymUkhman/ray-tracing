import { createSignal, onMount } from 'solid-js';
import * as Config from '@/stage/config';
import { Stats } from '@/components';
import Stage from '@/stage';
import '@/app/app.css';

export const App = () =>
{
  let webgl2!: HTMLCanvasElement;
  let webgpu!: HTMLCanvasElement;
  let typescript!: HTMLCanvasElement;
  let assemblyscript!: HTMLCanvasElement;

  const [offscreen, setOffscreen] = createSignal(false);
  let container: HTMLElement | ((el: HTMLElement) => void) | undefined;

  onMount(() => {
    const { width, height } = Config;
    const section = container as HTMLElement;

    section.style.setProperty('--width', `${width}px`);
    section.style.setProperty('--height', `${height}px`);
    section.style.setProperty('--ratio', `${width} / ${height}`);

    setOffscreen(
      new Stage([
        webgl2,
        webgpu,
        typescript,
        assemblyscript
      ]).offscreen
    );
  });

  return (
    <section ref={container}>
      <Stats offscreen={offscreen()}>
        <canvas
          data-tracer="TypeScript"
          data-context="Canvas2D"
          height={Config.height}
          data-processing="CPU"
          width={Config.width}
          ref={typescript}
        />
      </Stats>

      <Stats offscreen={offscreen()}>
        <canvas
          data-tracer="AssemblyScript"
          height={Config.height}
          data-processing="CPU"
          data-context="WebGL"
          width={Config.width}
          ref={assemblyscript}
        />
      </Stats>

      <Stats>
        <canvas
          height={Config.height}
          data-processing="GPU"
          data-context="WebGL2"
          data-tracer="WebGL2"
          width={Config.width}
          ref={webgl2}
        />
      </Stats>

      <Stats>
        <canvas
          height={Config.height}
          data-processing="GPU"
          data-context="WebGPU"
          data-tracer="WebGPU"
          width={Config.width}
          ref={webgpu}
        />
      </Stats>
    </section>
  );
};
