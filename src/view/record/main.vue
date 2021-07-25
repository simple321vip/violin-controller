<template>
  <div>
    <el-table class="newsBox"
              :row-style="{height:+'px'}"
              :cell-style="{padding:+'px'}"
              :data="newsItems"
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
                       label="发布时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import api from '../../api/download'

export default {
  name: 'Main',
  data () {
    return {
      newsItems: []
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
