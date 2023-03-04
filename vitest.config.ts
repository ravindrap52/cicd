import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import {defineConfig} from  'vitest/config';

export default defineConfig ({
  plugins: [vue(),
    AutoImport({
        imports: ['vue', 'vitest'],
        dirs: ['./composables']
    })

],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  resolve: {
    alias : {
        '~': './'
    }
  },
  coverage: {
    provider: 'Istanbul',
    reporter: ['text', 'json', 'html'],
    all: true,
    include: ['src/**.{js,vue}', 'src/**/**.{js,vue}'],
    clean: true,
    cache: false
  },
})