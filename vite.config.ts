import react from '@vitejs/plugin-react'
import { defineConfig, Plugin } from 'vite'
import tsconfigPaths, { PluginOptions } from 'vite-tsconfig-paths'

const host = process.env.TAURI_DEV_HOST

const reactDevToolsPlugin: (opts?: PluginOptions) => Plugin = () => {
  return {
    name: 'vite-react-devtools',
    apply: ({ mode }) => mode === 'development',
    transformIndexHtml() {
      return [
        {
          tag: 'script',
          attrs: {
            src: 'http://localhost:8097',
          },
        },
      ]
    },
  }
}

export default defineConfig(async () => ({
  plugins: [reactDevToolsPlugin(), react(), tsconfigPaths()],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: 'ws',
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      ignored: ['**/src-tauri/**'],
    },
  },
}))
