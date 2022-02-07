export default {
  components: true,
  buildModules: ['nuxt-animejs'],
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
  ],
  css: ['@fortawesome/fontawesome-free/css/all.css'],
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,
    beforeEnter(el) {
      this.$anime.set(el, {
        opacity: 0
      })
    },
    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    },
    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    }
  }
}