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
        <!--售卖量数据-->
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <car-pie :chartData="totalSellsData" :chartDesc="totalSellsChartDesc" ></car-pie>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <!--中间的地图-->
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
        <car-b-map :shopData="shops"></car-b-map>
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
      totalServicesChartDesc: '服务总人数',
      totalSellsData: [],
      totalSellsChartDesc: '售卖量数据',
      shops: []
    }
  },
  mounted () {
    // 监听事件
    this.$root.$on('mapChange', this.reloadData)
    this.$root.$on('dateChange', this.reloadData)
    this.reloadData({type: 1})
  },
  methods: {
    getTotalServiceData: function () {
      let city = this.common.city.id
      let date = this.common.date
      let url = '/totalservices?city=' + city + '&date=' + date
      alert(url)
      this.axios.get(url).then((response) => {
        this.totalServicesData = {
          columns: ['name', 'num'],
          rows: response.data
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    // 获取总售卖数
    getTotalSellData: function () {
      let url = '/totalsells?city=' + this.common.city.id + '&date=' + this.common.date
      this.axios.get(url).then((response) => {
        this.totalSellsData = {
          columns: ['name', 'num'],
          rows: response.data
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    // 获取门店数据
    getShopData: function () {
      let url = '/shops/?city=' + this.common.city.id + '&date=' + this.common.date
      this.axios.get(url).then((response) => {
        this.shops = response.data
      }).catch((e) => {
        console.log(e)
      })
    },
    reloadData: function (info) {
      if (info.type === 1) {
        this.getShopData()
      }
      this.getTotalServiceData()
      this.getTotalSellData()
    }
  }
}
</script>

<style>
</style>
