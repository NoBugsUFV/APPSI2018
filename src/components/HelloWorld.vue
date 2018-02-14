<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Nos acompanhe nas redes sociais</h2>
    <v-list-tile v-for="item in items" v-bind:key="item.title">
      <v-list-tile-action>
        <v-icon v-if="item.icon" color="pink">{{ item.icon }}</v-icon>
        <a :href="item.link" target="_blank">{{ item.title }}</a>
      </v-list-tile-action>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bem vindo à XXIII Semana de Informática',
      items:[
        {
          icon: "face",
          link: "https://facebook.com/SemanaDeInformaticaUfv",
          title: "Facebook"
        },
        {
          icon: "book",
          link: "https://twitter.com/SemanaInfo_UFV",
          title: "Twitter"
        },
        {
          icon: "videocam",
          link: "https://instagram.com/semanainfoufv",
          title: "Instagram"
        },
        {
          icon: "web",
          link: "https://semanainfo.nobugs.com.br",
          title: "Site"
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #E91E63;
}
</style>
