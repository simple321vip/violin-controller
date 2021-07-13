<template>
  <div>
    <header-bar />
    <div class="sqr_area">
      <record-charts />
    </div>
    <!-- <div class="sqr_area">

    </div>
    <div class="sqr_area">

    </div>
    <div class="sqr_area"> -->
    <!--
  </div> -->
  </div>
</template>

<script>

import HeaderBar from './HeaderBar.vue'
import RecordCharts from './RecordCharts.vue'

export default {
  components: {
    HeaderBar,
    RecordCharts
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
  position: absolute;
  display: inline;
  left: 200px;
}
</style>
