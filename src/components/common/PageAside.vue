<template>
  <div>
    <img src="@/assets/logo.png" alt="">
    <el-menu
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item 
        v-for="(item, index) in $router.options.routes" 
        v-bind:key="index" 
        :index="item.path">
        <font-awesome-icon :icon="item.icon" />
        <span class="route-title" slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'PageAside',
  methods: {
    handleOpen() {

    },
    handleClose() {
      
    }
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
