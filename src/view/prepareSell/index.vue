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
    <dia-log ref="DiaLog"
             :detailbox="detailbox"
             :builddings="builddings" />
  </div>
</template>

<script>

import HeaderBar from './HeaderBar.vue'
import api from '../../api/prepareSell'
import DiaLog from './DiaLog'

export default {
  name: 'PrepareSell',
  components: {
    HeaderBar,
    DiaLog
  },
  data () {
    return {
      tableData: [],
      detailbox: [],
      builddings: []
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
      // query.project_id = form.project_id
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
      this.builddings = []
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
        this.detailbox.push({ key: '销售面积', value: detail.area + ' ㎡' })
        this.detailbox.push({ key: '发证机关', value: detail.certificate_org })
        this.detailbox.push({ key: '发证日期', value: detail.certificate_date })
        detail.buildings.forEach((building, index) => {
          const build = {}
          build.No = index + 1
          build.building_No = building.building_No
          build.building_area = building.building_area
          build.building_addr = building.building_addr
          build.info = '销控表'
          this.builddings.push(build)
        })
      })
      this.$refs.DiaLog.onSearch()
    }
  },
  created () {
    this.onSearch()
  }
}
</script>

<style>
.tableBox th,
.tableBox tr {
  background-color: #ddd;
  line-height: normal;
}
</style>
