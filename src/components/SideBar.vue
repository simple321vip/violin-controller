<template>
  <div>
    <el-menu :default-active="this.$route.path"
             router>
      <el-menu-item v-for="(route, index) in routes"
                    v-bind:key="index"
                    v-bind:index="route.path"
                    v-bind:title="route.meta.name">
        {{route.meta.name}}
      </el-menu-item>

    </el-menu>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
  data () {
    return {
      isCollapse: true,
      routes: []
    }
  },
  computed: {
    ...mapGetters([
      'accessRoutes'
    ])
  },
  methods: {
    init () {
      console.log(this.accessRoutes)
      this.accessRoutes.forEach(element => {
        if (element.children) {
          element.children.forEach(e => {
            this.routes.push(e)
          })
        }
      })
      console.log(this.routes)
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
.el-menu-item {
  background-color: #01dfd7;
}
</style>
