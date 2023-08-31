import { createSignal, onCleanup } from 'solid-js';
import type { ImageData } from '@S/stage/types';
import type { Event } from '@S/utils/Events';
import type { JSXElement } from 'solid-js';
import { toFixed } from '@S/utils/Number';
import Config from '@S/stage/Config';
import CSS from './Stats.module.css';
import Events from '@S/stage/Events';

type StatsProps = {
  children: JSXElement;
  offscreen: boolean;
};

export default (props: StatsProps) =>
{
  let last = Date.now();
  let start = Date.now();

  const [samples, setSamples] = createSignal(0);
  const [visible, setVisible] = createSignal(false);

  const [lastRender, setLastRender] = createSignal(0);
  const [totalRender, setTotalRender] = createSignal(0);

  const { tracer } = (props.children as HTMLCanvasElement).dataset;
  const processing = `${(tracer?.includes('Web') && 'G') || 'C'}PU`;

  const toggleVisible = () => setVisible(!visible());

  const onStart = () => start = Date.now();

  const onUpdate = (event: Event): void => {
    const now = Date.now();
    const { sample } = event.data as ImageData;

    setTotalRender(toFixed((now - start) / 1e3));
    setLastRender(toFixed((now - last) / 1e3));

    setSamples(sample);
    last = now;
  };

  Events.add(`${tracer}::Start`, onStart);
  Events.add(`${tracer}::Stats::Update`, onUpdate);

  onCleanup(() => {
    Events.remove(`${tracer}::Start`, onStart);
    Events.remove(`${tracer}::Stats::Update`, onUpdate);
  });

  return (
    <div onClick={toggleVisible} class={CSS.container}>
      {props.children}

      <ul class={CSS.stats} style={{ opacity: +visible() }}>
        <li>
          <strong>Processing: </strong>
          <em>{processing}</em>
        </li>

        <li>
          <strong>Back-End: </strong>
          <em>{Config.backEnd}</em>
        </li>

        <li>
          <strong>Language: </strong>
          <em>{tracer}</em>
        </li>

        <li>
          <strong>Environment: </strong>
          <em>{props.offscreen ? 'OffscreenCanvas' : 'Web Worker'}</em>
        </li>

        <li>
          <strong>Samples: </strong>
          <em>{samples()} / {Config.samples}</em>
        </li>

        <li>
          <strong>Last Render Time: </strong>
          <em>{lastRender()} sec.</em>
        </li>

        <li>
          <strong>Total Render Time: </strong>
          <em>{totalRender()} sec.</em>
        </li>
      </ul>
    </div>
  );
};
