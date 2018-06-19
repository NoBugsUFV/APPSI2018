<template>
  <v-app ref='app'>
    <v-navigation-drawer fixed :clipped='false' v-model="left" app >
      <SideBar/>
    </v-navigation-drawer>
    <MainToolbar/>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer>
    </v-footer>
  </v-app>
</template>

<script>

import { MainToolbar, SideBar } from "@/components";
import { storeLayout, toggleLeft } from "./store/actions";
import { VNavigationDrawer, VFooter } from 'vuetify'

export default {
  name: "App",
  components: {
    MainToolbar,
    SideBar,
    VNavigationDrawer,
    VFooter
  },
  methods: {
  },
  mounted() {
    storeLayout(this.$store,this)
  },
  data() {
    return {
      left: false,
      right: false,
      clipped: false,
      miniVariant: true,
    };
  }
};
</script>
