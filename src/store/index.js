import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

var state = {
    leftSide: {},
    rightSide: {}
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store
