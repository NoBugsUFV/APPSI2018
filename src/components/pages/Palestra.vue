<template>
    <v-container>
        <v-card>
            <v-card-title class='display-4 titulo'>
                <b>{{programa.titulo}}</b> 
            </v-card-title>
            <v-card-text>
                <p @click="$router.push(`/palestrante/${palestrante.id}`)"><b>Palestrante:</b> {{palestrante.nome}}</p>
                <v-divider style="margin-bottom: 10px;"/>
                <p class='first-letter'><b>Tipo:</b> {{programa.tipo}}</p>
                <p><b>Horário:</b> {{programa.horario}}</p>
                <p><b>Data:</b> {{data}}</p>
                <p><b>Local:</b> {{programa.local}}</p>
                <p>{{programa.descricao}}</p>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>

import axios from "axios"

export default {
    name: "Palestra",
    data(){
        return {
            programa: {},
            palestrante: {},
            data: ''
        }
    },    
    mounted: async function(){
        const response = await axios.get("http://semanainfo.nobugs.com.br/v2/api/programacao/id/"+this.$route.params.id)
        this.programa = response.data
        const response2 = await axios.get("http://semanainfo.nobugs.com.br/v2/api/palestrante/"+this.programa.id_palestrante)
        this.palestrante = response.data
        this.data = new Date(this.programa.data).toLocaleDateString('pt-br')
    }
}
</script>

<style scoped>

.titulo {
    font-size: 25px !important;
}

.first-letter {
    text-transform: capitalize;
}

</style>


