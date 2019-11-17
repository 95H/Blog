import Vue from 'vue'
import Router from 'vue-router'
import First from '@/view/first'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    },
  ]
})
