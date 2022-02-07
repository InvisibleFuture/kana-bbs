<template lang="pug">
.post-list
  ul(v-if="data.length")
    li(v-for="item in data", :key="item._id")
      NuxtLink(:to="`/user/${item.user._id}`")
        img.avatar(:src="item.user.avatar")
      .content
        .title {{ item.user.name }}
        .info
          span {{ rwdate(item.updatedAt) }}
          div(v-html="markdown(item.data)")
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
        .title
          font-size: 1.1rem
          font-weight: 600
        .info
          span
            margin-right: .5rem
</style>

<script>
import { marked } from "marked";
export default {
  props: ["data"],
  methods: {
    rwdate(utc) {
      let t = new Date(utc);
      return t.getMonth() + 1 + "月 " + t.getDate() + ", " + t.getFullYear();
    },
    markdown(data) {
      return marked.parse(data);
    },
  },
};
</script>
