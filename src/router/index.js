import Vue from 'vue'
import Router from 'vue-router'
import { Home, QandA, Prog, Login, Admin } from '@/components/pages'

import UserRegister from '@/components/pages/User/Register.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/faq',
            component: QandA
        },
        {
            path: '/prog',
            component: Prog
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/admin',
            component: Admin
        },
        {
            path: '/user',
            component: { template: '<router-view></router-view>'},
            children: [
                {
                    path: 'register',
                    component: UserRegister
                }
            ]
        }
    ]
})