import type { Format } from '@/stage/types';
import type { Trace } from '@/stage/types';
import { CPUScene } from '@/stage/scene';
import * as Config from '@/stage/config';

let sample = 0.0;
let trace: Trace;
let format: Format;
let collect: () => void;

let f32 = new Float32Array(
  Config.width * Config.height * 3
);

let u8 = new Uint8ClampedArray(
  Config.width * Config.height * 3
);

self.onerror = error => console.error(error);

self.onmessage = async (message): Promise<CPUScene | void> => {
  const { event } = message.data;
  let { params } = message.data;

  switch (event) {
    case 'Transfer::Offscreen':
      return new CPUScene({ offscreen: true, ...params });

    case 'Create::Tracer': {
      const Tracer = await import(
        params.tracer === 'AssemblyScript'
          ? '../../../build/release.js'
          : '../../stage/Tracer.ts'
      );

      collect = Tracer.collect;
      format = Tracer.format;
      trace = Tracer.trace;

      break;
    }

    case 'Create::PPMImage': {
      f32 = new Float32Array(trace(f32));
      u8 = new Uint8ClampedArray(format(f32, u8, ++sample));

      params = { sample, pixels: u8, ...params };
      !(sample % 1e2) && collect();

      break;
    }
  }

  self.postMessage({
    response: params,
    name: event
  });
};

export default self;
