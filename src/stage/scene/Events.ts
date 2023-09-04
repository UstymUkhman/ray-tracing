import type { Callback as ECallback } from '@/utils/Events';
import type { Callback as WCallback } from '@/utils/worker';

import type WebWorker from '@/utils/worker';
import Worker from '@/utils/worker/worker';
import { Emitter } from '@/utils/Events';

class WorkerEvents
{
  public constructor (private readonly worker: WebWorker) {}

  public add (name: string, callback: WCallback): void {
    this.worker.add(name, callback);
  }

  public static dispatch (name: string, data?: unknown): void {
    Worker.postMessage({ name, response: { data }});
  }

  public remove (name: string): void {
    this.worker.remove(name);
  }

  public dispose (): void {
    this.worker.dispose();
  }
}

class Events extends Emitter
{
  private offscreen = false;
  private workerEvents?: WorkerEvents;

  public createWorkerEvents (worker: WebWorker, offscreen: boolean): void {
    this.workerEvents = new WorkerEvents(worker);
    this.offscreen = offscreen;
  }

  public override add (name: string, callback: ECallback): void {
    this.offscreen
      ? this.workerEvents?.add(name, callback as WCallback)
      : super.add(name, callback as ECallback);
  }

  public override dispatch (name: string, data?: unknown, worker = false): void {
    worker
      ? WorkerEvents.dispatch(name, data)
      : super.dispatch(name, data);
  }

  public override remove (name: string, callback?: ECallback): void {
    this.offscreen
      ? this.workerEvents?.remove(name)
      : super.remove(name, callback);
  }

  public override dispose (): void {
    this.workerEvents?.dispose();
    super.dispose();
  }
}

export default new Events();
