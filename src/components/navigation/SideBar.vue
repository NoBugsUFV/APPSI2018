<template>
    <div>
        <v-list>
            <v-list-tile avatar v-for="item in items" v-bind:key="item.title" router :to="item.route">
                <v-list-tile-action>
                  <v-icon>{{item.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                <v-list-tile-title v-text="item.title">
                </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </div>
</template>

<script>

export default {
  name: "SideBar",
  data() {
    return {
      items: [
        {
          icon: "event",
          title: "Programação",
          route: "/prog"
        },
        {
          icon: "help",
          title: "Q&A",
          route: "/faq"
        },
        {
          icon: "face",
          title: "Login",
          route: "/login"
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>


