<template lang="pug">
.post-list
  ul(v-if="data.length")
    li(v-for="item in data", :key="item._id")
      NuxtLink(:to="`/user/${item.user._id}`")
        img.avatar(:src="item.user.avatar")
      .content
        .name(:class="{ adminname: item.user.gid === 1 }") {{ item.user.name }}
        .info
          span {{ rwdate(item.updatedAt) }}
          div(v-html="markdown(item.data)")
      .options
        i.fas.fa-eraser(
          v-if="account.gid === 1 || account.uid === item.uid",
          @click="remove(item._id)"
        )
        i.fas.fa-marker(
          v-if="account.gid === 1 || account.uid === item.uid",
          @click="remove(item._id)"
        )
        i.fas.fa-heart(
          :class="{ like: item.like }",
          @click="like(item._id, item.like)"
        )
  .post-none(v-else) 没有评论~
</template>

<style lang="sass">
.post-none
  display: flex
  justify-content: center
  align-items: center
  justify-items: center
  text-align: center
  min-height: 24rem
.post-list
  ul
    list-style: none
    padding: 0
    margin: 0
    li
      display: flex
      border-radius: .5rem
      margin: 0
      padding: 8px 0
      color: #222222
      .avatar
        width: 48px
        height: 48px
        background: rgba(0, 0, 0, .05)
        border-radius: 50%
        overflow: hidden
      .content
        padding-left: 1rem
        .name
          font-size: 1.1rem
          font-weight: 600
        .name.adminname
          color: #ff5599
        .info
          span
            margin-right: .5rem
      .options
        margin-left: auto
        i
          cursor: pointer
          padding: 0
          margin: 0 .5rem
          color: #888888
          //display: none
        i:hover
          color: #cc1414
        i.like
          color: #cc1414
          //display: inline
    //li:hover
    //  .options
    //    i
    //      display: inline
</style>

<script>
import { marked } from "marked";
export default {
  props: ["data"],
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
    like(_id, en) {
      if (en) {
        return this.$axios
          .delete("/api/like?attach=post&aid=" + _id)
          .then((res) => {
            if (res.status === 200) {
              this.data.forEach((item) => {
                if (item._id === _id) {
                  item.like = false;
                }
              });
            }
          });
      }
      let data = { attach: "post", aid: _id };
      this.$axios.post("/api/like", data).then((res) => {
        if (res.status === 200) {
          this.data.forEach((item) => {
            if (item._id === _id) {
              item.like = true;
            }
          });
        }
      });
    },
    remove(_id) {
      this.$axios.delete("/api/post/" + _id).then((res) => {
        if (res.status === 200) {
          this.$emit(
            "update:data",
            this.data.filter((item) => item._id !== _id)
          );
        }
      });
    },
  },
};
</script>
