<template>
  <div>
    <router-view />
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
  created () {
    this.$router.push('/record/login')
    console.log(3333333)
  }

}
</script>

<style>
</style>
