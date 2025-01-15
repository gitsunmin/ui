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
    exclude: ['**/*.stories.tsx', '**/*.mdx', 'src/constants/**/*', 'src/stories/**/*'],
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@gitsunmin/ui',
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
      cssFileName: 'index',
    },
    rollupOptions: {
      treeshake: true,
      external: ['react', 'react-dom'],
      output: {
        dir: 'dist',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    minify: true,
    copyPublicDir: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@/로 'src' 경로를 별칭으로 사용
    },
  },
})
