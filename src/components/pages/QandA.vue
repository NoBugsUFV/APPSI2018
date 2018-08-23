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
        { title: "O que é a Semana de Informática?",
          answer: "A Semana de Informática, organizada pela No Bugs – Empresa Júnior do curso de Ciência da Computação da UFV – e o Departamento de Informática (DPI) da universidade, surgiu com o intuito de levar aos estudantes de computação e suas diversas áreas, a oportunidade de extrapolar o conhecimento adquirido em sala de aula e entrar em contato com novas tendências e tecnologias de seu ramo de estudo."
        },        
        { title: 'Quando será o evento?',
          answer: 'O evento vai do dia 23 ao dia 26 de agosto de 2018.'
        },
        {
           title: 'Como consigo minha camisa?',
           answer: 'Se você realizou sua inscrição até dia 13/07, garantiu sua camisa! Caso contrário, quem sabe não consegue ganhar uma durante o evento? Fique de olho..'
        },
        {
          title: "Como consigo meu kit?",
          answer: "Você irá receber seu kit ao realizar o credenciamento com nossa equipe."
        },
        {
          title: "Que horas devo chegar para o credenciamento?",
          answer: "Nós recomendamos pelo menos 30min de antecedência, para aproveitar o evento ao máximo!"
        },
        {
          title: "O evento possui certificado?",
          answer: "Sim! Se vocẽ comparecer ao evento, ao final, estará disponível em https://www.certificados.ufv.br/."
        }
      ]
    }
  }
}
</script>