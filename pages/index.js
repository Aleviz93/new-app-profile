export default {
  name: 'index-page',
  data: () => ({
    profile: {},
    proccesing: false
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
      this.proccesing = true
      const id = 762015511
      this.$axios.$put('http://localhost:4000/users/' + id, this.profile).then((data) => {
        setTimeout(() => {
          this.proccesing = false
        }, 1200)
      })
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
