<template lang="pug">
.page-signin
  .contenter
    Card
      template(#header)
      .column
        input(v-model="account.name", type="text", placeholder="请输入账号")
        input(v-model="account.password", type="password", placeholder="请输入密码")
        button(@click="signin") signin
      template(#footer)
        p
          span 还没有账号?
          NuxtLink(to="/account/create") 注册一个
</template>

<script>
export default {
  data: () => ({
    account: {
      name: "",
      password: "",
    },
  }),
  methods: {
    signin() {
      if (!this.account.name) return console.log("未填写用户名");
      if (!this.account.password) return console.log("未填写密码");
      this.$axios.post("/api/session", this.account).then((res) => {
        this.$store.commit("account/init", res.data);
        console.log(res.data);
        if (res.status === 200) {
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style lang="sass">
.page-signin
  .contenter
    .column
      display: flex
      flex-direction: column
      background: #f5f5f5
      padding: 6rem 0
      input, button
        width: 16rem
        height: 3rem
        line-height: 3rem
        border: 1px solid #ccc
        border-radius: .5rem
        padding: 0 1rem
        margin: .5rem auto
</style>
