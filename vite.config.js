import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'SpiffUI',
      fileName: 'spiff-ui'
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'react',
        }
      }
    }
  }
});