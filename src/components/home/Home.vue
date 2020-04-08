<template>
  <div id="container" ref="carmap"></div>
</template>

<script>
import BMap from 'BMap'
export default {
  mounted () {
    var map = new BMap.Map(this.$refs.carmap)
    var point = new BMap.Point(116.404, 39.915)
    map.centerAndZoom(point, 15)
  }
}
</script>

<style>
#container {
  width: 100%;
  height: 800px;
}
</style>
