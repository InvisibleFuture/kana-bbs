<template lang="pug">
.docs-index
  .ceremony
    .circumscription
      .docs
        .outline
          ul
            li(v-for="item in list", :key="item._id")
              NuxtLink(:to="`/docs/${item._id}`") {{ item.name }}
              i.fas.fa-sort-numeric-up-alt(
                @click="settop(item, true)",
                v-if="account.gid"
              ) {{ item.top || 0 }}
          .create-doc(v-if="account.gid")
            button(@click="submit()") Create
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
  computed: {
    account() {
      return this.$store.state.account;
    },
  },
  mounted() {
    this.listsort();
  },
  methods: {
    submit() {
      this.$axios.post("/api/docs", this.doc).then((res) => {
        if (res.status === 200) {
          this.list.push(res.data);
        }
      });
    },
    settop(item, n) {
      item.top = item.top || 0;
      item.top = n ? item.top + 1 : item.top - 1;
      let data = { top: item.top };
      this.$axios.patch(`/api/docs/${item._id}`, data).then((res) => {
        if (res.status === 200) this.listsort();
        console.log(res.data);
      });
    },
    listsort() {
      this.list.sort((x, y) => {
        x.top = x.top || 0;
        y.top = y.top || 0;
        return y.top - x.top;
      });
    },
  },
};
</script>

<style lang="sass">
.docs-index
  .docs
    display: flex
    width: 100%
    .outline
      width: 12rem
      padding: 2rem
      //background: #ccefef
    .content
      padding: 2rem
      flex: 1
      //background: #ffefef

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
