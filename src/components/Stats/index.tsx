import { createSignal, onCleanup } from 'solid-js';
import type { ImageData } from '@/stage/types';
import type { Event } from '@/utils/Events';
import type { JSXElement } from 'solid-js';
import * as Config from '@/stage/config';
import { toFixed } from '@/utils/Number';
import { Events } from '@/stage/scene';
import CSS from './Stats.module.css';

type StatsProps = {
  children: JSXElement;
  offscreen?: boolean;
};

export default (props: StatsProps) =>
{
  let last = Date.now();
  let start = Date.now();

  const [error, setError] = createSignal('');
  const [samples, setSamples] = createSignal(0);
  const [visible, setVisible] = createSignal(false);

  const [lastRender, setLastRender] = createSignal(0);
  const [totalRender, setTotalRender] = createSignal(0);

  const children = props.children as HTMLCanvasElement;
  const { tracer, processing, context } = children.dataset;

  const onFail = (event: Event) => setError(event.data as string);

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
  Events.add(`${tracer}::Init::Fail`, onFail);
  Events.add(`${tracer}::Stats::Update`, onUpdate);

  onCleanup(() => {
    Events.remove(`${tracer}::Start`, onStart);
    Events.add(`${tracer}::Init::Fail`, onFail);
    Events.remove(`${tracer}::Stats::Update`, onUpdate);
  });

  return (
    <div onClick={toggleVisible} class={CSS.container}>
      {props.children}

      {error() ? (
        <strong class={CSS.stats}>{error()}</strong>
      ) : (
        <ul class={CSS.stats} style={{ opacity: +visible() }}>
          <li>
            <strong>Processing: </strong>
            <em>{processing}</em>
          </li>

          <li>
            <strong>Context: </strong>
            <em>{context}</em>
          </li>

          <li>
            <strong>Language: </strong>
            <em>{processing === 'CPU'
              ? tracer : tracer === 'WebGL2'
              ? 'GLSL ES 3.0' : 'WGSL'
            }</em>
          </li>

          <li>
            <strong>Environment: </strong>
            <em>{processing === 'GPU'
              ? 'Client' : props.offscreen
              ? 'OffscreenCanvas' : 'Web Worker'
            }</em>
          </li>

          <li>
            <strong>Samples: </strong>
            <em>{samples()} / {Config.samples}</em>
          </li>

          <li>
            <strong>Last Render Time: </strong>
            <em>~{lastRender()} sec.</em>
          </li>

          <li>
            <strong>Total Render Time: </strong>
            <em>~{totalRender()} sec.</em>
          </li>
        </ul>
      )}
    </div>
  );
};
