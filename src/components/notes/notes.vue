<template>
  <div class="home">

    <div class="home_info">
      <span>{{ noOfNotes }}</span>
      <router-link to="/notes/create-note" class="pri_btn" >Criar Nota</router-link>
    </div>

    <Note v-if="notes.length >= 0" :notes="notes" />
    <Nothing v-if="notes.length == 0" mssg="Sem notas. crie uma!" />
    <End v-if="notes.length > 0" />

    <router-view name="create-note" v-title='createTitle'  />
    <router-view name="overlay" />

    <router-view name="view-note" v-title="viewTitle" />
    <router-view name="overlay" />

  </div>
</template>

<script>
import Note from "./note.vue";
import Nothing from "../others/Nothing.vue";
import End from "../others/End.vue";

export default {
  data() {
    return {
      createTitle: "Criar Nota",
      viewTitle: "Ver Nota"
    };
  },
  computed: {
    notes() {
      return this.$store.state.notes.notes;
    },
    noOfNotes() {
      let l = parseInt(this.notes.length),
        no = l == 0 ? "Sem notas" : l == 1 ? "1 Nota" : `${l} Notas`;
      return no;
    }
  },
  components: {
    Note: Note,
    Nothing: Nothing,
    End: End
  }
};
</script>

<style>
</style>
