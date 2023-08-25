import type { Trace } from '@S/stage/types';
import Config from '@S/stage/Config';
import Scene from '@S/stage/Scene';

let start = 0.0;
let sample = 0.0;
let trace: Trace;

const f32 = new Float32Array(
  Config.width * Config.height * 3
);

let u8 = new Uint8ClampedArray(
  Config.width * Config.height * 3
);

self.onerror = error => console.error(error);

self.onmessage = async (message): Promise<Scene | void> => {
  const { event } = message.data;
  let { params } = message.data;

  switch (event) {
    case 'Transfer::Offscreen':
      return new Scene({
        offscreen: true,
        ...params
      });

    case 'Create::Tracer':
      trace = (await import(
        params.tracer !== 'as'
          ? '../../stage/Tracer.ts'
          : '../../../build/release.js'
      )).trace;

      break;

    case 'Create::PPMImage':
      u8 = trace(start ||= Date.now(), f32, u8, ++sample);
      params = { sample, pixels: u8, ...params };
      break;
  }

  self.postMessage({
    response: params,
    name: event
  });
};

export default self;
