<template>

  <div class='create_note modal'>
    <transition name='fade' >
      <form @submit.prevent='createNote' >

        <div class="c_n_header modal_header">
          <span class="title" >Criar uma nota</span>
        </div>

        <div class="c_n_middle modal_middle">
          <input
            type="text"
            placeholder='Título..'
            ref='title'
            required
            spellCheck="false"
            autoComplete="false"
            autoFocus
          />
          <textarea
            placeholder='Sua nota..'
            ref='content'
            required
            spellCheck='false'
            autoComplete='false'
          ></textarea>
        </div>

        <div class="c_n_bottom modal_bottom">
          <a href="#" class='c_n_cancel sec_btn' @click.prevent="Back" >Voltar</a>
          <input type="submit" class='c_n_add pri_btn' value='Add note' />
        </div>

      </form>
    </transition>
  </div>

</template>

<script>
import Notify from "handy-notification";
import notesDB from "../../notesDB";

export default {
  methods: {
    Back() {
      window.history.back();
    },
    createNote() {
      let { title, content } = this.$refs;
      //salva nota;
      let retorno = notesDB.set({
        title: title.value,
        content: content.value
      });
      console.log("dispatch CREATE_NOTE");
      console.log(retorno);
      this.$store.dispatch("CREATE_NOTE", retorno);
      console.log("continuando");
      title.value = "";
      content.value = "";
      this.Back();
      Notify({ value: "Note Created!!" }); //notas
    }
  }
};
</script>

<style scoped>
</style>
