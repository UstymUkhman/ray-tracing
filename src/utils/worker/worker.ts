import Scene from '@/stage/Scene';
import Tracer from '@/stage/Tracer';
import Config from '@/stage/Config';

let start = 0.0;
let samples = 0.0;

const tracer = new Tracer();

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

    case 'Create::PPMImage': {
      tracer.createPPMImage(pixels, start ||= Date.now(), ++samples);
      params = { sample: samples, pixels, ...params };
      break;
    }
  }

  self.postMessage({
    response: params,
    name: event
  });
};

export default self;
