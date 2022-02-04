<template lang="pug">
.main
  header.header
    .circumscription
      .logo Kana
      nav.navbar
        NuxtLink.navbar-item(to="/") 论坛
        NuxtLink.navbar-item(to="/docs") 文档
        NuxtLink.navbar-item(to="/chat") 聊天室
      .online
        .navbar-user(v-if="account.online")
          NuxtLink.userinfo(to="/account")
            img.avatar(:src="account.avatar")
            span.name {{ account.name }}
        .navbar-sign(v-else)
          NuxtLink.button(to="/account/signin") Signin
          NuxtLink.button(to="/account/create") Login
      .websocket(:class="{ on: websocket }")
  Nuxt
  footer.footer
    p
      b Kana
    .github
      a(href="https://github.com/InvisibleFuture/kana")
        span.fab.fa-github
</template>

<script>
import "@/assets/sass/main.sass";
import "@/assets/sass/default.sass";

import socket from "@/assets/js/socket.js";

export default {
  data: () => ({
    websocket: false,
  }),
  computed: {
    account() {
      return this.$store.state.account;
    },
  },
  beforeMount() {
    // 如果掉线调用变红, 如果上线调用变绿
    socket.onclose = () => {
      this.websocket = false;
    };
    socket.onopen = () => {
      this.websocket = true;
    };
    let protocol = location.protocol === "https:" ? "wss:" : "ws:";
    socket.init(`${protocol}//${location.host}/api/`);
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
.websocket
  background: red
  border-radius: 50%
  width: 1rem
  height: 1rem
  margin: .25rem .5rem
.websocket.on
  background: #00ee00

.main
  >header.header
    z-index: 100
    position: fixed
    top: 0
    left: 0
    width: 100%
    padding: 1rem 0
    >div
      display: flex
      align-items: flex-end
      >.logo
        font-size: 2rem
        font-weight: 900
        margin-right: 1.5rem
      >nav.navbar
        flex: 1
        display: flex
        align-items: center
        //justify-content: center
        .navbar-item
          margin: 0 .25rem
          padding: 0 .75rem
          height: 2rem
          line-height: 2rem
          text-align: center
          font-weight: 600
      >.online
        .navbar-user
          .userinfo
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
  padding: 4rem
  .github
    font-size: 2rem
</style>
