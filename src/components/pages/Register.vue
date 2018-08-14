<template>
	<div class='container' align='center'>
		<p class='display-1'> Cadastrar-se </p>
		<v-form ref="form" v-model="form">
			<v-alert
				v-model="erroMsg"
				:value="false"
				type="error"
				dismissible
			>{{ msg }}
			</v-alert>
			<v-alert
				v-model="okMsg"
				:value="false"
				type="success"
			>{{ msg }}
			</v-alert>
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
			<v-text-field v-model="c_pass" label="Confirme sua senha"></v-text-field>
			<v-btn
				color="primary"
				@click="register"
			>Cadastrar</v-btn>
		</v-form>
	</div>
</template>

<script>
import { VForm, VDatePicker, VMenu, VAlert } from "vuetify";
import { storeToken } from "../../store/actions";
import http from "../../http";
import { setTimeout } from "timers";

export default {
  name: "Register",
  data() {
    return {
      form: true,
      nome: "",
      cpf: "",
      email: "",
      birthday: "",
      pass: "",
      c_pass: "",
      menu: {},
      msg: "Algo de errado não está certo",
      erroMsg: false,
      okMsg: false,

      // variaveis de requisição
      error: false,
      errors: {},
      success: false
    };
  },
  components: {
    VForm,
    VDatePicker,
    VMenu,
    VAlert
  },
  methods: {
    register() {
      let app = this;

      this.$auth.register({
        body: {
          nome: app.nome,
          cpf: app.cpf,
          email: app.email,
          password: app.pass,
          tipo: "user",
          status: 1
        },
        success: response => {
          console.log(response);
          //mudar quando mudar na api
          if (response.data.success) {
            this.msg = "Cadastrado com Sucesso";
            this.okMsg = true;
            this.erroMsg = !this.okMsg;

            this.$refs.form.reset();
            // loga automaticamente ao cadastrar
            // a partir daqui é igual no login

            setTimeout(() => {
              // redireciona
              this.$router.push("/prog");
            }, 1000);
          } else {
            //melhorar
            this.msg = response.data.error.email
              ? response.data.error.email[0]
              : "";
            this.msg += this.msg ? " " : "";
            this.msg += response.data.error.cpf
              ? response.data.error.cpf[0]
              : "";
            this.erroMsg = true;
            this.okMsg = !this.erroMsg;
          }
        },
        error: err => {
          this.msg = "Internal error";
          this.erroMsg = true;
          this.okMsg = !this.erroMsg;
        },
        redirect: false, //? redirect to home
        autoLogin: true,
        remenberMe: true
      });
    }
  } // </ methods
};
</script>

<style scoped>
</style>

