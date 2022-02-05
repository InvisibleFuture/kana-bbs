<template lang="pug">
.docs-index
  .docs.circumscription
    .outline
      ul
        li 下载安装
        li 接口使用
        li 插件制作
        li 基础开发
        li(v-for="item in list", :key="item._id")
          NuxtLink(:to="`/docs/${item._id}`") {{ item.name }}
      .create-doc
        button(@click="createin = !createin") Create
    .content
      Nuxt
</template>

<script>
export default {
  asyncData({ $axios }) {
    return $axios.get("/api/docs").then((res) => {
      return {
        list: res.data,
        doc: { name: "未命名文档", data: "输入内容" },
        createin: false,
      };
    });
  },
  methods: {
    submit() {
      this.$axios.post("/api/docs", this.doc).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style lang="sass">
.docs-index
  margin: 8rem 4rem
  .docs
    display: flex
    width: 100%
    .outline
      width: 12rem
      padding: 2rem
      background: #ccefef
    .content
      padding: 2rem
      background: #ffefef
      flex: 1

input.title, textarea.data
  width: 100%
  background: none
  border: none
  padding: 1rem 2rem
  box-sizing: border-box
  font-size: 1rem
input.title
  font-size: 1.5rem
</style>
