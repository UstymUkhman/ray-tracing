import { resolve } from 'path';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import { version } from './package.json';

export default ({ mode }: { mode: string }) =>
  defineConfig({
    assetsInclude: ['**/*.bin', '**/*.fbx', '**/*.glb', '**/*.gltf'],

    resolve: {
      conditions: ['development', 'browser'],
      alias: { '@': resolve('src') }
    },

    define: {
      DEBUG: mode !== 'production' && false,
      VERSION: JSON.stringify(version)
    },

    css: {
      modules: {
        localsConvention: 'camelCaseOnly'
      }
    },

    plugins: [solid()],

    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true
    },

    base: './'
  });
