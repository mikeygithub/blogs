// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store'
import ElementUI from 'element-ui'
import '@/icons' // api: http://www.iconfont.cn/
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
Vue.use(ElementUI)
Vue.config.productionTip = false
// 挂载全局
Vue.prototype.asideVisible = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
