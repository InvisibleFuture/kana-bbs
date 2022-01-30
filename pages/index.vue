<template lang="pug">
.index.main-width
  article
    .card
      .content
        p 下载 Kana: 400 行代码实现服务端
        p 下载 Kana-bbs: 基于 kana 后端使用 Nuxt3 构建的社区论坛程序
        p 文档补全计划: 标记任何你感到疑惑的或是不符合直觉之处, 以及你需要却感觉无法轻松实现的功能
    .card
      .header
        span 最新
        span 精华
        .expnone
        nuxt-link.create-thread(to="/thread/create") 新议题
      .content
        ThreadList(:data="data")
  aside
    .card
      .content
        .bbs-title Kana 开发者论坛
        p 基于 node 实现的小型服务端
</template>

<script>
export default {
  asyncData({ $axios }) {
    return $axios.get("/api/thread").then((res) => {
      return { data: res.data };
    });
  },
};
</script>

<style lang="sass">
// 基本布局
.index
  display: flex

  article
    flex: 75
    .card .header
      display: flex
      .expnone
        flex: 1
  aside
    flex: 25

.card
  margin: 1rem .5rem
  border-radius: .5rem
  overflow: hidden
  background-color: #ffffff
  box-shadow: 0 6px 22px 0 rgba(0,0,0,.08)
  .header
    padding: 1rem
    border-bottom: 1px solid #ccc

  .content
    padding: 1rem

a.create-thread
  border: none
  border-radius: .25rem
  padding: .5rem 1rem
  background-color: #007bff
  color: #ffffff !important
  display: block

.bbs-title
  font-size: 1.2rem
  font-weight: 600
</style>
