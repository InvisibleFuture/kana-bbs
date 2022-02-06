<template lang="pug">
.admin-object
  p object {{ name }}
</template>

<script>
export default {
  asyncData({ params }) {
    return { name: params.name };
  },
};
</script>