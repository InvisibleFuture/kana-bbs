<template lang="pug">
.chat-index
  .circumscription
    p Chat 频道列表 {{ chatlist.length }}
    ul(v-if="chatlist.length")
      li(v-for="item in chatlist", :key="item._id")
        p {{ item.name }}
    button(@click="create") 创建频道
  .ceremony
    .circumscription
      span chat
      DialogueList(:data="chatactive")
      textarea.dialogue(v-model="chat.data", rows="12")
      button.submit(@click="submit") 发表
</template>

<script>
import socket from "@/assets/js/socket.js";

export default {
  asyncData({ $axios }) {
    return $axios("/api/chat").then((res) => {
      return {
        chatlist: res.data,
        chat: { data: "" },
        chatactive: [{ _id: "2333", data: "cacd" }],
      };
    });
  },
  mounted() {
    socket.controller.set("chat", (data) => {
      this.chatactive.push(data);
      console.log(data);
    });
  },
  methods: {
    create() {
      let data = { name: "FM DEMO", data: "23333" };
      this.$axios.post("/api/chat", data).then((res) => {
        console.log(res.data);
      });
    },
    submit() {
      socket.connection.send(
        JSON.stringify({
          fm: "chat",
          data: this.chat.data,
        })
      );
      this.chat.data = "";
    },
  },
};
</script>

<style lang="sass">
.chat-index
  textarea.dialogue
    width: 100%
    padding: 1rem
    border: 1px solid #eee
    border-radius: .5rem
    box-sizing: border-box
</style>
