import Canvas from '@/scene/Canvas';
export const worker: Worker = self as never;

worker.onerror = error => console.error(error);

worker.onmessage = message => {
  const { event, params } = message.data;

  if (event === 'Transfer')
    return Canvas.createScene(params);

  worker.postMessage({
    response: params,
    name: event
  });
};
