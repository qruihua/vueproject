<template>
<div id="container" ref="carmap"></div>
</template>

<script>
import BMap from 'BMap'
import BMapGL from 'BMap'
export default {
  props: ['shopData'],
  watch: {
    shopData: function (value) {
      this.showCityShop()
    }
  },
  methods: {
    showCityShop: function () {
      /*
      * http://lbsyun.baidu.com/jsdemo.htm#c1_2 添加动画的点
      * http://lbsyun.baidu.com/jsdemo.htm#c2_3 设置覆盖物的文字标签
      *http://lbsyun.baidu.com/jsdemo.htm#h0_1 给覆盖物添加事件
      * */
      let map = new BMap.Map(this.$refs.carmap)
      map.centerAndZoom(this.common.city.name, 15)
      map.enableScrollWheelZoom(true)// 开启鼠标滚轮缩放
      for (let i = 0; i < this.shopData.length; i++) {
        let item = this.shopData[i]
        let point = new BMap.Point(item.lng, item.lat)
        var marker = new BMap.Marker(point) // 创建标注
        marker.shopid = item.id
        map.addOverlay(marker) // 将标注添加到地图中
        marker.addEventListener('click', this.itemClick) // 添加点击事件
        let opts = {
          position: point, // 指定文本标注所在的地理位置
          offset: new BMapGL.Size(-25, -70) // 设置文本偏移量
        }
        let label = new BMapGL.Label(item.name, opts) // 创建文本标注对象
        label.setStyle({
          color: 'red',
          fontSize: '12px',
          height: '20px',
          lineHeight: '20px',
          fontFamily: '微软雅黑'
        })
        map.addOverlay(label)
        marker.setAnimation(BMAP_ANIMATION_BOUNCE) // 跳动的动画
      }
    },
    itemClick: function (e) {
      this.$router.push({name: 'detail', params: {shopid: e.target.shopid}})
    }
  },
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
