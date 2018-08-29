<template>
  <el-container>
    <el-header>
      <PageHeader msg="首頁" />
    </el-header>
    <el-main>    
      <h1>首頁</h1>               
    </el-main>
  </el-container>
</template>

<script>
import PageHeader from '../common/PageHeader'

export default {
  name: 'index',
  components: {
    PageHeader
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
