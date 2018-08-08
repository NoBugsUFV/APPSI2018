const mutations = {
  STORE_LAYOUT(state, value) {
    state.layout = value
  },
  LEFT_SIDE_BAR(state) {
    state.layout.left = !state.layout.left
  },
  RIGHT_SIDE_BAR(state) {
    state.layout.right = !state.layout.right
  },
  STORE_TOKEN(state, token) 
  {
    state.token = token;
  }

}

export default mutations
