import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/views/index'
import PostList from '../components/views/post/list'
import PostCreate from '../components/views/post/add'
import PostDetail from '../components/views/post/detail'

Vue.use(Router)

export default new Router({
  // mode:'history',  //使用history防止url中出现#
  routes: [
    
    {
      path: '/',
      icon: 'home',
      name: '網誌首頁',
      component: Index
    },
    {
      path: '/list',
      icon: 'list',
      name: '文章列表',
      component: PostList
    },
    {
      path: '/create',
      icon: 'edit',
      name: '建立文章',
      component: PostCreate
    },
    {
      path: '/detail',
      icon: 'file',
      name: '文章內容',
      component: PostDetail
    }
  ]
})