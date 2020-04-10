<template>
    <div>
      <!--第一行内容-->
      <el-row>
        <!--门店服务总人数-->
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <car-pie :chartDesc="shopServicesDesc" :chartData="shopServicesData"></car-pie>
          </div>
        </el-col>
        <!--门店时段服务人数-->
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <car-line :chartData="shopTimeServicesData" :chartDesc="shopTimeServicesDesc" :legendName="shopTimeServiceslegendName"></car-line>
          </div>
        </el-col>
        <el-col :span="8"><div class="grid-content bg-purple">1.3</div></el-col>
      </el-row>
      <!--第二行内容-->
      <el-row>
        <!--门店售卖总人数-->
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <car-pie :chartDesc="shopSellsDesc" :chartData="shopSellsData"></car-pie>
          </div>
        </el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light">2.2</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">2.3</div></el-col>
      </el-row>
    </div>
</template>

<script>
import CarPie from '@/components/charts/CarPie'
import CarLine from '@/components/charts/CarLine'
export default {
  components: {
    CarPie,
    CarLine
  },
  data () {
    return {
      shopServicesDesc: '门店服务总人数',
      shopServicesData: [],
      shopSellsDesc: '门店售卖总人数',
      shopSellsData: [],
      shopTimeServicesData: [],
      shopTimeServiceslegendName: '人数',
      shopTimeSellsDesc: '时段售卖数'
    }
  },
  mounted: function () {
    // 获取门店服务总人数
    this.getShopServiceData()
    // 获取门店总售卖数
    this.getShopSellData()
    // 获取门店分段服务人数
    this.getShopTimeServiceData()
  },
  methods: {
    // 获取门店服务总人数
    getShopServiceData: function () {
      let url = '/shopservices/?city=' + this.common.city.id + '&date=' + this.common.date + '&shopid=' + this.$route.params.shopid
      this.axios.get(url).then((response) => {
        this.shopServicesData = {
          columns: ['name', 'num'],
          rows: response.data
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    // 获取门店总售卖数
    getShopSellData: function () {
      let url = '/shopsells/?city=' + this.common.city.id + '&date=' + this.common.date + '&shopid=' + this.$route.params.shopid
      this.axios.get(url).then((response) => {
        this.shopSellsData = {
          columns: ['name', 'num'],
          rows: response.data
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    // 获取门店分段服务人数
    getShopTimeServiceData: function () {
      let url = '/timeshopservices/?city=' + this.common.city.id + '&date=' + this.common.date + '&shopid=' + this.$route.params.shopid
      this.axios.get(url).then((response) => {
        this.shopTimeServicesData = {
          columns: ['time', 'count'],
          rows: response.data
        }
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>

<style>
</style>
