<template>
<v-toolbar fixed app color='primary'>
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
      title: "Semana de informática"
    }
  },
  methods: {
    left(){
      toggleLeft(this.$store,true)
    }
  }
};
</script>

<style>
.title, .toolbar__side-icon.btn.btn--icon {
  color: white;
}
</style>