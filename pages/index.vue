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
          NuxtLink(to="/thread/create")
            button 新议题
  //NuxtLink(to="/index") NASAS
  //NuxtLink(to="/index/hCG7UKzSRgCzyd8Y") |NASAS
  //Nuxt
  footer.footer
    p
      b Kana
    .github
      a(href="https://github.com/InvisibleFuture/kana")
        span.fab.fa-github
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
