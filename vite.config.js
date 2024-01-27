import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(dirname(fileURLToPath(import.meta.url)), 'lib/main.js'),
      name: 'SpiffUI',
      fileName: 'spiff-ui'
    },
    rollupOptions: {
      external: ['react', 'styled-components'],
      output: {
        globals: {
          react: 'react',
        }
      }
    }
  }
});