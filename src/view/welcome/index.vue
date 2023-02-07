<template>
  <div>
    <record-chart style="height:100%;" />
  </div>
</template>

<script>
import RecordChart from '../../components/Echarts.vue'
export default {
  components: {
    RecordChart
  },
  data () {
    return {
      name: 'welcome'
    }
  }
}
</script>

<style>
</style>
