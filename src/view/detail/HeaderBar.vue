<template>
  <div class="header-detail">
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="参照期間">
        <el-col :span="4">
          <el-date-picker type="date"
                          placeholder="開始時間"
                          v-model="form.date1"
                          style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line"
                :span="1">-</el-col>
        <el-col :span="4">
          <el-date-picker type="date"
                          placeholder="終了時間"
                          v-model="form.date2"
                          style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动"
                       name="type"></el-checkbox>
          <el-checkbox label="地推活动"
                       name="type"></el-checkbox>
          <el-checkbox label="线下主题活动"
                       name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光"
                       name="type"></el-checkbox>
        </el-checkbox-group>
        <el-button type="primary"
                   @click="onSubmit">検索</el-button>
      </el-form-item>

    </el-form>
  </div>

</template>

<script>
export default {
  name: 'HeaderBar',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit (value) {

    }
  }
}
</script>

<style>
.header-detail {
  line-height: 50px;
  margin: 10px;
  border: 10px;
  background-color: rgb(219, 231, 235);
}
.el-checkbox-group {
  float: left;
}
.el-button {
  background-color: rgb(74, 92, 194);
  color: blue;
}
</style>
