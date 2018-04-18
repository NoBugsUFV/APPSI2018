<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for='i in items' v-bind:key='i.title'>
      <div slot="header">{{i.title}}</div>
      <v-card>
        <v-card-text class="grey lighten-3"> {{ i.answer }}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'QandA',
  data () {
    return {
      items: [
        { title: 'Quando será o evento?',
          answer: 'O evento vai do dia 23 ao dia 26 de agosto de 2018.'
          },
          {title: 'Quando custará o evento?',
          answer: 'Ainda não temos definido o valor da inscrição.'
          },
          {
            title: 'Vai ter camisa para todo mundo?',
            answer: 'Vai ter camisa para quem realizar a inscrição até a data tal.'
          }
      ]
    }
  }
}
</script>