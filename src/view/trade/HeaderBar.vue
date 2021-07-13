<template>
  <div class="header-detail">
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="历史交易信息查询">
        <el-col class="line"
                v-html="spaceholder"
                :span="1" />
        <el-col :span="4">
          <el-date-picker :type="form.date_unit"
                          v-model="form.query_date"
                          :format="formatter"
                          style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line"
                v-html="spaceholder"
                :span="1" />
        <el-col :span="4">
          <el-select v-model="form.date_unit"
                     @change="changeFormat"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.date_unit"
                       :label="item.label"
                       :value="item.date_unit">
            </el-option>
          </el-select>
        </el-col>
        <el-button type="primary"
                   style="float: right"
                   @click="onSearch">検索</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import $moment from 'moment'

export default {
  name: 'HeaderBar',
  data () {
    return {
      form: {
        date_unit: 'week',
        query_date: ''
      },
      spaceholder: '&#12288',
      options: [{
        date_unit: 'week',
        label: '周'
      }, {
        date_unit: 'month',
        label: '月'
      }, {
        date_unit: 'year',
        label: '年'
      }],
      formatter: 'yyyy年WW週'
    }
  },
  methods: {
    init () {
      this.form.query_date = $moment().subtract(1, 'weeks')
    },
    onSearch () {
      console.log(this.form.query_date)
      this.$emit('onSearch', this.form)
    },
    changeFormat (value) {
      if (value === 'week') {
        this.formatter = 'yyyy年WW週'
      }
      if (value === 'month') {
        this.formatter = 'yyyy年MM月'
      }
      if (value === 'year') {
        this.formatter = 'yyyy年'
      }
    }
  }

}
</script>

<style>
</style>
