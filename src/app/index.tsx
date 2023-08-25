import '@S/app/app.css';
import Stage from '@S/stage';
import { onMount } from 'solid-js';
import Config from '@S/stage/Config';

export const App = () =>
{
  let ts!: HTMLCanvasElement;
  let as!: HTMLCanvasElement;

  onMount(() => new Stage([ts, as]));

  return (
    <section>
      <canvas
        height={Config.height}
        width={Config.width}
        data-tracer="ts"
        ref={ts}
      />

      <canvas
        height={Config.height}
        width={Config.width}
        data-tracer="as"
        ref={as}
      />
    </section>
  );
};
