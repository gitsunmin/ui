import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    outDir: 'dist/types',
    entryRoot: 'src',
    staticImport: true,
  })],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'DesunSystemReact',
      fileName: (format) => `desun-system-react.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        dir: 'dist',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    copyPublicDir: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@/로 'src' 경로를 별칭으로 사용
    },
  },
})
