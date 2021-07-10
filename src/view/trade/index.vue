<template>
  <div>
    <header-bar />
    <div class="sqr_area">
      <record-chart />
    </div>
    <div class="sqr_area">

    </div>
    <div class="sqr_area">

    </div>
    <div class="sqr_area">

    </div>
  </div>
</template>

<script>
import RecordChart from '../../components/Echarts.vue'
import HeaderBar from './HeaderBar.vue'

export default {
  components: {
    RecordChart,
    HeaderBar
  },
  data () {
    return {
      name: 'Trade'
    }
  }
}
</script>

<style>
.sqr_area {
  background-color: aqua;
  height: 250px;
  width: 250px;
  float: left;
  display: inline;
}
</style>
