<template>
  <v-form v-model="valid">
    <v-text-field
      label="Usuário"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="Senha"
      :rules="passRules"
      v-model="password"
      min="8"
      :append-icon="eye ? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (eye = !eye)"
      :type="eye ? 'password' : 'text'"
      counter
      required
    ></v-text-field>
    <router-link to='/'><v-btn color="primary">Entrar</v-btn></router-link>
    <router-link to='/user/register'><v-btn color="primary">Cadastrar</v-btn></router-link>
  </v-form>
</template>

<script>

import { VForm } from 'vuetify'

export default {
  name: "Login",
  components:{
    VForm
  },
  data() {
    return {
      valid: false,
      name: "",
      nameRules: [
        v => !!v || "É necessário um nome de usuário",
        v => v.length <= 10 || "Deve ser menor que 10 caracteres"
      ],
      passRules: [
        v => !!v || "É necessário uma senha",
        v => v.length >= 5 || "Deve ser maior que 5 caracteres"
      ],
      password: "",
      eye: true
    };
  }
};
</script>