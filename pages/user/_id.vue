<template lang="pug">
.user
  .header
    img.avatar(:src="user.avatar")
    h1
      span.name {{ user.name }}
      span.admin(v-if="user.gid === 1") Admin
  .content
    p USER
    p {{ user }}
</template>

<script>
export default {
  asyncData({ $axios, params }) {
    return $axios.get(`/api/user/${params.id}`).then((res) => {
      return { user: res.data };
    });
  },
};
</script>

<style lang="sass">
.user
  >.header
    background: rgba(0, 0, 0, .5)
    height: 200px
    margin: 0
    padding: 4rem
    text-align: center
    .avatar
      height: 64px
      width: 64px
      border-radius: 50%
      background-color: #ffffff
      overflow: hidden
    .name
      color: #ffffff
</style>
