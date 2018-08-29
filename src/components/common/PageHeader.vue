<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    msg: String
  },
}
</script>

<style scoped>
h2 {
  margin: 10px;
}
</style>
