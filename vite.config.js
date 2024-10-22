import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'src/index.html', // Укажите входной файл
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
