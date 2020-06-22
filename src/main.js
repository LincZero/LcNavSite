import Vue from 'vue'
import router from './router'
import store from './store' // Vuex
import ElementUI from 'element-ui' // el-ui
import 'element-ui/lib/theme-chalk/index.css' // el-ui
import VueLazyload from 'vue-lazyload' // 图片懒加载
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'img/Null.png',
  loading: 'img/loading.gif',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')