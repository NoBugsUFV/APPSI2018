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
      v-model="pass"
      required
    ></v-text-field>
  </v-form>
</template>
<script>
  export default {
    name:'Login',
    data () {
      return {
        valid: false,
        name: '',
        nameRules: [
          (v) => !!v || 'É necessário um nome de usuário',
          (v) => v.length <= 10 || 'Deve ser menor que 10 characters'
        ],
        pass: '',
      }
    }
  }
</script>