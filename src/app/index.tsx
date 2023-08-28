import '@S/app/app.css';
import Stage from '@S/stage';
import { onMount } from 'solid-js';
import Config from '@S/stage/Config';

export const App = () =>
{
  let typescript!: HTMLCanvasElement;
  let assemblyscript!: HTMLCanvasElement;

  onMount(() => new Stage([
    typescript,
    assemblyscript
  ]));

  return (
    <section>
      <canvas
        data-tracer="typescript"
        height={Config.height}
        width={Config.width}
        ref={typescript}
      />

      <canvas
        data-tracer="assemblyscript"
        height={Config.height}
        width={Config.width}
        ref={assemblyscript}
      />
    </section>
  );
};
