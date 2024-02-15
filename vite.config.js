import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import scssPlugin from 'vite-plugin-scss';
// import reactRefresh from '@vitejs/plugin-react-refresh';
// import { vitePluginSass } from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
})
