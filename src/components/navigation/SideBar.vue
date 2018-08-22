<template>
	<div>
		<v-list>
			<v-list-tile avatar v-for="item in items" v-show="item.auth()" v-bind:key="item.title" router :to="item.route">
				<v-list-tile-action>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title v-text="item.title">
					</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
      <!--Logout-->
      <v-list-tile avatar v-show="$auth.check()" @click="$auth.logout()">
				<v-list-tile-action>
					<v-icon>reply</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title v-text="'Logout'">
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
          route: { name: "prog" },
          auth: () => true
        },
        {
          icon: "help",
          title: "Perguntas frequentes",
          route: { name: "faq" },
          auth: () => true
        },
        {
          icon: "face",
          title: "Login",
          route: { name: "login" },
          auth: () => !this.$auth.check()
        },
        {
          icon: "lock",
          title: "Administrador",
          route: { name: "admin" },
          auth: () => this.$auth.check("admin")
        },
        {
          icon: "save",
          title: "Anotações",
          route: { name: "annotations" },
          auth: () => true
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>


