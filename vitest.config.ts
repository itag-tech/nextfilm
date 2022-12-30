import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// TODO - load var switch the mode (take a look here https://vitejs.dev/config/#environment-variables)
process.env.NEXT_PUBLIC_OMDB_API_URL = 'http://www.omdbapi.com/'
process.env.NEXT_PUBLIC_API_KEY = "1234"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
})
