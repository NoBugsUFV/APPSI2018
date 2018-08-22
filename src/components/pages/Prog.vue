<template>
   <div>
    <v-tabs v-model="active" slider-color="pink">
      <v-tabs-bar class="primary" light>
        <v-tabs-item
          v-for="tab in tabs"
          :key="tab"
          :href="'#' + tab"
          ripple
        >
          Dia {{ tab.split('-')[3] }}
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items v-model="active">
        <v-tabs-content
          v-for="dia in dias"
          :key="dia[0].data"
          :id="'tab-'+dia[0].data"
        >
          <v-container>
            <CardPrograma v-for="programa in dia" :programa="programa" :key="programa.descricao" :id="programa.descricao"/>
          </v-container>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>

    <div class="text-xs-center mt-3">
      <v-btn @click.native="next">Próximo dia</v-btn>
    </div>
   </div>
</template>

<script>

import axios from "axios"
import CardPrograma from '../CardPrograma'
import * as VTabs from 'vuetify/es5/components/VTabs'

export default {
  name: 'Prog',
  components: {
    ...VTabs,
    CardPrograma
  },
  data () {
      return {
        tabs: [],
        active: 'tab-1',
        text: 'A programação vem aqui!',
        dias: []
      }
  },
  mounted: async function () {
      var response  = await axios.get("http://localhost:8000/api/programacao")
      var dia_23 = response.data.filter(item => item.data === "2018-08-23")
      var dia_24 = response.data.filter(item => item.data === "2018-08-24")
      var dia_25 = response.data.filter(item => item.data === "2018-08-25")
      var dia_26 = response.data.filter(item => item.data === "2018-08-26")
      this.dias.push(dia_23,dia_24,dia_25,dia_26)
      this.dias.map((item,index)=> {
        this.tabs.push(("tab-"+item[0].data))
      })
      this.active = this.tabs[0]
  },
  methods: {
    next () {
      this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length]
    }
  }
}
</script>