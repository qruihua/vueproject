<template>
  <el-row>
    <!--左边的服务总人数和售卖总人数-->
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <!--服务总人数-->
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark">1上</div></el-col>
        </el-row>
        <!--售卖总人数-->
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark">1下</div></el-col>
        </el-row>
      </div>
    </el-col>
    <!--中间的地图-->
    <el-col :span="12"><div class="grid-content bg-purple-light">2</div></el-col>
    <!--右边的服务人数前10名和售卖人数前10名-->
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <!--服务人数前10名-->
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark">3上</div></el-col>
        </el-row>
        <!--售卖人数前10名-->
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark">3下</div></el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
}
</script>

<style>
</style>
