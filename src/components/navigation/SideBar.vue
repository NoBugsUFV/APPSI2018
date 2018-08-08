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
			<v-list-tile>
				<v-list-tile-content>
					<v-list-tile-title
						v-text="'Logout'"
						@click="logout()"
					></v-list-tile-title>
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
          route: { name: "home" },
          auth: () => this.$auth.check()
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
          icon: "none",
          title: "Admin",
          route: { name: "admin" },
          auth: () => this.$auth.check("admin")
        }
      ]
    };
  },
  methods: {
    logout() {
      this.$auth.logout({
        makeRequest: true,
        redirect: "/"
      });
    }
  }
};
</script>

<style scoped>
</style>


