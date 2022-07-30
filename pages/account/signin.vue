<template lang="pug">
.account-signin.circumscription
  div.card
    .left SIGN IN
    .right
      input(v-model="account.name", type="text", placeholder="account")
      input(v-model="account.password", type="password", placeholder="password")
      button(@click="signin") Signin
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
.account-signin
  padding-top: 6rem
  .card
    display: flex
    width: 48rem
    margin: auto
    background-color: var(--background-main)
    margin-top: 6rem
    padding: 6rem 4rem
    border-radius: 1rem
    box-sizing: border-box
    .left
      flex: 1
      font-size: 4rem
      font-weight: bold
      color: #ff8888
      display: flex
      justify-content: center
      align-items: center
    .right
      width: 18rem
      display: flex
      flex-direction: column
      input, button
        margin-bottom: 1rem
        font-size: 1.2rem
        padding: .75rem
        border: none
        border-radius: .5rem
//.page-signin
  //.contenter
  //  background: #f5f5f5
  //  .column
  //    display: flex
  //    flex-direction: column
  //    padding: 6rem 0
  //    input, button
  //      width: 16rem
  //      height: 3rem
  //      line-height: 3rem
  //      border: 1px solid #ccc
  //      border-radius: .5rem
  //      padding: 0 1rem
  //      margin: .5rem auto
  //    p
  //      width: 16rem
  //      margin: .5rem auto
</style>
