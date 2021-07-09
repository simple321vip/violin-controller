<template>
  <div>
    <header-bar @onSearch="onSearch" />
    <div class="display_main">
      <el-table class="tableBox"
                :row-style="{height:+'px'}"
                :cell-style="{padding:+'px'}"
                :data="tableData"
                @row-click="rowClick"
                border>
        <el-table-column prop="project_name"
                         fixed
                         label="项目名称"
                         width="300">
        </el-table-column>
        <el-table-column prop="certificate_No"
                         label="许可证号"
                         fixed
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         fixed
                         label="坐落">
        </el-table-column>
        <el-table-column prop="enterprise_name"
                         fixed
                         label="开发商">
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="外层 Dialog"
               width="70%"
               :visible.sync="outerVisible">
      <el-table class="detailbox"
                :row-style="{height:+'px'}"
                :cell-style="{padding:+'px'}"
                :data="detailbox"
                :show-header="false"
                border>
        <el-table-column prop="key"
                         fixed
                         width="300">
        </el-table-column>
        <el-table-column prop="value"
                         fixed
                         width="180">
        </el-table-column>
      </el-table>
      <el-dialog width="30%"
                 title="内层 Dialog"
                 :visible.sync="innerVisible"
                 append-to-body>
      </el-dialog>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="innerVisible = true">打开内层 Dialog</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import HeaderBar from './HeaderBar.vue'
import api from '../../api/prepareSell'

export default {
  name: 'PrepareSell',
  components: {
    HeaderBar
  },
  data () {
    return {
      tableData: [],
      detailbox: [],
      outerVisible: false,
      innerVisible: false
    }
  },
  methods: {
    onSearch (form) {
      this.tableData = []
      this.onParam(form)
    },
    onParam (form) {
      const query = {}
      query.page = 1
      query.size = 10
      query.project_id = form.project_id
      api.getprepareSellList(query).then(response => {
        console.log(response)
        response.data.items.forEach(item => {
          const row = {}
          row.project_name = item.project_name
          row.certificate_No = item.certificate_No
          row.address = item.address
          row.enterprise_name = item.enterprise_name
          this.tableData.push(row)
        })
      })
    },
    rowClick () {
      this.detailbox = []
      const query = {}
      query.page = 1
      query.size = 10
      query.project_id = '1111111111'
      api.getprepareSellDetail(query).then(response => {
        const detail = response.data.detail
        this.detailbox.push({ key: '预售许可证编号', value: detail.certificate_No })
        this.detailbox.push({ key: '项目名称', value: detail.project_name })
        this.detailbox.push({ key: '开 发 商', value: detail.enterprise_name })
        this.detailbox.push({ key: '坐落位置', value: detail.address })
        this.detailbox.push({ key: '销售面积', value: detail.area })
        this.detailbox.push({ key: '发证机关', value: detail.certificate_No })
        this.detailbox.push({ key: '发证日期', value: detail.certificate_No })
      })
      this.outerVisible = true
    }
  }
}
</script>

<style>
.tableBox th,
.tableBox tr {
  background-color: #ddd;
  line-height: normal;
}

.detailbox th,
.detailbox tr {
  background-color: #ddd;
  width: 100%;
}
</style>
