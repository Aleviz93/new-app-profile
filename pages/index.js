export default {
  name: 'index-page',
  data: () => ({
    profile: {}
  }),
  created () {
    this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        const rand = Math.round(0 - 0.5 + Math.random() * (10 - 0 + 1))
        this.profile = data[rand]
      })
  },
  methods: {
    changeProfile () {
      this.profile.id = Math.random().toString(8).substr(2, 9)
      this.$axios.$post('http://localhost:4000/users', this.profile)
    }
  }
  // computed: {
  //   name: {
  //     get () {
  //       return this.$store.state.profile.name
  //     },

  //     set (newName) {
  //       this.$store.commit('profile/setName', newName)
  //     }
  //   }
  // }
}
