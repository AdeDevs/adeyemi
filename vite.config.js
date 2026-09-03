import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { getCurrentlyPlaying } from './api/spotify.js'

function spotifyDevPlugin() {
  return {
    name: 'spotify-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/spotify', async (req, res) => {
        try {
          const data = await getCurrentlyPlaying()
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.statusCode = 200
          res.end(JSON.stringify(data))
        } catch (error) {
          res.setHeader('Content-Type', 'application/json')
          res.statusCode = 200
          res.end(JSON.stringify({ isPlaying: false, error: error.message }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), spotifyDevPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: 'all',
  },
})
