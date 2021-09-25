/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const resolve = (addr: string) => path.resolve(__dirname, addr);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  resolve: {
    alias: {
      '@lib': resolve('./lib'),
      '@lib-shared': resolve('./lib/shared'),
    },
  },
});
