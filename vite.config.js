import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const aliases = {
  '@components': '/src/components',
  '@pages': '/src/pages',
};

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});