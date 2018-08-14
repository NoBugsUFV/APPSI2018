<template>
	<v-form ref="form" v-model="valid">
		<v-alert
			v-model="erroMsg"
			:value="false"
			type="error"
			color="error"
      dismissible
		>{{ msg }}
		</v-alert>
    <v-alert
				v-model="okMsg"
				:value="false"
				type="success"
			>{{ msg }}
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
			@click="login"
		>Entrar</v-btn>
		<router-link to='/register'><v-btn color="primary">Cadastrar</v-btn></router-link>
	</v-form>
</template>

<script>
import { VForm, VAlert } from "vuetify";
import { storeToken } from "../../store/actions";
import http from "../../http";
import { setTimeout } from "timers";

export default {
  name: "Login",
  components: {
    VForm,
    VAlert
  },
  data() {
    return {
      msg: "Algo de errado não está certo",
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "É necessário um endereco de email",
        v => /.+@.+/.test(v) || "E-mail inválido"
      ],
      password: "",
      passRules: [
        v => !!v || "É necessário uma senha",
        v => v.length >= 5 || "Deve ser maior que 5 caracteres"
      ],
      erroMsg: false,
      okMsg: false,
      eye: true,

      // Variaveis de requisição
      error: false
    };
  },

  methods: {
    login() {
      //var redirect = this.$auth.redirect();
      var app = this;

      this.$auth.login({
        body: {
          email: app.email,
          password: app.password
        },
        success: response => {
          if (response.body.success) {
            this.msg = "Logado com Sucesso";
            this.okMsg = true;
            this.erroMsg = !this.okMsg;
            //logged

            setTimeout(() => {
              // redireciona
              this.$router.push("/prog");
            }, 1000);
          } else {
            // not logged
            this.msg = "Erro de autenticação";
            this.erroMsg = true;
            this.okMsg = !this.erroMsg;
          }
        },
        error: err => {
          if (err) {
            if (err.status == 401) {
              this.msg = "Erro de autenticação";
            }
          } else {
            this.msg = "Internal error";
          }
          this.erroMsg = true;
          this.okMsg = !this.erroMsg;
        },
        rememberMe: true,
        redirect: false
      });
    }
  }
};
</script>