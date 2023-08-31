import { createSignal, onMount } from 'solid-js';
import { Stats } from '@S/components';
import Config from '@S/stage/Config';
import Stage from '@S/stage';
import '@S/app/app.css';

export const App = () =>
{
  let typescript!: HTMLCanvasElement;
  let assemblyscript!: HTMLCanvasElement;
  const [offscreen, setOffscreen] = createSignal(false);

  onMount(() => setOffscreen(
    new Stage([
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
          width={Config.width}
          ref={typescript}
        />
      </Stats>

      <Stats offscreen={offscreen()}>
        <canvas
          data-tracer="AssemblyScript"
          height={Config.height}
          width={Config.width}
          ref={assemblyscript}
        />
      </Stats>
    </section>
  );
};
