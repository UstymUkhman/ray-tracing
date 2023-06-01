import Config from '@/stage/Config';

type Callback = (
  width: number,
  height: number,
  ratio: number
) => void;

type Size = {
  width: number,
  height: number,
  ratio: number
};

class Viewport
{
  private width = Config.width;
  private height = Config.height;

  private ratio = this.width / this.height;
  private readonly callbacks: Array<Callback> = [];

  public addResizeCallback (callback: Callback) {
    const index = this.callbacks.indexOf(callback);
    index === -1 && this.callbacks.push(callback);
  }

  public removeResizeCallback (callback: Callback) {
    const index = this.callbacks.indexOf(callback);
    index !== -1 && this.callbacks.splice(index, 1);
  }

  public update (width = Config.width, height = Config.height) {
    this.width = width;
    this.height = height;

    this.ratio = this.width / this.height;

    for (let c = this.callbacks.length; c--;)
      this.callbacks[c](this.width, this.height, this.ratio);
  }

  public dispose () {
    this.callbacks.length = 0;
  }

  public get size (): Size {
    return {
      height: this.height,
      width: this.width,
      ratio: this.ratio
    };
  }
}

export default new Viewport();
