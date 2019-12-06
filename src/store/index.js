import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    asideVisible: true // 侧边栏显示状态
  },
  mutations: {
    // 重置vuex状态
    changeAsideVisible () {
      this.asideVisible = !this.asideVisible
    }
  }
})
