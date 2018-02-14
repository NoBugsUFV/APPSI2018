// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VExpansionPanel,
  VCard,
  VTabs,
  VTextField
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify, {
  Vuex,
  VueRouter,
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VExpansionPanel,
    VCard,
    VTabs,
    VTextField
  },
  theme: {
    primary: '#ffa8c8',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
