<template lang="pug">
.thread-list
  ul(v-if="data.length")
    li(v-for="item in data", :key="item._id")
      NuxtLink(:to="'/user/' + item.user._id")
        img.avatar(:src="item.user.avatar")
      NuxtLink.content(:to="'/thread/' + item._id")
        .title {{ item.title }}
        .info
          span {{ item.user.name }}
          span {{ rwdate(item.createdAt) }}
  .thread-none(v-else) 没有内容~
</template>

<style lang="sass">
.thread-none
  display: flex
  justify-content: center
  align-items: center
  justify-items: center
  text-align: center
  min-height: 24rem
.thread-list
  ul
    list-style: none
    padding: 0
    margin: 0
    li
      display: flex
      align-items: center
      border-radius: .5rem
      height: 48px
      margin: 0
      padding: 8px 0
      .avatar
        width: 48px
        height: 48px
        background: rgba(0, 0, 0, .05)
        border-radius: 50%
        overflow: hidden
        margin-right: .5rem
      .content
        flex: 1
        .title
          font-size: 1.1rem
          font-weight: 600
        .info
          span
            margin-right: .5rem
    li:hover
      background: rgba(0, 0, 0, .025)
</style>

<script>
export default {
  props: ["data"],
  methods: {
    rwdate(utc) {
      let t = new Date(utc);
      return t.getMonth() + 1 + "月 " + t.getDate() + ", " + t.getFullYear();
    },
  },
};
</script>