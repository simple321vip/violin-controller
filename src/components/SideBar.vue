<template>
  <div>
    <el-menu :default-active="this.$route.path"
             router="">
      <el-menu-item v-for="(route, index) in accessRoutes"
                    v-bind:key="index"
                    v-bind:title="route.meta.name" />

    </el-menu>

  </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
  data () {
    return {
      isCollapse: true
    }
  },
  computed: {
    ...mapGetters([
      'accessRoutes'
    ])
  },
  methods: {
    init () {
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created () {
    this.init()
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
