import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ... other config settings
  optimizeDeps: {
    include: [
      'react', 'react-dom', // Add other dependencies here
    ],
  },
})
