<template lang="pug">
.chat-index
  .ceremony
    .circumscription
      .flex
        .index
          p Chat 频道列表 {{ chatlist.length }}
          ul(v-if="chatlist.length")
            li(v-for="item in chatlist", :key="item._id")
              span {{ item.name }}
              i(v-if="true") (已订阅)
              i(v-else) (未订阅)
          button(@click="create") 创建频道
        .content
          DialogueList(:data="chatactive")
          textarea.dialogue(v-model="chat.data", rows="12")
          button.submit(@click="submit") 发表
</template>

<style lang="sass">
.chat-index
  textarea.dialogue
    display: block
    width: 32rem
    padding: 1rem
    border: 1px solid #eee
    border-radius: .5rem
    box-sizing: border-box

  .flex
    display: flex
    .index
      width: 24rem
    .content
      flex: 1
</style>

<script>
import socket from "@/assets/js/socket.js";

export default {
  asyncData({ $axios }) {
    return $axios("/api/chat").then((res) => {
      return {
        userstore: new Map(),
        chatlist: res.data,
        chat: { data: "" },
        chatactive: [],
      };
    });
  },
  mounted() {
    socket.controller.set("chat", async (data) => {
      // 为数据添加 user 信息
      data.user = await this.loaduser(data.uid);
      this.chatactive.push(data);
      console.log(data);
    });
    // 组合键提交
    this.keyCodeForEvent();
  },
  methods: {
    async loaduser(uid) {
      if (!uid || uid === "0") {
        return { _id: "0", name: "游客", avatar: "" };
      }
      let user = this.userstore.get(uid);
      if (!user) {
        return await this.$axios.get("/api/user/" + uid).then((res) => {
          if (res.status === 200) {
            this.userstore.set(uid, res.data);
            return res.data;
          }
          return { _id: "0", name: "游客", avatar: "" };
        });
      }
      return user;
    },
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
    keyCodeForEvent() {
      let self = this;
      let code = 0;
      let code2 = 0;
      document.onkeydown = (e) => {
        let evn = e || event;
        let key = evn.keyCode || evn.which || evn.charCode;
        if (key === 17) {
          code = 1;
        }
        if (key === 13) {
          code2 = 1;
        }
        if (code === 1 && code2 === 1) {
          //alert("Ctrl + Enter");
          this.submit();
          // do
          code = 0;
          code2 = 0;
        }
      };
      document.onkeyup = (e) => {
        let evn = e || event;
        let key = evn.keyCode || evn.which || evn.charCode;
        if (key === 17) {
          code = 0;
        }
        if (key === 13) {
          code2 = 0;
        }
      };
    },
  },
};
</script>
