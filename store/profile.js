export const state = () => ({
  email: '',
  id: null,
  name: '',
  phone: '',
  username: ''
})

export const mutations = {
  setProfile (state, user) {
    state.email = user.email
    state.id = user.id
    state.name = user.name
    state.phone = user.phone
    state.username = user.username
  },

  setName (state, name) {
    state.name = name
  }
}

export const actions = {
  getProfile ({ commit }) {
    this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        const rand = Math.round(0 - 0.5 + Math.random() * (10 - 0 + 1))
        commit('setProfile', data[rand])
      })
  }
}
