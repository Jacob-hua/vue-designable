const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  outputDir: 'dist',
  devServer: {
    // host: 'localhost',
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/designable/': {
        target: 'http://192.100.8.20:9000',
        ws: true,
        changeOrigin: true,
      },
      '/devDesignable': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    },
  },
})
