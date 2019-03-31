// initial state
const state = {
  sidebar: {
    isOpen: true
  }
}

// getters
const getters = {
  sidebar: state => state.sidebar
}

// actions
const actions = {
  toggleSidebar: ({ commit }) => {
    commit('toggleSidebar')
  }
}

// mutations
const mutations = {
  toggleSidebar (state) {
    state.sidebar.isOpen = !state.sidebar.isOpen
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
