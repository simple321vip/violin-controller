<template>
  <div>
    <div class="block div-inline">
      <span class="demonstration">默认</span>
      <el-date-picker v-model="start_date"
                      type="date"
                      placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class="block div-inline">
      <span class="demonstration">默认</span>
      <el-date-picker v-model="end_date"
                      type="date"
                      placeholder="选择日期">
      </el-date-picker>
    </div>
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
  }
}
</script>

<style>
.div-inline {
  display: inline;
}
</style>
