import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, transformerCompileClass, presetIcons } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons()
      ],
      transformers: [
        transformerCompileClass(),
        transformerDirective()
      ],
      theme: {
        container: {
          maxwidth: {
            sm: '420px'
          }
        }
      }
    }),
    Components({
      extensions: ['vue', 'js']
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
