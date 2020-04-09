<template>
  <el-row>
    <el-col :span="8">
      <div class="grid-content bg-purple left-content">
        <!--地点选择-->
        <el-select v-model="city" placeholder="请选择" @change="cityChanged" value-key="id">
          <el-option
            v-for="item in cities"
            :key="item.id"
            :label="item.name"
            :value="item">
          </el-option>
        </el-select>
        <!--时间选择-->
        <el-date-picker
          v-model="date"
          type="date"
          @change="dateChange"
          placeholder="选择日期">
        </el-date-picker>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple-light">
        <span class="title">传智汽车4s店服务综合平台</span>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple right-content">
        <el-button class="home-button">首页</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      cities: [],
      city: '',
      date: Date()
    }
  },
  mounted () {
    // 请求获取地区数据
    this.axios.get('/cities').then((response) => {
      this.cities = response.data
      this.city = this.cities[0]
    }).catch((e) => {
      console.log(e)
    })
  },
  methods: {
    cityChanged: function (value) {
      let info = {
        type: 1,
        value: value
      }
      this.$root.$emit('mapChange', info)
    },
    dateChange: function (value) {
      let info = {
        type: 2,
        value: value
      }
      this.$root.$emit('dateChange', info)
    }
  }
}
</script>

<style>
  .left-content {
    float: left;
  }
  .el-input__inner {
    width: 140px;
  }
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
  .right-content {
    float: right;
  }
  .home-button {
    width: 140px;
  }
</style>
