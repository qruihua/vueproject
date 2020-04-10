<template>
  <div class="charts-desc-rel">
    <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
    <span class="charts-desc-abs">{{chartDesc}}</span>
  </div>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      metrics: ['num'],
      dimension: ['name'],
      labelMap: {
        'num': this.legendName
      },
      legendName: {
        'num': this.legendName
      }
    }
    return {
    }
  },
  props: ['chartData', 'chartDesc', 'legendName']
}
</script>
