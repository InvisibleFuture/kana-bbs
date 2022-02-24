<template lang="pug">
.user
  .header
    img.avatar(:src="user.avatar")
    h1
      span.name {{ user.name }}
      span.admin(v-if="user.gid === 1")
        i.fas.fa-user-shield
  .content
    ModelBoxNone
    p 没有公开的资源..
    //p {{ user }}
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
    .admin
      margin: 0 .5rem
      font-size: 1.2rem
      color: #ffffff
      background: #ff9988
      border-radius: .25rem
      //padding: 0 .5rem
  >.content
    padding: 4rem
    text-align: center
</style>
