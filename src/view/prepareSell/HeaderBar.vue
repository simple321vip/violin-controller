<template>
  <div class="header-detail">
    <el-form ref="form"
             :model="form"
             label-width="120px">
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
        <el-col class="line"
                v-html="spaceholder"
                :span="1" />
        <!-- <el-col :span="4">
          <el-select v-model="value"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-col> -->
      </el-form-item>
      <el-form-item label="预售信息查询：">
        <el-col :span="4">
          <el-input v-model="form.project_name"
                    placeholder="项目名称"></el-input>
        </el-col>
        <el-col class="line"
                v-html="spaceholder"
                :span="1" />
        <el-col :span="4">
          <el-input v-model="form.certificate_No"
                    placeholder="许可证号"></el-input>
        </el-col>
        <el-col class="line"
                v-html="spaceholder"
                :span="1" />
        <el-col :span="4">
          <el-input v-model="form.enterprise_name"
                    placeholder="开发单位"></el-input>
        </el-col>
        <el-button type="primary"
                   @click="onSearch">検索</el-button>
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
        desc: '',
        project_name: '',
        certificate_No: '',
        enterprise_name: ''

      },
      spaceholder: '&#12288',
      options: []
    }
  },
  methods: {
    onSearch () {
      console.log('click')
      this.$emit('onSearch', this.form)
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
