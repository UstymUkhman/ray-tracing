import Scene from '@/stage/Scene';
import Tracer from '@/stage/Tracer';

self.onerror = error => console.error(error);

self.onmessage = (message): Scene | void => {
  const { event } = message.data;
  let { params } = message.data;
  const tracer = new Tracer();

  switch (event) {
    case 'Transfer::Offscreen':
      return new Scene({
        offscreen: true,
        ...params
      });

    case 'Create::PPMImage': {
      const image = tracer.createPPMImage();
      params = { ...params, image };
      break;
    }
  }

  self.postMessage({
    response: params,
    name: event
  });
};

export default self;
