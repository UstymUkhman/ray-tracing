import Scene from '@/stage/Scene';
import Tracer from '@/stage/Tracer';
import Config from '@/stage/Config';
import Vector3 from '@/utils/Vector3';
import { floatToInt } from '@/utils/Color';

let start = 0.0;
let sample = 0.0;

const color = new Vector3();
const tracer = new Tracer();

const f32 = new Float32Array(
  Config.width * Config.height * 3
);

const pixels = new Uint8ClampedArray(
  Config.width * Config.height * 3
);

self.onerror = error => console.error(error);

self.onmessage = (message): Scene | void => {
  const { event } = message.data;
  let { params } = message.data;

  switch (event) {
    case 'Transfer::Offscreen':
      return new Scene({
        offscreen: true,
        ...params
      });

    case 'Create::PPMImage':
      tracer.createPPMImage(f32, start ||= Date.now(), ++sample);
      floatToInt(f32, pixels, color, sample);
      params = { sample, pixels, ...params };
      break;
  }

  self.postMessage({
    response: params,
    name: event
  });
};

export default self;
