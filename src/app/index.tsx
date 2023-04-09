import '@/app/App.scss';
import Scene from '@/scene';
import { onMount } from 'solid-js';
import { Config } from '@/scene/Config';

export const App = () =>
{
  let canvas!: HTMLCanvasElement;
  onMount(() => new Scene(canvas));

  return <canvas
    height={Config.Scene.height}
    width={Config.Scene.width}
    ref={canvas}
  />;
};
