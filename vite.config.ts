/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';
import { MOBILE_WIDTH_VIEWPORT } from './config/UI';

const resolve = (addr: string) => path.resolve(__dirname, addr);

const buildConfig = process.env.NODE_ENV !== 'STORYBOOK' ? {
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
  resolve: {
    alias: {
      '@lib': resolve('./lib'),
      '@lib-shared': resolve('./lib/shared'),
      '@config': resolve('./config'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $mobile-width: ${MOBILE_WIDTH_VIEWPORT};
          @import '@lib/shared/styles/imports.scss';
        `,
      },
    },
  },
  ...buildConfig,
});
