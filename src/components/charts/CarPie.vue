<template>
  <div class="charts-desc-rel">
    <ve-pie :data="chartData"></ve-pie>
    <span class="charts-desc-abs">图表说明</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      }
    }
  }
}
</script>>

<style>
  .charts-desc-rel {
    position: relative;
  }
  .charts-desc-abs {
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color: rgba(7,17,27,0.5);
  }

</style>
