import Vue from "vue";
import Router from "vue-router";
import {
	Home,
	QandA,
	Prog,
	Login,
	Admin,
	Register,
	Annotations
} from "@/components/pages";

import Notes from "../components/notes/notes.vue";
import CreateNote from "../components/notes/create-note.vue";
import ViewNote from "../components/notes/view-note.vue";
import Overlay from "../components/others/overlay.vue";
import notFound from "../components/others/404.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/faq",
			name: "faq",
			component: QandA,
			meta: {
				auth: true
			}
		},
		{
			path: "/prog",
			name: "prog",
			component: Prog,
			meta: {
				auth: undefined
			}
		},
		{
			path: "/login",
			name: "login",
			component: Login,
			meta: {
				auth: false
			}
		},
		{
			path: "/admin",
			name: "admin",
			component: Admin,
			meta: {
				auth: {
					roles: "admin",
					redirect: { name: "home" }
				}
			}
		},
		{
			path: "/register",
			name: "register",
			component: Register,
			meta: {
				auth: false
			}
		},
		{
			path: "/annotations",
			name: "annotations",
			component: Annotations,
			meta: {
				auth: true
			},
			children: [
				{
					name: "create-note",
					path: "create-note",
					components: {
						"create-note": CreateNote,
						overlay: Overlay
					}
				},
				{
					path: "view-note/:id",
					name: "view-note",
					components: {
						"view-note": ViewNote,
						overlay: Overlay
					}
				},
				{
					path: "view-note",
					redirect: "/notes"
				}
			]
		}
	],
	mode: "history"
});
