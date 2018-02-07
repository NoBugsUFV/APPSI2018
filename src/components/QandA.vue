<template>
  <v-expansion-panel>
    <v-expansion-panel-content>
      <div slot="header">Quando será o evento?</div>
      <v-card>
        <v-card-text class="grey lighten-3">O evento vai do dia 23 ao dia 26 de agosto de 2018.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <div slot="header">Quando custará o evento?</div>
      <v-card>
        <v-card-text class="grey lighten-3">Ainda não temos definido o valor da inscrição.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <div slot="header">Vai ter camisa para todo mundo?</div>
      <v-card>
        <v-card-text class="grey lighten-3">Vai ter camisa para quem realizar a inscrição até a data tal.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'QandA',
  data () {
    return {
    }
  }
}
</script>