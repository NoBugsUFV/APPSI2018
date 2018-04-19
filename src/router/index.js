import Vue from 'vue'
import Router from 'vue-router'
import { Home, QandA, Prog, Login, Admin } from '@/components/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/QandA',
      name: 'QandA',
      component: QandA
    },
    {
      path: '/Prog',
      name: 'Prog',
      component: Prog
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
