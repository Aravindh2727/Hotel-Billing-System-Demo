import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE_URL || '/billing-system1/';
  const outDir = env.BUILD_OUTDIR || (mode === 'demo' ? 'dist-demo' : 'docs');

  return {
    base,
    plugins: [react()],
    build: {
      outDir,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom']
          }
        }
      },
      chunkSizeWarningLimit: 1200
    }
  };
});
