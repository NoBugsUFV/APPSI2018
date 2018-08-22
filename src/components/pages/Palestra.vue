<template>
    <v-container>
        <v-card>
            <v-card-title class='display-4 titulo'>
                <b>{{programa.titulo}}</b> 
            </v-card-title>
            <v-card-text>
                <p><b>Palestrante:</b> {{palestrante.nome}}</p>
                <v-divider style="margin-bottom: 10px;"/>
                <p><b>Horário:</b> {{programa.horario}}</p>
                <p><b>Data:</b> {{data}}</p>
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
        const response = await axios.get("http://localhost:8000/api/programacao/id/"+this.$route.params.id)
        this.programa = response.data
        const response2 = await axios.get("http://localhost:8000/api/palestrante/"+this.programa.id_palestrante)
        this.palestrante = response.data
        this.data = new Date(this.programa.data).toLocaleDateString('pt-br')
    }
}
</script>

<style scoped>

.titulo {
    font-size: 25px !important;
}

</style>


