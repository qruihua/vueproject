<template>
  <el-row>
    <!--左边的服务总人数和售卖总人数-->
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <!--服务总人数-->
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <car-pie v-bind:chartData="totalServicesData" :chartDesc="totalServicesChartDesc"></car-pie>
            </div>
          </el-col>
        </el-row>
        <!--售卖总人数-->
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <car-pie></car-pie>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <!--中间的地图-->
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
        <car-b-map></car-b-map>
      </div>
    </el-col>
    <!--右边的服务人数前10名和售卖人数前10名-->
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <!--服务人数前10名-->
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <car-histogram></car-histogram>
            </div>
          </el-col>
        </el-row>
        <!--售卖人数前10名-->
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <car-histogram></car-histogram>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CarPie from '@/components/charts/CarPie'
import CarHistogram from '@/components/charts/CarHistogram'
import CarBMap from '@/components/map/CarBMap'
export default {
  components: {
    CarPie,
    CarHistogram,
    CarBMap
  },
  data () {
    return {
      totalServicesData: [],
      totalServicesChartDesc: '服务总人数'
    }
  },
  mounted () {
    // 监听事件
    this.$root.$on('mapChange', this.reloadData)
    this.$root.$on('dateChange', this.reloadData)
  },
  methods: {
    getTotalServiceData: function () {
      let url = '/totalservices'
      this.axios.get(url).then((response) => {
        this.totalServicesData = {
          columns: ['name', 'num'],
          rows: response.data
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    reloadData: function (info) {
      if (info.type === 1) {
        alert('城市变化')
      } else {
        alert('日期变化')
      }
      this.getTotalServiceData()
    }
  }
}
</script>

<style>
</style>
