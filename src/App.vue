<template>
  <el-container>
    <el-header><car-header></car-header></el-header>
    <el-main><router-view/></el-main>
    <el-footer><car-footer></car-footer></el-footer>
  </el-container>
</template>

<script>
import CarHeader from '@/components/header/Header'
import CarFooter from '@/components/footer/Footer'
export default {
  name: 'App',
  components: {
    CarHeader,
    CarFooter
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  body > .el-container {
    margin-bottom: 0;
  }
</style>
