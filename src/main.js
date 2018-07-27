// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

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
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'

import fontawesome from '@fortawesome/fontawesome'

import App from './App'
import router from './router'
import store from './store'

Vue.use(fontawesome)

Vue.use( Vuetify, {
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
