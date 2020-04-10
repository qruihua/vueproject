<template>
    <div>
      <!--第一行内容-->
      <el-row>
        <!--1.1 饼状图 门店服务总人数-->
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <car-pie :chartDesc="shopServicesDesc" :chartData="shopServicesData"></car-pie>
          </div>
        </el-col>
        <!--1.2 折线图 门店时段服务人数-->
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <car-line :chartData="shopTimeServicesData" :chartDesc="shopTimeServicesDesc" :legendName="shopTimeServiceslegendName"></car-line>
          </div>
        </el-col>
        <!--1.3 柱状图 门店服务前3人-->
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <car-histogram :chartDesc="shopTopServicesDesc" :chartData="shopTopServicesData" :legendName="shopTopServiceslegendName"></car-histogram>
          </div>
        </el-col>
      </el-row>
      <!--第二行内容-->
      <el-row>
        <!--2.1 饼状图 门店售卖总人数-->
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <car-pie :chartDesc="shopSellsDesc" :chartData="shopSellsData"></car-pie>
          </div>
        </el-col>
        <!--2.2 折线图 门店时段售卖量数-->
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <car-line :chartData="shopTimeSellsData" :chartDesc="shopTimeSellsDesc" :legendName="shopTimeSellslegendName"></car-line>
          </div>
        </el-col>
        <!--2.3 柱状图 门店售卖量排行前3位-->
        <el-col :span="8"><div class="grid-content bg-purple">2.3</div></el-col>
      </el-row>
    </div>
</template>

<script>
import CarPie from '@/components/charts/CarPie'
import CarLine from '@/components/charts/CarLine'
import CarHistogram from '@/components/charts/CarHistogram'
export default {
  components: {
    CarPie,
    CarLine,
    CarHistogram
  },
  data () {
    return {
      shopServicesDesc: '门店服务总人数',
      shopServicesData: [],
      shopSellsDesc: '门店售卖总人数',
      shopSellsData: [],
      shopTimeServicesDesc: '时段服务人数',
      shopTimeServicesData: [],
      shopTimeServiceslegendName: '人数',
      shopTimeSellsDesc: '时段售卖数',
      shopTimeSellsData: [],
      shopTimeSellslegendName: '辆',
      shopTopServicesDesc: '门店服务人数前3名',
      shopTopServiceslegendName: '人数',
      shopTopServicesData: []
    }
  },
  mounted: function () {
    // 获取门店服务总人数
    this.getShopServiceData()
    // 获取门店总售卖数
    this.getShopSellData()
    // 获取门店分段服务人数
    this.getShopTimeServiceData()
    // 获取门店分段售卖数
    this.getShopTimeSellData()
    // 获取服务前3人
    this.getShopTopServiceData()
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
    },
    // 获取门店分段售卖数
    getShopTimeSellData: function () {
      let url = '/timeshopsells/?city=' + this.common.city.id + '&date=' + this.common.date + '&shopid=' + this.$route.params.shopid
      this.axios.get(url).then((response) => {
        this.shopTimeSellsData = {
          columns: ['time', 'count'],
          rows: response.data
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    // 获取服务前3人
    getShopTopServiceData: function () {
      let url = '/shoptopservices/?city=' + this.common.city.id + '&date=' + this.common.date + '&shopid=' + this.$route.params.shopid
      this.axios.get(url).then((response) => {
        this.shopTopServicesData = {
          columns: ['name', 'num'],
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
