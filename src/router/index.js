import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Detail from '@/views/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
