<template lang="pug">
.thread-create
  .header
    h1.title {{ thread.title }}
    .info info
      //span.user {{ thread.user.name }}
      //span.date {{ rwdate(thread.createdAt) }}
      //span.view {{ thread.views }}
    .tags
      span.tag test
      span.tag demo
  .content.main-width
    p {{ thread.data }}
    .content.main-width
      input.title(v-model="thread.title")
      textarea.data(v-model="thread.data", rows="32")
      button.submit(@click="submit") 发表
</template>

<script>
export default {
  data: () => ({
    thread: {
      title: "Default Name",
      data: "Default Data",
    },
  }),
  methods: {
    submit() {
      if (this.thread.title === "" || this.thread.data === "") {
        return console.log("尚无内容");
      }
      this.$axios.post("/api/thread", this.thread).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style lang="sass">
.card
  margin: 1rem .5rem
  border-radius: .5rem
  overflow: hidden
  background-color: #ffffff
  box-shadow: 0 6px 22px 0 rgba(0,0,0,.08)

.thread-create
  .header
    padding: 1rem
    border-bottom: 1px solid #ccc
    background-color: rgba(0, 0, 0, .5)
    text-align: center
    height: 200px
    .title
      display: block
  .content
    padding: 1rem
    background: #ffffff
    position: relative
    top: -4rem
    border-radius: .5rem
    textarea.data
      display: block
      width: 100%
      padding: 1rem
      border: 1px solid #eee
      box-sizing: border-box
    input.title
      display: block
      width: 100%
      padding: 1rem
      border: 1px solid #eee
      box-sizing: border-box
      margin-bottom: .5rem
      font-weight: 600
      font-size: 1.2rem
    button.submit
      background: #14cc22
      color: #ffffff
      border-radius: .25rem
      border: none
      padding: .5rem 2rem
      margin: 1rem 0
.bbs-title
  font-size: 1.2rem
  font-weight: 600
</style>
