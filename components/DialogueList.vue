<template lang="pug">
.dialogue-list
  .post(v-for="item in data", :key="item._id")
    .left
      img.avatar(:src="item.user.avatar")
    .right
      .name {{ item.user.name }}
      .message {{ item.data }}
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="sass" scoped>
.dialogue-list
  .post
    display: flex
    margin: 1rem 0
    .left
      justify-content: center
      align-items: center
      .avatar
        width: 2rem
        height: 2rem
        background: #ccc
        border-radius: 50%
        margin: .5rem auto
    .right
      padding: 0 2rem
      .name
        color: #999
        font-size: .8rem
      .message
        background: #ffffff
        padding: 1rem
        border-radius: 1rem
        position: relative

        &::before
          content: ""
          position: absolute
          top: 10px
          left: -1rem
          border-top: 20px solid #ffffff
          border-left: 1rem solid transparent
          border-right: 1rem solid transparent
</style>
