<template>
  <div id="myChart"
       :style="{width: '300px', height: '300px'}"></div>
</template>

<script>

import $moment from 'moment'
import _ from '../utils/const'
export default {
  name: 'RecordChart',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      const title = $moment().subtract(1, _.M).format('YYYY年MM月') + '交易信息统计'
      // 绘制图表
      myChart.setOption({
        title: { text: title },
        tooltip: {},
        xAxis: {
          data: ['一週目', '二週目', '三週目', '四週目', '五週目']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>

<style>
</style>
