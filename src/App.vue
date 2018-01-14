<template>
  <v-app ref='app'>
    <v-navigation-drawer fixed :clipped='false' v-model="left" app >
      <v-list-tile avatar v-for="item in items" v-bind:key="item.title" @click="">
        <v-list-tile-action>
          <v-icon v-if="item.icon" color="pink">{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
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
import { MainToolbar } from "./components";
import { storeLayout, toggleLeft } from "./store/actions";

export default {
  name: "App",
  components: {
    MainToolbar
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
      items: [
        {
          icon: "event",
          title: "Programação"
        },
        {
          icon: "help",
          title: "Q&A"
        }
      ],
      miniVariant: true,
    };
  }
};
</script>
