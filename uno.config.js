import { defineConfig } from 'unocss'
import { presetWind } from '@unocss/preset-wind'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind({
      dark: 'class'
    })
  ],
})