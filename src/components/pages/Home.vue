<template>
    <div class='container'>
        <router-link :to="{ name: 'Home2', params: { id: 213, novo: 213 }}">Rota diferente</router-link>
        {{items}}
    </div>
</template>

<script>
import { users } from "../../database";

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    items: function() {
      const value = {};
      users.on(
        "value",
        snapshot => {
          console.log("entrou");
          snapshot.forEach(e => value.push(e));
        },
        error => console.log(error)
      );
      console.log(value);
      return value;
    }
  }
};
</script>

<style scoped>

</style>


