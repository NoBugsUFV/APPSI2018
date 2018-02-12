<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Nos acompanhe nas redes sociais</h2>
    <ul>
      <li><a href="https://facebook.com/SemanaDeInformaticaUfv" target="_blank">Facebook</a></li>
      <li><a href="https://twitter.com/SemanaInfo_UFV" target="_blank">Twitter</a></li>
      <li><a href="https://instagram.com/semanainfoufv" target="_blank">Instagram</a></li>
      <li><a href="https://semanainfo.nobugs.com.br" target="_blank">Site</a></li>
      <br>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bem vindo à XXIII Semana de Informática'
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
