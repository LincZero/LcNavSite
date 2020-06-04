import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    easy: 0, // 简易模式 - 界面
    abroad: true, // 国外模式 - 内容
    safe: false, // 内鬼模式 - 导航项
    // disable: true, // 是否显示禁用项
    left: false, // 左侧栏模式 - 界面
    mode: '' // 路由模式 - 状态
  },
  mutations: {
    fm_cg_abroad(state, abroad) {
      state.abroad = abroad
    },
    fm_cg_left(state) {
      state.left = !state.left
    }
  },
  actions: {},
  modules: {}
})