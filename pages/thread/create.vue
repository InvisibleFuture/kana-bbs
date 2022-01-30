<template lang="pug">
.thread-create
  .header
    .background
  .content.main-width
    input.title(v-model="thread.title")
    textarea.data(v-model="thread.data")
    button.submit(@click="submit") 发表x
</template>

<script>
export default {
  data: () => ({
    thread: {
      title: "",
      data: "",
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
.thread-create
  .title
    display: block
  .data
    display: block
</style>
