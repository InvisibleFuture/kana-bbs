<template lang="pug">
Drawer
  .thread
    .header
      h1.title {{ thread.title }}
      .info
        span.user.fas.fa-user-secret {{ thread.user.name }}
        span.date.far.fa-calendar-alt {{ rwdate(thread.createdAt) }}
        span.view.far.fa-eye {{ thread.views }}
      .tags
        span.tag test
        span.tag demo
    .content.circumscription
      .thread-main(v-html="markdown(thread.data)")
      button.magic
        i.fas.fa-magic
      //button.editor(
      //  v-if="account.online && (account.uid === thread.uid || account.gid === 1)",
      //  @click="edit_mode = !edit_mode"
      //)
      //  i.fas.fa-magic
      //  | Editor
      PostList(:data.sync="postlist")
      .post-create(v-if="account.online")
        img.avatar(:src="account.avatar")
        .content
          textarea(v-model="post.data", rows="12")
          button.submit(@click="createpost") 发表
</template>

<script>
import { marked } from "marked";
export default {
  asyncData({ $axios, params }) {
    return $axios.get(`/api/thread/${params.id}`).then((res) => {
      return {
        thread: res.data,
        postlist: [],
        post: {
          data: "",
          attach: "thread",
          aid: params.id,
        },
        edit_mode: false,
      };
    });
  },
  computed: {
    account() {
      return this.$store.state.account;
    },
  },
  methods: {
    rwdate(utc) {
      let t = new Date(utc);
      return t.getMonth() + 1 + "月 " + t.getDate() + ", " + t.getFullYear();
    },
    markdown(data) {
      return marked.parse(data);
    },
    loadpostlist() {
      this.$axios
        .get(`/api/post?attach=thread&aid=${this.post.aid}`)
        .then((res) => {
          this.postlist = res.data;
        });
    },
    createpost() {
      console.log(this.post);
      this.$axios.post("/api/post", this.post).then((res) => {
        if (res.status === 200) {
          this.postlist.push(res.data);
          this.post.data = "";
        }
      });
    },
  },
  mounted() {
    this.loadpostlist();
  },
};
</script>


<style lang="sass">
.thread-main
  margin: 0 0 4rem 0
  padding: 2rem
.thread
  >.header
    height: 240px
    background-color: rgba(0, 0, 0, .5)
    margin: 0
    padding: 4rem
    text-align: center
    color: #ffffff
    span
      margin: 0 .5rem
    span::before
      margin: 0 .5rem
  >.content
    background: #ffffff
    min-height: 800px
    padding: 1rem 2rem
    position: relative
    top: -5rem
    border-radius: .5rem
    box-sizing: border-box
    >.editor
      position: absolute
      top: 1rem
      right: 1rem
.post-create
  display: flex
  //background: #c8d22d
  >.avatar
    width: 48px
    height: 48px
    border-radius: 50%
    background: rgba(0, 0, 0, .5)
  >.content
    flex: 1
    padding-left: 1rem
    textarea
      display: block
      width: 100%
      max-width: 64rem
      border: 1px solid #e5e5e5
      border-radius: .5rem
      padding: 1rem
      box-sizing: border-box
    button
      border: none
      border-radius: .25rem
      padding: .5rem 1rem
      margin: 1rem 0
      color: #ffffff
      background-color: #cc1414
      font-weight: 600
      min-width: 6rem
      cursor: pointer
</style>
