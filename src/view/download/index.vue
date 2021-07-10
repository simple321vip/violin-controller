<template>
  <div>
    <el-table class="downloadBox"
              :row-style="{height:+'px'}"
              :cell-style="{padding:+'px'}"
              :data="downloadItems"
              @row-click="rowClick"
              border>
      <el-table-column prop="seq_No"
                       fixed
                       label="序号"
                       width="100">
      </el-table-column>
      <el-table-column prop="title"
                       label="标题"
                       fixed
                       width="500">
      </el-table-column>
      <el-table-column prop="date"
                       fixed
                       width="150"
                       label="发布时间">
      </el-table-column>
      <el-table-column prop="downloadLink"
                       fixed
                       label="下载">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import api from '../../api/download'

export default {
  name: 'Download',
  data () {
    return {
      downloadItems: []
    }
  },
  methods: {
    onSearch () {
      api.getDownloadList().then(response => {
        response.data.items.forEach(item => {
          const row = {}
          row.seq_No = item.seq_No
          row.title = item.title
          row.date = item.date
          row.downloadLink = item.url
          this.downloadItems.push(row)
        })
      })
    },
    rowClick () {
      console.log('download')
    }
  }
  // created: (
  //   this.onSearch()
  // )
}
</script>

<style>
</style>
