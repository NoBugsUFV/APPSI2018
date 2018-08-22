<template>
    <div @click="$router.push(`/programacao/${programa.id}`)" >
    <v-card class='card-programa'>
        <v-card-title align="center" class='display-4 titulo'> {{ programa.titulo }} </v-card-title>
        <v-card-text>
            <p><b>Palestrante:</b> {{palestrante.nome}}</p>
            <p><b>Horário:</b> {{programa.horario}}</p>
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
        var response = await axios.get("http://localhost:8000/api/palestrante/"+this.programa.id_palestrante)
        this.palestrante = response.data
    }
}
</script>

<style>

.card-programa {
    margin: 10px;
}

.titulo {
    font-size: 25px !important;
    text-align: center;
}
</style>


