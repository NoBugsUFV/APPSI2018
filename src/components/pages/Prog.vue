<template>
   <div>
    <v-tabs v-model="active">
      <v-tabs-bar class="primary" light>
        <v-tabs-item
          v-for="tab in tabs"
          :key="tab"
          :href="'#' + tab"
          ripple
        >
          Dia {{ tab.slice(-1) }}
        </v-tabs-item>
        <v-tabs-slider color="pink"></v-tabs-slider>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content
          v-for="tab in tabs"
          :key="tab"
          :id="tab"
        >
          <v-card color="pink darken-2" class="white--text" :key="atividade.id" v-for="atividade in progAtual">
              <v-card-title primary-title>
                <div class="headline">{{atividade.titulo}}</div>
                <div>{{atividade.descricao}}</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Local: {{atividade.local.nome}}</v-btn>
              </v-card-actions>
            </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>

    <div class="text-xs-center mt-3">
      <v-btn @click.native="next">Próximo dia</v-btn>
    </div>
   </div>
</template>

<script>
import { VTabs } from "vuetify";

export default {
  name: "Prog",
  components: {
    VTabs
  },
  data() {
    return {
      tabs: ["tab-1", "tab-2", "tab-3", "tab-4"],
      diasEvento: ["2018-08-24", "2018-08-25", "2018-08-26", "2018-08-27"],
      active: "tab-1",
      text: "A programação vem aqui!",
      programacao: [],
      progAtual: []
    };
  },
  methods: {
    next() {
      this.active = this.tabs[
        (this.tabs.indexOf(this.active) + 1) % this.tabs.length
      ];
      this.montaProgramacao(this.diasEvento[this.tabs.indexOf(this.active)]);
    },
    getProgramacao() {
      this.$http.get("http://localhost:8000/api/programacao").then(response => {
        this.programacao = response.body;
        this.programacao = this.programacao.map(x => {
          x.local = JSON.parse(x.local);
          return x;
        });
      });
      this.montaProgramacao(this.diasEvento[this.tabs.indexOf(this.active)]);
    },
    montaProgramacao(data) {
      this.progAtual = this.programacao.filter(x => x.data == data);
    }
  },
  mounted() {
    this.getProgramacao();
  },
  created() {
    //this.getProgramacao();
  },
  beforeMount() {
    //this.getProgramacao();
  }
};
</script>