<template lang="pug">
.main
  header.header
    nav.navbar.main-width
      NuxtLink.navbar-logo(to="/") Kana
      NuxtLink.navbar-item(to="/") 主页
      .expnone
      .navbar-user(v-if="account.online")
        NuxtLink.userinfo(to="/account")
          img.avatar(:src="account.avatar")
          span.name {{ account.name }}
      .navbar-sign(v-else)
        NuxtLink.button(to="/account/signin") Signin
        NuxtLink.button(to="/account/create") Login
  Nuxt
  footer.footer
    b Kana
</template>

<script>
import "assets/sass/main.sass";
import "assets/sass/default.sass";

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
.block
  padding-top: 10rem
  padding-bottom: 10rem

@media (min-width: 480px)
  .main-width
    margin: 0 2rem

@media (min-width: 1280px)
  .main-width
    max-width: 1200px
    margin: auto

header.header
  //background-color: rgba(0, 0, 0, .8)
  nav.navbar
    display: flex
    align-items: center
    .navbar-logo
      //color: #fff
      margin: 0 1rem
      font-size: 1.2rem
      font-weight: 600
    .navbar-item
      //color: #eee
      padding: 1rem
      font-size: 1.2rem
      font-weight: 600
    .navbar-item:hover
      //color: #fff
    .expnone
      flex: 1
    .userinfo
      //color: #ffffff
      font-weight: 600
      display: flex
      align-items: center
      .avatar
        width: 24px
        height: 24px
        border-radius: 50%
        margin-right: .5rem
footer.footer
  text-align: center
  margin: 4rem

a.button
  border: none
  border-radius: .25rem
  padding: .5rem 1rem
  margin: 1rem .5rem
  background-color: #007bff
  color: #ffffff
</style>
