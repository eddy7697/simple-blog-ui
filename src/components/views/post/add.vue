<template>
  <el-container>
    <el-header>
      <PageHeader msg="新增文章" />
    </el-header>
    <el-main>    
      <h1>新增文章</h1>               
    </el-main>
  </el-container>
</template>

<script>
import PageHeader from '../../common/PageHeader'

export default {
  name: 'PostCreate',
  components: {
    PageHeader
  },
  props: {
    msg: String
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
