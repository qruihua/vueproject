<template>
  <div class="charts-desc-rel">
    <ve-pie :data="chartData"></ve-pie>
    <span class="charts-desc-abs">{{chartDesc}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['chartData', 'chartDesc']
}
</script>>

<style>
</style>
