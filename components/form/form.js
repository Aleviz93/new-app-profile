export default {
  inject: ['$validator'],
  data: () => ({
    profile: {},
    proccesing: false,
    scope: 'custom-form'
  }),
  created () {
    this.profile = { ...this.$store.state.profile.user }
    
  },
  methods: {
    submit () {
      this.proccesing = true
      this.$validator.validateAll(this.scope)
        .then(async (success) => {
          if (success) {
            await this.$emit('edit', this.profile)
            this.proccesing = false
          } else {
            this.proccesing = false
          }
        })
    }
  }
}
