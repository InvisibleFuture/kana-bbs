<template lang="pug">
.account
  .header
    label.img_add(for="img_add")
      img.avatar(:src="account.avatar")
    .name {{ account.name }}
    input#img_add(
      type="file",
      accept="image/*",
      multiple="multiple",
      @change="upload($event)"
    )
  .content.main-width
    p account
    NuxtLink.button(to="/account/setting") 账户设置
</template>

<script>
export default {
  computed: {
    account() {
      return this.$store.state.account;
    },
  },
  methods: {
    upload(event) {
      let data = new FormData();
      let option = { headers: { "Content-Type": "multipart/form-data" } };
      data.append("img", event.target.files[0]);
      this.$axios.post("/api/account", data, option).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style lang="sass">
.account
  >.header
    background-color: rgba(0, 0, 0, .5)
    text-align: center
    height: 200px
    padding: 4rem
    .avatar
      height: 64px
      width: 64px
      border: none
      border-radius: 50%
      background: #ff1414
      overflow: hidden
    .img_add
      cursor: pointer
    #img_add
      display: none
    .name
      font-size: 1.2rem
      font-weight: 600
      color: #ffffff
  >.content
    background: #ffffff
    padding: 2rem
    border-radius: .5rem
    box-sizing: border-box
    position: relative
    top: -4rem
</style>
