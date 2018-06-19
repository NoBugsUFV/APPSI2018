<template>
  <v-layout column>
    <v-flex xs12 sm6>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-bind="{ [`xs${card.flex}`]: true }"
              v-for="card in cards"
              :key="card.title"
            > 
              <v-card>
                  <v-card-actions>
                    <v-container fill-height fluid>
                        <v-layout row wrap justify-space-around>
                            <v-icon x-large color="pink">{{card.icon}}</v-icon>
                            {{card.title}}
                        </v-layout>  
                    </v-container>
                  </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    name: "Admin",
    data: () => ({
      cards: [
        { title: 'Mensagens', src: '/static/', flex: 6, icon:'message' },
        { title: 'Notificações', src: '/static/', flex: 6, icon:'add_alert' },
        { title: 'Programação', src: '/static/', flex: 6, icon:'assignment' },
        { title: 'Usuários', src: '/static/', flex: 6, icon:'account_circle' }
      ]
    })
  }
</script>