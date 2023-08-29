import type { Trace } from '@S/stage/types';
import { floatToInt } from '@S/utils/Color';
import Vector3 from '@S/utils/Vector3';
import Config from '@S/stage/Config';
import Scene from '@S/stage/Scene';

let start = 0.0;
let sample = 0.0;
let trace: Trace;

const color = new Vector3();

let f32 = new Float32Array(
  Config.width * Config.height * 3
);

const u8 = new Uint8ClampedArray(
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
        params.tracer === 'assemblyscript'
          ? '../../../build/release.js'
          : '../../stage/Tracer.ts'
      )).trace;

      break;

    case 'Create::PPMImage':
      f32 = trace(start ||= Date.now(), f32, ++sample);
      floatToInt(u8, f32, color, sample);
      params = { sample, pixels: u8, ...params };
      break;
  }

  self.postMessage({
    response: params,
    name: event
  });
};

export default self;
