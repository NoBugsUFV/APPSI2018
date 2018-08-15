<template>

  <div >
    <transition name="fade" >
      <div class='view_note modal'>
        <div class="v_n_header modal_header">
          <span class='title'>View note</span>
        </div>
        <div class="v_n_middle modal_middle">
          <div class="v_n_info">
            <img src='/images/vue.png' alt="" />
            <div class="v_n_left">
              <span class='v_n_username'>Você</span>
              <span class="v_n_time">{{ note.time | timeAgo }}</span>
            </div>
          </div>
          <span
            class='v_n_title'
            :contenteditable="editing"
            :class="{content_editor: editing}"
            spellCheck='false'
          >{{ note.title }}</span>

          <span
            class='v_n_content'
            :contenteditable="editing"
            :class="{content_editor: editing}"
            spellCheck='false'
          >{{ note.content }}</span>
        </div>
        <div class="v_n_bottom modal_bottom">

          <a
            v-if="editing"
            href="#"
            class="v_n_edit sec_btn"
            @click.prevent="editNote"
          >Finalizar edição</a>

          <a
            v-if="!editing"
            href="#"
            class="v_n_edit sec_btn"
            @click.prevent="_toggle('editing')"
          >Editar nota</a>

          <a
            href="#"
            class='v_n_delete sec_btn'
            :class="{sec_btn_disabled: editing}"
            @click.prevent="_toggle('deleting')"
          >Deletar Nota</a>

          <a
            href='#'
            class='v_n_cancel pri_btn'
            :class="{a_disabled: editing}"
            @click.prevent="Back"
          >Pronto</a>

        </div>
      </div>
    </transition>

    <Overlay v-if="deleting" :visible="true" />

    <Prompt
      v-if="deleting"
      title="Apagar nota"
      content="Se a nota for apagada não há como recuperar"
      actionText="Apagar"
      @back="_toggle('deleting')"
      @action="deleteNote"
    />

  </div>

</template>

<script>
import $ from "jquery";
import Notify from "handy-notification";
import Prompt from "../others/prompt.vue";
import Overlay from "../others/overlay.vue";

export default {
  data() {
    return {
      note: {},
      deleting: false,
      editing: false
    };
  },
  methods: {
    Back() {
      window.history.back();
    },
    _toggle(what) {
      switch (what) {
        case "editing":
          this.editing = !this.editing;
          $(".v_n_edit").blur();
          break;
        case "deleting":
          this.deleting = !this.deleting;
          break;
      }
    },
    deleteNote() {
      let { $http, $route: { params }, $store: { dispatch } } = this;

      //apagar nota
      /*$http.post('/api/delete-note', { id: params.id }).then(s => {
        dispatch('DELETE_NOTE', params.id)
        this.Back()
        Notify({ value: s.body.mssg })
      })*/
    },
    editNote() {
      let { $http, $route: { params }, $store: { dispatch } } = this;
      let update = {
        id: params.id,
        title: $(".v_n_title").text(),
        content: $(".v_n_content").text()
      };

      //editar nota
      /*$http.post('/api/edit-note', update)
        .then(s => {
          this._toggle("editing")
          Notify({ value: 'Note Edited!!' })
          dispatch('EDIT_NOTE', update)
        })*/
    }
  },
  created() {
    let { $http, $route: { params: { id } }, $router } = this;

    //criar notas
    /*$http.post('/api/note-details', { id }).then(s => this.note = s.body )
    $http.post('/api/valid-note', { id }).then(s => !s.body ? $router.push('/notes') : null )*/
  },
  mounted() {
    $(".v_n_cancel").focus();
  },
  components: {
    Prompt: Prompt,
    Overlay: Overlay
  }
};
</script>

<style scoped>
</style>
