<template lang="pug">
.admin-object-type
  p 对象类型列表
</template>

<script>
export default {
  asyncData({ $axios, params }) {
    return $axios.get(`/api/${params.name}`).then((res) => {
      return { list: res.data };
    });
  },
};
</script>
