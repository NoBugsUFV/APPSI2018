<template>
    <v-container>
        <v-card>
            <v-card-title class="display-4 titulo">{{palestrante.nome}} </v-card-title>
            <v-card-text>
                <p>{{palestrante.trabalho}}</p>
                <v-divider style="padding-bottom: 10px;"/>
                <p class="descricao">{{palestrante.sobre}}</p>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>

import axios from "axios"
import * as VCard from "vuetify/es5/components/VCard";

export default {
    name: 'palestrante',
    components: {
        ...VCard
    },
    data() {
        return {
            palestrante: {
                nome: ''
            }
        }
    },
    mounted: async function() {
        const response = await axios.get("http://semanainfo.nobugs.com.br/v2/api/palestrante/"+this.$route.params.id)
        this.palestrante = await response.data
    } 
}
</script>

<style scoped>

.titulo {
    font-size: 30px !important;
}

.descricao {
    font-size: 15px;
    text-align: justify;
    justify-content: center;
}

</style>


