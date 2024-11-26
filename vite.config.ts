import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@assets': '/src/assets', // Alias para acceder a la carpeta assets
    },
  },
});
