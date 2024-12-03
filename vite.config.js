import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/Complete_Portfolio/"
  server: {
    host: '0.0.0.0', // 允許外部訪問
    port: 5000       // 將開發伺服器埠設為 5000
  }
})
