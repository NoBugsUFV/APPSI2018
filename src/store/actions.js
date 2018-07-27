export const storeLayout =({
  commit
}, value) => {
  commit("STORE_LAYOUT", value)
}

export const toggleLeft = ({
  commit
}, value) => {
  commit('LEFT_SIDE_BAR', value)
}

export const toggleRight = ({
  commit
}, value) => {
  commit('RIGHT_SIDE_BAR', value)
}

export const storeToken = ({ commit }, token) => {
  commit('STORE_TOKEN', token)
}
