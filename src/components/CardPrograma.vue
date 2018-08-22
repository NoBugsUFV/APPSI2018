<template>
    <v-card class='card-programa'>
        <v-card-title align="center" class='display-4 titulo'> {{ programa.descricao }} </v-card-title>
        <v-card-text>

        </v-card-text>
    </v-card>
</template>

<script>

import * as VCard from 'vuetify/es5/components/VCard'
export default {
    name: "CardPrograma",
    components:{
        ...VCard
    },
    props: ["programa"],
    data:function () {
        return {}
    },
    mounted() {
        console.log(this)
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


