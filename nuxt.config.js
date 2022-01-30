export default {
  components: true,
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  axios: { proxy: true, proxyHeaders: true },
  proxy: [
    ['/api', {
      target: 'http://localhost:2333',
      pathRewrite: {
        '^/api': '/',
        changeOrigin: true
      }
    }],
    ['/data', {
      target: 'http://localhost:2333',
      pathRewrite: {
        '^/api': '/',
        changeOrigin: true
      }
    }]
  ]
}