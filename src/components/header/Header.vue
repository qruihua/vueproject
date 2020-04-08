<template>
  <el-row>
    <el-col :span="8">
      <div class="grid-content bg-purple left-content">
        <!--地点选择-->
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <!--时间选择-->
        <el-date-picker
          v-model="value1"
          type="date"
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
        <el-button>首页</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      value1: ''
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
</style>
