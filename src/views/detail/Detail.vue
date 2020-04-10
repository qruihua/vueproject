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
        <el-col :span="8"><div class="grid-content bg-purple-light">1.2</div></el-col>
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
export default {
  components: {
    CarPie
  },
  data () {
    return {
      shopServicesDesc: '门店服务总人数',
      shopServicesData: [],
      shopSellsDesc: '门店售卖总人数',
      shopSellsData: []
    }
  },
  mounted: function () {
    // 获取门店服务总人数
    this.getShopServiceData()
    // 获取门店总售卖数
    this.getShopSellData()
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
    }
  }
}
</script>

<style>
</style>
