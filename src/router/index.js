import Vue from 'vue'
import Router from 'vue-router'
import { HelloWorld, QandA, Prog, Login, Admin } from '@/components/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
