import Scene from '@/stage/Scene';

self.onerror = error => console.error(error);

self.onmessage = (message): Scene | void => {
  const { event, params } = message.data;

  if (event === 'Transfer')
    return new Scene({
      offscreen: true,
      ...params
    });

  self.postMessage({
    response: params,
    name: event
  });
};
