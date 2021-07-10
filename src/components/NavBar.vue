<template>
  <div class="nav-main">
    当前时间：{{ time }}

    <span>大連市XXXX区不動産登録情報ネット</span>

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
import $moment from 'moment'

export default {
  name: 'NavBar',
  data () {
    return {
      start_date: null,
      end_date: null,
      time: ''
    }
  },
  mounted () {
    this.getdate()
    this.timer = setInterval(() => {
      this.getdate()
    }, 1000)
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    getdate () {
      this.time = $moment().format('YYYY年MM月DD日　HH:mm:ss')
    }
  },
  destroyed () {
    if (this.timer) {
      clearInterval(this.timer)
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
