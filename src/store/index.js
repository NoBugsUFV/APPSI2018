import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

import Notes from "./modules/notes-m";

Vue.use(Vuex);

var state = {
	leftSide: {},
	rightSide: {}
};

const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	strict: true,
	modules: {
		notes: Notes
	}
});

export default store;
