<template>
  <div>
    建筑结构：003
    <br />
    建筑面积：1626.52
    <el-table class="building"
              :row-style="{height:+'px'}"
              :cell-style="{padding:+'px'}"
              :data="buildInfo"
              border>
      <el-table-column prop="No"
                       label="楼层"
                       fixed
                       width="50">
      </el-table-column>
      <el-table-column prop="building_No"
                       label="销售楼号"
                       fixed
                       width="100">
      </el-table-column>
      <el-table-column prop="building_area"
                       label="销售一览"
                       fixed>
        <el-table-column :v-for="(col, index) in items"
                         @formatter="format"
                         align="center"
                         fixed>
          <template slot-scope="scope">
            <div class="tmpl">
              <span> {{ scope }}</span>
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Build',
  data () {
    return {
      buildInfo: [],
      items: []
    }
  },
  methods: {
    format () {

    }
  }

}
</script>

<style>
</style>
