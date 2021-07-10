<template>
  <div>
    <div id="myChart"
         :style="{width: '300px', height: '300px'}"></div>
    <div id="main"
         :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>

import $moment from 'moment'
import _ from '../utils/const'
import option from '../utils/echartsOptions'

export default {
  name: 'RecordChart',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
    this.draw()
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
    },
    draw () {
      const myChart = this.$echarts.init(document.getElementById('main'))
      option.title.text = '面積分散'
      option.title.subtext = 'なし'
      option.legend.data = ['<50', '50~69', '70~89', '90~110', '110~139', '140>']
      option.series[1].data = [
        { value: 19, name: '<50' },
        { value: 25, name: '50~69' },
        { value: 60, name: '70~89' },
        { value: 30, name: '90~110' },
        { value: 20, name: '110~139' },
        { value: 15, name: '140>' }
      ]
      myChart.setOption(option)
    }

  }
}
</script>

<style>
</style>
