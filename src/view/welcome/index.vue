<template>
  <div>
    <div>
      <record-chart />
    </div>
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
