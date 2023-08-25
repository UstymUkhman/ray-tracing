import { floatToInt } from './utils/Color';
// import Vector3 from './utils/Vector3';
import Tracer from './Tracer';

const tracer = new Tracer();

export function trace (
  start: number,
  pixels: Float32Array,
  colors: Uint8ClampedArray //,
  // sample: u16 = tracer.samples
): Uint8ClampedArray {
  // const color = new Vector3();

  tracer.createPPMImage(pixels);
  return floatToInt(colors, pixels /*, color, sample */);
}
