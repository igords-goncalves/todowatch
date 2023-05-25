import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/src/App.sass" as *;`,
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
  },
});
