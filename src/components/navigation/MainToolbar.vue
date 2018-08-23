<template>
<v-toolbar dark fixed app color='primary'>
      <v-toolbar-side-icon @click="left"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title" class="title"></v-toolbar-title>
</v-toolbar>
</template>

<script>

import { toggleLeft } from '../../store/actions'

export default {
  name: "MainToolbar",
  data() {
    return {
      clipped: true,
      title: "Semana de Informática"
    }
  },
  mounted(){
  },
  methods: {
    left(){
      toggleLeft(this.$store)
    }
  }
};
</script>

<style>
.title, .toolbar__side-icon.btn.btn--icon {
  color: white;
}
</style>