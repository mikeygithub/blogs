// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import App from './App'
import router from './router'
import VueAnime from 'vue-animejs'
import VueParticles from 'vue-particles'
import animate from 'animate.css'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.use(VueVideoPlayer)
Vue.use(animate)
Vue.use(VueParticles)
Vue.use(VueAnime)
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
