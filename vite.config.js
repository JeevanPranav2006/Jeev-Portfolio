import { defineConfig } from 'vite'

export default defineConfig({
  // Root is the project directory (index.html lives here)
  root: '.',
  base: '/Portfolio/',   // <-- must match your GitHub repo name exactly
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})

