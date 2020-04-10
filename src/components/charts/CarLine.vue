<template>
  <div class="charts-desc-rel">
    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    <span class="charts-desc-abs">{{chartDesc}}</span>
  </div>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      metrics: ['count'],
      dimension: ['time'],
      labelMap: {
        'count': this.legendName
      },
      legendName: {
        'count': this.legendName
      }
    }
    return {
    }
  },
  props: ['chartData', 'chartDesc', 'legendName']
}
</script>
