import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    easy: false, // 简易模式 - 界面
    left: false, // 左侧栏模式 - 界面
    thin: true, // 窄内容模式 - 界面
    live2d: true, // Live2d - 界面

    abroad: true, // 国外模式 - 内容
    safe: false, // 内鬼模式 - 内容-导航项
    // disable: true, // 是否显示禁用项

    input: '', // 输入栏内容
    mode: '', // 路由模式 - 状态
    siteDb: {} // 网站集数据，异步得来
  },
  mutations: {
    fm_cg_abroad(state, abroad) {
      state.abroad = abroad
    },
    fm_cg_left(state) {
      state.left = !state.left
    },
    fm_cg_thin(state) {
      state.thin = !state.thin
    },
    fm_cg_live2d(state) {
      state.live2d = !state.live2d
    },
    fm_cg_siteDb(state, data) {
      state.siteDb = data
    },
    fm_cg_input(state, input) {
      state.input = input
    }
  },
  actions: {},
  modules: {}
})