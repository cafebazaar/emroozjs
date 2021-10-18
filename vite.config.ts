/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';

const resolve = (addr: string) => path.resolve(__dirname, addr);

const buildConfig = process.env.NODE_ENV === 'STORYBOOK_BUILD' ? {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'Emrooz',
      fileName: (format: string) => `emrooz.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
} : {};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  resolve: {
    alias: {
      '@lib': resolve('./lib'),
      '@lib-shared': resolve('./lib/shared'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:math";
          @import '@lib/shared/styles/imports.scss';
        `,
      },
    },
  },
  ...buildConfig,
});
