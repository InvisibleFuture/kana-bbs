<template lang="pug">
.account
  .main-width
    img.avatar(:src="account.avatar")
    span.name {{ account.name }}
    //input.upload(type="file", name="photos", multiple, @change="setAvatar()")
    .banner_item.add
      label.img_add(for="img_add") +
      input#img_add(
        type="file",
        accept="image/*",
        multiple="multiple",
        @change="upload($event)"
      )
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
      data.append("img", event.target.files[0]);
      this.$axios
        .post("/api/account", data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          console.log(res.data);
          //res.data.forEach((item) => this.list.push(item));
        });
    },
    //setAvatar() {
    //  let myForm = new FormData();
    //  let files = document.querySelector("[type=file]").files;
    //  for (var i = 0; i < files.length; i++) {
    //    myForm.append("photos", files[i]);
    //  }
    //  //this.$axios.post("/api/account", myForm).then((res) => {
    //  //  console.log(res.data);
    //  //});
    //  console.log(myForm);
    //  fetch("/api/account", {
    //    method: "POST",
    //    //headers: { "Content-Type": "multipart/form-data" },
    //    body: myForm,
    //  })
    //    .then((Response) => Response.json())
    //    .then((data) => {
    //      console.log(data);
    //    });
    //},
  },
};
</script>

<style lang="sass">
.account
  .avatar
    height: 64px
    width: 64px
    border: none
    border-radius: 50%
    background: #ff1414
    overflow: hidden
</style>
