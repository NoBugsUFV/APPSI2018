import Vue from "vue";
import Router from "vue-router";
import { Home, QandA, Prog, Login, Admin, Register } from "@/components/pages";


Vue.use(Router);

export default new Router({
	routes: [
		{
            path: "/",
            name: 'home',
			component: Home
		},
		{
            path: "/faq",
            name: 'faq',
			component: QandA,
			meta: {
				auth: true
			}
		},
		{
            path: "/prog",
            name: 'prog',
			component: Prog,
			meta: {
				auth: false
			}
		},
		{
            path: "/login",
            name: 'login',
			component: Login,
			meta: {
				auth: false
			}
		},
		{
            path: "/admin",
            name: 'admin',
			component: Admin,
			meta: {
				auth: true
			}
        },
        {
            path: "/register",
            name: 'register',
			component: Register,
			meta: {
				auth: false
			}
		}
	]
});
