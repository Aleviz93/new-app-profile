import CustomForm from '../components/form/form.vue'

export default {
  name: 'index-page',
  data: () => ({
    profile: {}
  }),
  components: {
    CustomForm
  },
  async created () {
    if (!this.isEmptyObject(this.$store.state.profile.user)) {
      await this.$store.dispatch('profile/get')
    }
  },
  computed: {
    user () {
      return this.$store.state.profile.user
    }
  },
  methods: {
    emitFormChange (data) {
      this.$store.commit('profile/set', data)
    },
    isEmptyObject (obj) {
      for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
          return true
        }
      }
      return false
    }
  }
}
