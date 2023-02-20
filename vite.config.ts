import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('./src/')
    }
  },
  base: './',
  server: {
    port: 3000,
    open: true,
    cors: true,
    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          // 分包配置，配置完成自动按需加载
          vue: ['vue', 'vue-router', 'pinia', 'vue-i18n', 'element-plus'],
          echarts: ['echarts'],
        },
      },
    },
  }
})
