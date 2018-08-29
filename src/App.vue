<template>
  <div id="app">
    <el-container>      
      <el-container :style="computedStyle">
        <el-aside width="200px" id="page-aside">
          <PageAside />
        </el-aside>
        <el-container>
          <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
          </transition> 
          <el-footer>
            <PageFooter />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import PageAside from './components/common/PageAside'
import PageFooter from './components/common/PageFooter'

export default {
  name: 'app',
  components: {
    PageAside, 
    PageFooter
  },
  created() {
    window.addEventListener('resize', this.computeStyle)
  },
  data() {
    return {
      computedStyle: `height: ${window.innerHeight}px`
    }
  },
  methods: {
    computeStyle() {
      this.computedStyle = `height: ${window.innerHeight}px`
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#page-aside {
  background-color: #545c64;
  box-shadow: 2px 2px 12px -2px #999;
  .el-menu {
    border: none;
    .el-menu-item {
      text-align: left;

      span.route-title {
        margin-left: 10px;
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all .15s ease;
}
.slide-fade-leave-active {
  transition: all .15s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
</style>
