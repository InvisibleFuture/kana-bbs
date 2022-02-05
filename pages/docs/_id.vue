<template lang="pug">
.docs-item
  button.editor(@click="editor()") {{ edit ? '取消编辑' : '编辑模式' }}
  button.submit(@click="submit()", v-if="edit") 保存修改
  .contenter(v-if="!edit")
    h1.title {{ data.name }}
    p {{ data.data }}
  .contenter(v-else)
    input.title(v-model="doc.name")
    textarea.data(v-model="doc.data", rows="32")
</template>

<script>
export default {
  asyncData({ $axios, params }) {
    return $axios.get(`/api/docs/${params.id}`).then((res) => {
      return { data: res.data, edit: false, doc: { data: "", name: "" } };
    });
  },
  methods: {
    editor() {
      if (!this.eidt) {
        this.doc.name = this.data.name;
        this.doc.data = this.data.data;
      }
      this.edit = !this.edit;
    },
    submit() {
      this.$axios.patch(`/api/docs/${this.data._id}`, this.doc).then((res) => {
        if (res.status === 200) {
          this.data.name = this.doc.name;
          this.data.data = this.doc.data;
          this.edit = false;
        }
        console.log(res.data);
      });
    },
  },
};
</script>

<style lang="sass">
.docs-item
  position: relative
  .editor
    position: absolute
    top: 0
    right: 0
  .submit
    position: absolute
    top: 0
    right: 6rem
    background: #14cc14
  h1
    margin-top: 0
input.title, textarea.data
  width: 100%
  background: none
  border: none
  padding: 1rem 2rem
  box-sizing: border-box
  font-size: 1rem
input.title
  font-size: 1.5rem

input:focus, textarea:focus
  border: none
</style>
