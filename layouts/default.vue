<template lang="pug">
.main
  header.header
    nav.navbar.main-width
      NuxtLink.navbar-logo(to="/") Kana
      NuxtLink.navbar-item(to="/") 主页
      .expnone
      .navbar-user(v-if="account.online")
        NuxtLink.username(to="/account") {{ account.name }}
      .navbar-sign(v-else)
        NuxtLink.button(to="/account/signin") Signin
        NuxtLink.button(to="/account/create") Login
  Nuxt
  footer.footer
    b Kana
</template>

<script>
export default {
  computed: {
    account() {
      return this.$store.state.account;
    },
  },
  mounted() {
    console.log(
      "%c こめいじ さとり %c satori.love ",
      "color: white; background: #e9546b; padding:5px 0;",
      "padding:4px;border:1px solid #e9546b;"
    );
    this.$store.dispatch("account/profile");
  },
};
</script>

<style lang="sass">
html, body
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
  margin: 0
  padding: 0

.main
  min-height: 100vh
  background-color: #dee2e6

@media (min-width: 480px)
  .main-width
    //max-width: 480px
    margin: 0 2rem

//@media (min-width: 992px)
//  .main-width
//    max-width: 800px
//    margin: auto

@media (min-width: 1280px)
  .main-width
    max-width: 1200px
    margin: auto

header.header
  background-color: rgba(0, 0, 0, .8)
  nav.navbar
    display: flex
    align-items: center
    .navbar-logo
      color: #fff
      margin: 0 1rem
      font-size: 1.2rem
      font-weight: 600
    .navbar-item
      color: #eee
      padding: 1rem
      font-size: 1.2rem
      font-weight: 600
    .navbar-item:hover
      color: #fff
    .expnone
      flex: 1
    .username
      color: #ffffff
      font-weight: 600
footer.footer
  text-align: center
  margin: 4rem

a
  text-decoration: none
a:link  // 未访问的
  color: #222222
a:visited
  color: #223388
a:active // 点击时
  color: #2233cc
a.button
  border: none
  border-radius: .25rem
  padding: .5rem 1rem
  margin: 1rem .5rem
  background-color: #007bff
  color: #ffffff
</style>
