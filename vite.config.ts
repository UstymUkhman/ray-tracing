import { resolve } from 'path';
import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import { version } from './package.json';

export default (
  { mode }: { mode: string },
  compress = mode === 'production'
) =>
  defineConfig({
    base: './',

    build: { target: 'esnext' },

    worker: {
      format: 'es',
      plugins: [glsl({ compress })]
    },

    plugins: [solid(), glsl({ compress })],

    resolve: {
      alias: { '@': resolve('src') },
      conditions: ['development', 'browser']
    },

    css: {
      modules: {
        localsConvention: 'camelCaseOnly'
      }
    },

    define: {
      VERSION: JSON.stringify(version),
      DEBUG: !compress && false
    },

    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true
    }
  });
