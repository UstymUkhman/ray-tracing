import '@/app/App.scss';
import { onMount } from 'solid-js';
import Canvas from '@/scene/Canvas';
import { Config } from '@/scene/Config';

export const App = () =>
{
  let canvas!: HTMLCanvasElement;
  onMount(() => new Canvas(canvas));

  return <canvas
    height={Config.Scene.height}
    width={Config.Scene.width}
    ref={canvas}
  />;
};
