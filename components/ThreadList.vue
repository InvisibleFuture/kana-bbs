<template lang="pug">
.thread-list
  ul(v-if="data.length")
    li(v-for="item in data", :key="item._id")
      NuxtLink(:to="'/thread/' + item._id")
        .avatar
        .content
          .title {{ item.title }}
          .info
            span {{ item.user.name }}
            span {{ item.createdAt }}
            span {{ item.updatedAt }}
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
    li a
      display: flex
      align-items: center
      border-radius: .5rem
      height: 48px
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
        .title
          font-size: 1.1rem
          font-weight: 600
        .info
          span
            margin-right: .5rem
    li a:hover
      background: rgba(0, 0, 0, .025)
</style>

<script>
export default {
  props: ["data"],
};
</script>