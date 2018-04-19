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
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
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

import { VTabs } from 'vuetify'

export default {
  name: 'Prog',
  components: {
    VTabs
  },
  data () {
      return {
        tabs: ['tab-1', 'tab-2', 'tab-3', 'tab-4'],
        active: null,
        text: 'A programação vem aqui!'
      }
    },
    methods: {
      next () {
        this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length]
      }
    }
}
</script>