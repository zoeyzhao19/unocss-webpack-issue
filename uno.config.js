import { defineConfig } from 'unocss'
import { presetWind } from '@unocss/preset-wind'

export default defineConfig({
  // ...UnoCSS options
  theme: {
    breakpoints: {
      sm: '320px'
    }
  },
  presets: [
    presetWind({
      dark: 'class',   
    }),
  ],
})