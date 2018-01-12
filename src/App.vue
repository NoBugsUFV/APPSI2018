<template>
  <v-app ref='app'>
    <v-navigation-drawer fixed :clipped='false' v-model="left" app >
      Opa
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
          icon: "bubble_chart",
          title: "Inspire"
        }
      ],
      miniVariant: true,
    };
  }
};
</script>
