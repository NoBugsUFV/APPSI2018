<template>
    <div class='container'>
        Nada aqui
    </div>
</template>

<script>

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


