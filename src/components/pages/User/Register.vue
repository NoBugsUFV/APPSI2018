<template>
    <div class='container' align='center'>
        <p class='display-1'> Cadastrar-se </p>
        <v-form>
            <v-text-field v-model='nome' label="Nome" placeholder="Seu nome completo"/>
            <v-text-field v-model='cpf' label="CPF" placeholder="Seu CPF"/>
            <v-text-field v-model='email' label="Email" placeholder="seuemail@example.com"/>
            <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40"
                lazy transition="scale-transition" offset-y full-width min-width="290px">
                <v-text-field slot="activator" v-model="birthday" label="Data de nascimento" prepend-icon="event"
                readonly></v-text-field>
                <v-date-picker locale='pt-br' ref="picker" v-model="birthday" :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                ></v-date-picker>
            </v-menu>
            <v-text-field v-model='pass' label="Sua senha"></v-text-field>
            <v-text-field v-model="confirmPass" label="Confirme sua senha"></v-text-field>
            <v-btn color='primary'>Cadastrar</v-btn>
        </v-form>
    </div>
</template>

<script>
import { VForm, VDatePicker, VMenu } from "vuetify";

export default {
  name: "UserRegister",
  data() {
    return {
      nome: "",
      cpf: "",
      email: "",
      birthday: "",
      pass: "",
      confirmPass: "",
      menu: {}
    };
  },
  components: {
    VForm,
    VDatePicker,
    VMenu
  },
  mounted() {}
};
</script>

<style scoped>
</style>

