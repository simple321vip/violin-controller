<template>
  <div>
    <router-view v-if="token === ''" />
    <router-view v-if="token.length > 0" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.getters.token.length === 0) {
        vm.$router.push('/record/login')
      }
      if (vm.$store.getters.token.length > 0) {
        vm.$router.push('/record/main')
      }
    })
  },
  created () {
    console.log(3333333)
  }

}
</script>

<style>
</style>
