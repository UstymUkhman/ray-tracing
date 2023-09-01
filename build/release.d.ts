/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/Tracer/trace
 * @param pixels `~lib/staticarray/StaticArray<f32>`
 * @returns `~lib/staticarray/StaticArray<f32>`
 */
export declare function trace(pixels: ArrayLike<number>): ArrayLike<number>;
/**
 * assembly/Tracer/format
 * @param pixels `~lib/staticarray/StaticArray<f32>`
 * @param colors `~lib/staticarray/StaticArray<u8>`
 * @param samples `u16`
 * @returns `~lib/staticarray/StaticArray<u8>`
 */
export declare function format(pixels: ArrayLike<number>, colors: ArrayLike<number>, samples: number): ArrayLike<number>;
