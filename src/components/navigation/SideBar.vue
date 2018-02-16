<template>
    <div>
        <v-list>
            <v-list-tile avatar v-for="item in items" v-bind:key="item.title" router :to="item.route">
                <v-list-tile-action>
                <Icon color='pink' :name='item.icon' v-if="item.icon"></Icon>
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

import Icon from 'vue-awesome/components/Icon'

export default {
  name: "SideBar",
  data() {
    return {
      items: [
        {
          icon: "fa-event",
          title: "Programação",
          route: "/Prog"
        },
        {
          icon: "fa-help",
          title: "Q&A",
          route: "/QandA"
        },
        {
          icon: "fa-face",
          title: "Login",
          route: "/Login"
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>


