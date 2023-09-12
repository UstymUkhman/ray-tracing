import { createSignal, onMount } from 'solid-js';
import { Stats } from '@/components';
import Config from '@/stage/Config';
import Stage from '@/stage';
import '@/app/app.css';

export const App = () =>
{
  let webgl2!: HTMLCanvasElement;
  let typescript!: HTMLCanvasElement;
  let assemblyscript!: HTMLCanvasElement;

  const [offscreen, setOffscreen] = createSignal(false);

  onMount(() => setOffscreen(
    new Stage([
      webgl2,
      typescript,
      assemblyscript
    ]).offscreen
  ));

  return (
    <section>
      <Stats offscreen={offscreen()}>
        <canvas
          data-tracer="TypeScript"
          height={Config.height}
          data-processing="CPU"
          data-context="WebGL2"
          width={Config.width}
          ref={typescript}
        />
      </Stats>

      <Stats offscreen={offscreen()}>
        <canvas
          data-tracer="AssemblyScript"
          height={Config.height}
          data-processing="CPU"
          data-context="WebGL2"
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
    </section>
  );
};
