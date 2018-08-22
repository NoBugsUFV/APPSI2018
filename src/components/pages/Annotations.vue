<template>
  <div class='container notes_wrapper' align='center'>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Anotações"
    };
  },
  created() {
    this.$store.dispatch("GET_NOTES");
  }
};
</script>

<style scoped>
</style>
