// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入VCharts
import VCharts from 'v-charts'
import axios from 'axios'
import Common from '@/components/common/Common'

// 全局使用，使用方法为:this.common
Vue.prototype.common = Common
// 全局使用
Vue.use(VCharts)
Vue.use(ElementUI)
Vue.config.productionTip = false
// this.axios
Vue.prototype.axios = axios.create({
  baseURL: 'http://localhost:3000'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
