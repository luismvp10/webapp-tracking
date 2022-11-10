import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: `${resolve(
            __dirname,
            'node_modules/@cds.js/core/dist/cargamos/svg',
          )}/[!.]*`,
          dest: './svg',
        },
        {
          src: `${resolve(
            __dirname,
            'node_modules/@cds.js/core/dist/cargamos/assets',
          )}/[!.]*`,
          dest: './assets',
        },
      ],
    }),
    react(),
  ],
  resolve: {
    alias: [
      {
        find: '@hooks',
        replacement: resolve(__dirname, 'src/hooks/'),
      },
      {
        find: '@constants',
        replacement: resolve(__dirname, 'src/constants/'),
      },
      {
        find: '@interfaces',
        replacement: resolve(__dirname, 'src/interfaces/'),
      },
      {
        find: '@services',
        replacement: resolve(__dirname, 'src/services/'),
      },
      {
        find: '@utils',
        replacement: resolve(__dirname, 'src/utils/'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, 'src/pages/'),
      },
      {
        find: '@layouts',
        replacement: resolve(__dirname, 'src/Layout/'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components/'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [resolve(__dirname, 'src/styles')],
      },
    },
  },
  server: {
    port: 8000,
  },
});
