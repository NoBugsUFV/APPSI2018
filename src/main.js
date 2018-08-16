// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import VueResource from "vue-resource";
// import Dashboard from './components/pages/Dashboard.vue';
import Home from "./components/pages/Home.vue";
import Register from "./components/pages/Register.vue";
import Login from "./components/pages/Login.vue";

// Filters & Directives
require("./f&d/filter");
require("./f&d/directive");

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = "http://localhost:8000/api";

import {
	Vuetify,
	VApp,
	VAlert,
	VList,
	VBtn,
	VIcon,
	VGrid,
	transitions,
	VCard,
	VTextField,
	VToolbar,
	VTabs,
	VExpansionPanel
} from "vuetify";
import "vuetify/src/stylus/app.styl";
import "vuetify/dist/vuetify.min.css";

import fontawesome from "@fortawesome/fontawesome";

import router from "./router";
import store from "./store";

// Configuração do vue-auth
Vue.router = router;
Vue.use(require("@websanova/vue-auth"), {
	auth: require("@websanova/vue-auth/drivers/auth/bearer.js"),
	http: require("@websanova/vue-auth/drivers/http/vue-resource.1.x.js"),
	router: require("@websanova/vue-auth/drivers/router/vue-router.2.x.js"),
	rolesVar: "tipo",
	loginData: {
		url: "auth/login",
		method: "POST",
		fetchUser: false
	},
	fetchData: { url: "auth/user", method: "GET" },
	refreshData: {
		url: "auth/refresh",
		method: "GET",
		atInit: true,
		interval: 30
	},
	logoutData: {
		url: "auth/logout",
		method: "GET",
		redirect: "/",
		makeRequest: true
	},
	registerData: { url: "auth/register", method: "POST", redirect: "/" }
});
App.router = Vue.router;
// END

Vue.use(fontawesome);

Vue.use(Vuetify, {
	components: {
		VApp,
		VAlert,
		VList,
		VBtn,
		VIcon,
		VGrid,
		transitions,
		VCard,
		VTextField,
		VToolbar,
		VTabs,
		VExpansionPanel
	},
	theme: {
		primary: "#ffa8c8",
		secondary: "#424242",
		accent: "#82B1FF",
		error: "#FF5252",
		info: "#2196F3",
		success: "#4CAF50",
		warning: "#FFC107"
	}
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	store,
	template: "<App/>",
	components: {
		App
	}
});
