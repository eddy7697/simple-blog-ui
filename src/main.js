import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faEdit, faList, faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faEdit, faList, faFile)

Vue.component('font-awesome-icon', FontAwesomeIcon)

window.$ = $

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
