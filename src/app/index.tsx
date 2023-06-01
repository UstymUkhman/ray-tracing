import '@/app/app.css';
import Stage from '@/stage';
import { onMount } from 'solid-js';
import Config from '@/stage/Config';

export const App = () =>
{
  let canvas!: HTMLCanvasElement;
  onMount(() => new Stage(canvas));

  return <canvas
    height={Config.height}
    width={Config.width}
    ref={canvas}
  />;
};
