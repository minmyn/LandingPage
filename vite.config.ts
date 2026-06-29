import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // Base path estricto para subdirectorio de GitHub Pages
  base: '/LandingPage/',
  
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Obliga a Vite a generar rutas relativas para los assets inyectados en el HTML final
  build: {
    assetsDir: 'assets',
    emptyOutDir: true,
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],
})