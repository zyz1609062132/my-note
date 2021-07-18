<template>
  <div>
    <div id="main" style="width: 1000px;height:600px;"></div>
  </div>
</template>
 
<script>
  import echarts from 'echarts'
  export default {
    name: "echart",
    mounted() {
      this.drawChart()
    },
    methods: {
      drawChart() {
        var myChart = echarts.init(document.getElementById('main'));
 
        var option = {
          title: {
            text: '柱状图'
          },
          tooltip: {
            trigger:'axis',
            axisPointer:{
              type:'shadow',
              label:true
            }
          },
          legend: {
            data:['aaa','散点图'],
            top:10
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
          },
          toolbox:{
            show: true,
            feature: {
              magicType: {
                show: true,
                type: ['line', 'bar', 'stack']
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              name: '月份',
              axisLine: {
                show: true,
                symbol: ['none', 'arrow'],
                symbolSize: [8, 8],
                symbolOffset: [0, 7],
                lineStyle: {
                  color: '#333',
                  width: 1,
                  type: 'solid',
                }
              }
            }
          ],
          yAxis: {},
          series: [
            {
              name: 'aaa',
              type: 'bar',
              data: [5, 20, 36, 13, 16, 8,32],
              itemStyle:{
                normal:{
                  color: function (params){
                    var colorList = ['#7f8da9','#fec514','#db4c3c'];
                    if(params.value>20){
                      return colorList[2];
                    }else if(params.value>10){
                      return colorList[1];
                    }else{
                      return colorList[0];
                    }
                  }
                },
              },
              markPoint: {
                symbol:'circle',
                // symbol:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcqsq.tlomo.com%2Fforum%2F201911%2F06%2F193235v71lectt1lc214l4.jpg&refer=http%3A%2F%2Fcqsq.tlomo.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628651681&t=f332f5890e9d196ad1670b344cbff835',
                itemStyle:{
                  normal:{
                    label:{
                      show:true,
                      color:'#fff',
                      formatter: function (param) {
                        if(param.data.coord[1]>20){
                          return '优秀'
                        }else if (param.data.coord[1]>10){
                          return '良好'
                        } else {
                          return '不达标'
                        }
                        // return param.name
                      }
                    },
                    color:'#BD60F6'
                  }
                },
                symbolSize:[50, 50],
                symbolOffset:[0,-35],
                data:[
                  {name:'啦啦',coord:[0,5]},
                  {name:'天天',coord:[1,20]},
                  {name:'委婉',coord:[2,36]},
                  {name:'444',coord:[3,13]},
                  {name:'555',coord:[4,16]},
                  {name:'寄快递',coord:[5,8]},
                  {name:'看看',coord:[6,32]},
                ],
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
          ]
        };
 
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
 
      }
    }
  }
</script>
 
<style lang="scss" scoped>
 
</style>