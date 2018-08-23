<template>
    <div @click="$router.push(`/programacao/${programa.id}`)" >
    <v-card class='card-programa'>
        <v-card-title class='display-4 titulo'> {{ programa.titulo }} </v-card-title>
        <v-card-text>
            <p><b>Palestrante:</b> {{palestrante.nome}}</p>
            <p class='first-letter'><b>Tipo:</b> {{programa.tipo}}</p>
            <p><b>Horário:</b> {{programa.horario}}</p>
            <p><b>Local:</b> {{programa.local}}</p>
        </v-card-text>
    </v-card>
    </div>
</template>

<script>

import axios from 'axios';
import * as VCard from 'vuetify/es5/components/VCard'
export default {
    name: "CardPrograma",
    components:{
        ...VCard
    },
    props: ["programa"],
    data:function () {
        return {
            palestrante: ''
        }
    },
    mounted: async function () {
        var response = await axios.get("http://semanainfo.nobugs.com.br/v2/api/palestrante/"+this.programa.id_palestrante)
        this.palestrante = response.data
    }
}
</script>

<style scoped>

.card-programa {
    margin: 10px;
}

.titulo {
    font-size: 25px !important;
    text-align: center;
}

.first-letter {
    text-transform: capitalize;
}
</style>


