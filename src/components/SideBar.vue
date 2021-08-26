<template>
  <div :class="side_main"
       v-show="isShow">
    <el-menu :default-active="this.$route.path"
             router>
      <el-menu-item v-for="(route, index) in routes"
                    v-bind:key="index"
                    v-bind:index="route.path"
                    v-bind:title="route.meta.name">
        {{route.meta.name}}
      </el-menu-item>
    </el-menu>
    <el-button @click.native="handleOpen">仕様変更</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import router from '../router'
export default {
  name: 'SideBar',
  data () {
    return {
      isCollapse: true,
      isShow: true,
      side_main: 'openStyle',
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
    },
    handleOpen () {
      // this.isShow = !this.isShow
      this.side_main = 'closeStyle'
      this.$store.dispatch('auth/logout').then(
        router.push('/record/login')
      )
      return this.isShow
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
closeStyle {
  width: 100px;
}
.side-main {
  width: 200px;
}
.el-menu-item {
  background-color: #01dfd7;
}
</style>
