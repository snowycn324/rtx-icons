import baseConfig from './base';
import { defineConfig } from 'vite';
import { resolve } from "path";
import dts from 'vite-plugin-dts';

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, '../src/main.ts'),
      name: 'Rtx-Icons',
      fileName: (format) => `rtx-icons.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    ...(baseConfig as any).plugins,
    dts(),
  ]
});