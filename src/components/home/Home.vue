<template>
  <div id="container" ref="carmap"></div>
</template>

<script>
import BMap from 'BMap'
import axios from 'axios'
export default {
  mounted () {
    var map = new BMap.Map(this.$refs.carmap)
    var point = new BMap.Point(116.404, 39.915)
    map.centerAndZoom(point, 15)
    axios.get('http://localhost:3000/cities').then((response) => {
      // alert(response.data)
    }).catch()
    this.axios.get('/cities').then((response) => {
      alert(response.data)
    }).catch()
  }
}
</script>

<style>
#container {
  width: 100%;
  height: 800px;
}
</style>
