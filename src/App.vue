<template>
  <div id="app">
    <el-container>      
      <el-container :style="computedStyle">
        <el-aside width="200px">
          <PageAside />
        </el-aside>
        <el-container>
          <el-header>
            <PageHeader />
          </el-header>
          <el-main>
            <transition name="slide-fade" mode="out-in">
              <router-view></router-view>
            </transition>            
          </el-main>
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
import PageHeader from './components/common/PageHeader'
import PageFooter from './components/common/PageFooter'

export default {
  name: 'app',
  components: {
    PageAside, 
    PageHeader, 
    PageFooter
  },
  created() {
    window.addEventListener('resize', this.computeStyle);
  },
  data() {
    return {
      computedStyle: `height: ${window.innerHeight - 16}px; border: 1px solid #eee`
    }
  },
  methods: {
    computeStyle() {
      this.computedStyle = `height: ${window.innerHeight - 16}px; border: 1px solid #eee`
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
.slide-fade-enter-active {
  transition: all .15s ease;
}
.slide-fade-leave-active {
  transition: all .15s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
