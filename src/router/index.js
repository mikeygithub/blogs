import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/common/main'

// module.exports = file => require('@/components/' + file + '.vue').default

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    }
  ]
})
