import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { readFileSync, writeFileSync } from 'fs';

export default defineConfig({
  base: '/test/',
  plugins: [
    react(),
    {
      name: 'generate-404',
      closeBundle: () => {
        const html = readFileSync('dist/index.html', 'utf-8');
        writeFileSync('dist/404.html', html);
      }
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
  }
});