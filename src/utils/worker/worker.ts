import type { Trace, Format } from '@S/stage/types';
import { toFixed } from '@S/utils/Number';
import Config from '@S/stage/Config';
import Scene from '@S/stage/Scene';

let start = 0.0;
let sample = 0.0;

let trace: Trace;
let format: Format;

let last = Date.now();
const samples = Config.samples;

let f32 = new Float32Array(
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

    case 'Create::Tracer': {
      const Tracer = await import(
        params.tracer === 'assemblyscript'
          ? '../../../build/release.js'
          : '../../stage/Tracer.ts'
      );

      format = Tracer.format;
      trace = Tracer.trace;
      break;
    }

    case 'Create::PPMImage': {
      start ||= Date.now();
      f32 = trace(f32);

      u8 = format(u8, f32, ++sample);
      params = { sample, pixels: u8, ...params };

      const now = Date.now();
      const ls = samples === sample;

      const s = `${(ls && 'Total ') || ''}Samples: ${sample}`;
      const tt = `Total Time: ${toFixed((now - start) / 1e3)} sec.`;
      const lrt = `Last Render Time: ${toFixed((now - last) / 1e3)} sec.`;

      console.info(`${s} | ${lrt} | ${tt}`);
      last = now;
      break;
    }
  }

  self.postMessage({
    response: params,
    name: event
  });
};

export default self;
