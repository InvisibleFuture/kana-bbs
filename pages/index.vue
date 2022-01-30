<template lang="pug">
.index-default
  .circumscription
    ModelBox
    p 下载安装, 查看文档, 提问讨论, 开发
  .ceremony
    .circumscription
      ThreadList(:data="data")
      ul
        li 除去阅览以外, 还可以做一些什么
        li 如翻页, 如发表
        li
          nuxt-link(to="/thread/create")
            button 新议题
  //.index.main-width
  //  article
  //    .card
  //      .content
  //        p 下载 Kana: 400 行代码实现服务端
  //        p 下载 Kana-bbs: 基于 kana 后端使用 Nuxt3 构建的社区论坛程序
  //        p 文档补全计划: 标记任何你感到疑惑的或是不符合直觉之处, 以及你需要却感觉无法轻松实现的功能
  //        //ModelBox
  //        //ModelConesInner
  //    .card
  //      .header
  //        span 最新
  //        span 精华
  //        .expnone
  //        nuxt-link.create-thread(to="/thread/create") 新议题
  //      .content
  //        ThreadList(:data="data")
  //  aside
  //    .card
  //      .content
  //        .bbs-title Kana 开发者论坛
  //        p
  //        | 基于 node 实现的小型服务端,旨在快速灵活构建小型项目
  //        | <br/> 1. 数据类型无限扩展并复用
  //        | <br/> 2. 无依赖免配置一键安装
  //        | <br/> 3. 接口模型
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
