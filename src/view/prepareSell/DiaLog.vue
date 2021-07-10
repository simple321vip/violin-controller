<template>
  <el-dialog class="el_dialog_prepare"
             width="50%"
             title="预售许可证"
             :visible.sync="outerVisible">
    <el-table class="detailbox"
              :row-style="{height:+'px'}"
              :cell-style="{padding:+'px'}"
              :data="detailbox"
              :show-header="false"
              border>
      <el-table-column prop="key"
                       fixed
                       width="250">
      </el-table-column>
      <el-table-column prop="value"
                       fixed
                       width="468">
      </el-table-column>
    </el-table>
    <div class="title">
      <span style="float:left;padding:15px">预售楼盘信息</span>

    </div>
    <el-table class="building"
              :row-style="{height:+'px'}"
              :cell-style="{padding:+'px'}"
              :data="builddings"
              border>
      <el-table-column prop="No"
                       label="序号"
                       fixed
                       width="50">
      </el-table-column>
      <el-table-column prop="building_No"
                       label="销售楼号"
                       fixed
                       width="100">
      </el-table-column>
      <el-table-column prop="building_area"
                       label="建筑面积"
                       fixed
                       width="100">
      </el-table-column>
      <el-table-column prop="building_addr"
                       label="楼盘坐落"
                       fixed
                       width="368">
      </el-table-column>
      <el-table-column prop="value"
                       label="查看详细"
                       fixed
                       width="100">
      </el-table-column>
    </el-table>
    <el-dialog width="30%"
               title="楼盘信息"
               :visible.sync="innerVisible"
               append-to-body>
    </el-dialog>
    <!-- <div slot="footer"
         class="dialog-footer">
      <el-button @click="outerVisible = false">取 消</el-button>
      <el-button type="primary"
                 @click="innerVisible = true">打开内层 Dialog</el-button>
    </div> -->
  </el-dialog>

</template>

<script>
export default {
  props: {
    detailbox: {
      type: Array,
      default: function () {
        return []
      }
    },
    builddings: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      outerVisible: false,
      innerVisible: false
    }
  },
  methods: {
    onSearch (listQuery) {
      this.outerVisible = true
    }
  }
}
</script>

<style>
.el_dialog_prepare {
  margin-top: 5vh;
}

.el-dialog .title {
  background-color: aqua;
  height: 50px;
}

.el-table .detailbox {
  overflow: auto;
}
.building th,
.building tr {
  background-color: #ddd;
  width: 100%;
  line-height: normal;
}

.el-table--scrollable-x .el-table__body-wrapper {
  overflow-x: hidden;
}

.detailbox th,
.detailbox tr {
  background-color: #ddd;
  width: 100%;
  line-height: normal;
}
.el-dialog__header {
  height: 30px;
  padding: 10px 20px 10px 20px;
}
.el-dialog__title {
  background-color: aqua;
  padding: 15px;
  width: 96%;
  text-align: left;
  float: left;
}
.el-dialog__body {
  padding: 5px 20px;
}
</style>
