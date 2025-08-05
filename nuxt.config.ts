// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/fonts', '@pinia/nuxt'],
  devServer: {
    port: 3000
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://113.128.179.82:19989', // 默认端口 80 可省略
        changeOrigin: true
      }
    },
    // 该配置用于服务端请求转发
    routeRules: {
      '/api/**': { proxy: 'http://113.128.179.82:19989' }
    }
  }
})
