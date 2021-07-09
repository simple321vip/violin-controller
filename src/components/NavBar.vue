<template>
  <div class="nav-main">
    <el-button type="open"
               icon="open_side"
               circle></el-button>
    <el-dropdown>
      <i class="el-icon-setting"
         style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
  </div>

</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      start_date: null,
      end_date: null
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.open_side {
  background: url("../assets/logo.png") center no-repeat;
  background-size: cover;
}
.nav-main {
  float: right;
}
</style>
