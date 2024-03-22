import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build', // 빌드 결과물이 저장될 디렉터리를 'build'로 지정
  },
  plugins: [react(), tsconfigPaths()],
  //global not fine 해결
  define: {
    global: {},
  },
});
