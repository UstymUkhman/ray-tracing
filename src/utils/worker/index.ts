type EventData = { callback: Callback, params?: EventParams };
export type Callback = (data: unknown) => unknown;
type EventParams = Record<string, unknown>;
import Worker from './worker?worker';

export default class WebWorker
{
  private readonly worker = new Worker();
  private events: Map<string, EventData> = new Map();

  public constructor () {
    this.worker.onmessage = this.onMessage.bind(this);
    this.worker.onerror = this.onError.bind(this);
  }

  public add (event: string, callback: Callback, params?: EventParams): void {
    this.events.set(event, { callback, params });
  }

  public transfer (canvas: Transferable, params?: EventParams): void {
    this.worker.postMessage({ event: 'Transfer::Offscreen',
      params: { canvas, ...params }
    }, [canvas]);
  }

  public post (event: string, params?: EventParams): void {
    const eventParams = this.events.get(event)?.params;

    this.worker.postMessage({ event, params: {
      ...eventParams, ...params
    }});
  }

  private onMessage (event: MessageEvent): void {
    const { name, response } = event.data;
    this.events?.get(name)?.callback?.(response);
  }

  private onError (error: ErrorEvent): void {
    console.error(error);
  }

  public remove (event: string): void {
    this.events.delete(event);
  }

  public dispose(): void {
    this.events.clear();
  }
}
