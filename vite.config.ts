import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts',  // 라이브러리 엔트리 파일
      name: 'DesunSystemReact',  // 라이브러리 이름
      fileName: (format) => `desun-system-react.${format}.js`,  // 빌드된 파일 이름
    },
    rollupOptions: {
      // 외부 종속성 설정 (예: React, ReactDOM 등)
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@/로 'src' 경로를 별칭으로 사용
    },
  },
})
