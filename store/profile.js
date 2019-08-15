export const state = () => ({
  user: {}
})

export const mutations = {
  set (state, data) {
    state.user = {
      ...state.user,
      ...data
    }
  }
}

export const actions = {
  get ({ commit }) {
    return this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        const random = Math.round(0 - 0.5 + Math.random() * (10 - 0 + 1))
        commit('set', data[random])
      })
  }
}
