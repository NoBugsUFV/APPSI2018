<template>
  <v-card>
    <router-link :to="{ name: 'view-note', params: { id: note.id } }" v-for="note in notes" :key="note.id" >
      <div class="note" >
        <div class="note_header common_header">
          <div class="note_h_left">
            <span class="note_username">Você</span>
            <span class='note_time' >{{ note.time | timeAgo }}</span>
          </div>
        </div>
        <div class="note_title">
          <span>{{ note.title | to-uppercase }}</span>
        </div>
        <div class="note_content">
          <span>{{ note.content | slice }}</span>
        </div>
      </div>
    </router-link>
  </v-card>

</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
