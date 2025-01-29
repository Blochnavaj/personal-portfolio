import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/personal-portfolio/',
  theme: {
    extend: {
      colors:{
        primary : '#FAFAFA'
      },
      fontFamily: {
        'afacad-flux': ['"Afacad Flux"', 'serif'], // Add your custom font family
      },
      backgroundImage: {
        'custom-conic': 'conic-gradient(#04b0ee 20deg, transparent 120deg)',
      },
      spacing: {
        '-25p': '-25%', // Adds support for -25% in top/left/right/bottom
      },
    },
  },
})
