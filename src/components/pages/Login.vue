<template>
	<v-form ref="form" v-model="valid">
		<v-alert
			v-model="alert"
			:value="false"
			type="error"
			color="error"
      dismissible
		>{{ msgErr }}
		</v-alert>
		<v-text-field
			label="E-mail"
			v-model="email"
			:rules="emailRules"
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
		<v-btn
			color="primary"
			@click="submit"
		>Entrar</v-btn>
		<router-link to='/user/register'><v-btn color="primary">Cadastrar</v-btn></router-link>
	</v-form>
</template>

<script>
import { VForm } from "vuetify";
import axios from 'axios';

export default {
  name: "Login",
  components: {
    VForm
  },
  data() {
    return {
			msgErr: 'Algo de errado não está certo',
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "É necessário um endereco de email",
        v => /.+@.+/.test(v) || 'E-mail inválido'
			],
			password: "",
      passRules: [
        v => !!v || "É necessário uma senha",
        v => v.length >= 0 || "Deve ser maior que 5 caracteres"
			],
			alert: false,
			token: '',
      eye: true
    };
  },
  methods: {
		submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('http://localhost:8000/api/login', {
						email: this.email,
						password: this.password
					})
					.then(response =>
					{
						//mudar quando mudar na api
						if(response.data.success) //logged
						{
							//console.log(response.data.data.token);
							this.$store.state.token = response.data.data.token;
						}
						else // not logged
						{
							this.msgErr = 'Erro de autenticação';
							this.alert = true;
						} 
					})
					.catch(err =>
					{
						if(err.response)
						{
							if(err.response.status == 401)
							{
								this.msgErr = 'Erro de autenticação';
							}
						}
						else
						{
							this.msgErr = 'Internal error';
							console.log(err);
						}
						this.alert = true;
					});
        }
      },
      clear () {
        this.$refs.form.reset()
      }
  }
};
</script>