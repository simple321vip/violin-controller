<template>
  <div>
    <header-bar @onSearch="onSearch" />
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
import api from '../../api/trade'
import $moment from 'moment'

export default {
  components: {
    HeaderBar,
    RecordCharts
  },
  data () {
    return {
      name: 'Trade',
      result: ''
    }
  },
  methods: {
    onSearch (form) {
      const querylist = {}
      querylist.start_date = $moment(form.query_date).startOf(form.date_unit).format('YYYYMMDD')
      api.getTradeInfo(querylist).then(response => {
        this.result = response.data.items
      })
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
