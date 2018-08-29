import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/views/HelloWorld'
import test from '../components/views/test'

Vue.use(Router)

export default new Router({
  mode:'history',  //使用history防止url中出现#
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,{
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})