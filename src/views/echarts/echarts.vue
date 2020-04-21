<template>
<div>
    <el-container>
        <el-header>MeiYi可视化</el-header>
        <el-main>
            <el-row :gutter="10">
                <el-col :span="6">
                    <div class="x">
                        <div class="xOne">
                            <div class="horn"></div>
                        </div>
                        <div class="xOne">
                            <div class="horn"></div>
                        </div>
                        <div class="xOne">
                            <div class="horn"></div>
                        </div>
                    </div>
                    
                </el-col>
                <el-col :span="12">
                    <div class="content">
                        <div id="myChart" :style="{width: '100%', height: '600px',margin:'0px auto'}"></div>
                    </div>
                </el-col>
                <el-col :span="6">
                   <div class="y">
                        <div class="yOne"></div>
                        <div class="yOne"></div>
                        <div class="yOne"></div>
                    </div>
                </el-col>
            </el-row>
            
        </el-main>
    </el-container>
   
    
</div>   
</template>
<script>
import list from "../../assets/data.json"//引入假数据--暂定（mock.js）
export default {
    data(){
        return {
            listData:[],
        }
    },
    methods:{
        // myMap(){
        //     let myChart = this.$echarts.init(document.getElementById('myChart'));
        //     let option={
        //         //左下角
        //         visualMap:{
        //             pieces: [
        //                 {gt: 1000, lte: 9999,label: '1000-9999',color:"red"},  // (310, 1000]
        //                 {gt: 100, lte: 999,label: '100-999',color:"orange"},   // (200, 300]
        //                 {gt: 10, lte: 99, label: '10-99',color:"blue"},       // (10, 200]
        //                 {gt:0,lt: 10,label: '1-10',color:"yellow"} ,
        //                 {value: 0, label: '0', color: 'pink'},  // [123, 123]     
        //             ]
        //         },
        //         title:{
        //             text:"科研图书馆分布情况",
        //             subtext:"@meiyi",
        //             left:"center",
        //             padding:0,
        //             },
        //         tooltip:{},
        //         series:[
        //             {
        //                 name:"地图",
        //                 type:"map",
        //                 map:"china",
        //                 data:this.data//数据
        //             }
        //         ],
        //     }
        //     myChart.setOption(option)
        // },
        myMap(){
            let myChart = this.$echarts.init(document.getElementById('myChart'));
            
            var data = [
                { name: "上海", value: 29780},
                { name: "珠海", value: 2186},
                { name: "三亚", value: 1135},
                { name: "惠州", value: 1973},
                { name: "海口", value: 2568},
                { name: "合肥", value: 4039},
                { name: "南京", value: 6959},
                { name: "杭州", value: 5632},
                { name: "苏州", value: 6707},
                { name: "无锡", value: 3393},
                { name: "昆山", value: 1894},
                { name: "广州", value: 15769},
                { name: "深圳", value: 8259},
                { name: "佛山", value: 5741},
                { name: "东莞", value: 3030},
                { name: "福州", value: 4542},
                { name: "厦门", value: 3329},
                { name: "南宁", value: 3157},
                { name: "郑州", value: 6690},
                { name: "武汉", value: 8678},
                { name: "长沙", value: 5303},
                { name: "南昌", value: 3025},
                { name: "北京", value: 20259},
                { name: "长春", value: 3016},
                { name: "大连", value: 3202},
                { name: "沈阳", value: 4540},
                { name: "哈尔滨", value: 3141},
                { name: "天津", value: 8626},
                { name: "济南", value: 4361},
                { name: "青岛", value: 6667},
                { name: "太原", value: 4080},
                { name: "石家庄", value: 6137},
                { name: "西安", value: 6991},
                { name: "成都", value: 13873},
                { name: "重庆", value: 13283},
                { name: "昆明", value: 4633},


            ];

            var geoCoordMap = {
                "上海": [121, 31],
                "珠海": [113, 22],
                "三亚": [109, 18],
                "惠州": [114, 23],
                "海口": [110, 20],
                "合肥": [117, 31],
                "南京": [118, 32],
                "杭州": [120, 30],
                "苏州": [120, 31],
                "无锡": [120, 31],
                "昆山": [120, 31],
                "广州": [113, 23],
                "深圳": [114, 22],
                "佛山": [113, 23],
                "东莞": [113, 23],
                "福州": [119, 26],
                "厦门": [118, 24],
                "南宁": [108, 22],
                "郑州": [113, 34],
                "武汉": [114, 30],
                "长沙": [113, 28],
                "南昌": [115, 28],
                "北京": [116, 39],
                "长春": [125, 43],
                "大连": [121, 38],
                "沈阳": [123, 41],
                "哈尔滨": [126, 45],
                "天津": [117, 39],
                "济南": [117, 36.65],
                "青岛": [120, 36],
                "太原": [112, 37],
                "石家庄": [114, 38],
                "西安": [108, 34],
                "成都": [104, 30],
                "重庆": [106, 29],
                "昆明": [102, 25],
            };

            var convertData = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            var convertedData = [
                convertData(data),
                convertData(data.sort(function(a, b) {
                    return b.value - a.value;
                }).slice(0, 6))
            ];
            data.sort(function(a, b) {
                return a.value - b.value;
            })

            var selectedItems = [];
            var categoryData = [];
            var barData = [];
            //   var maxBar = 30;
            var sum = 0;
            var count = data.length;
            for (var i = 0; i < data.length; i++) {
                categoryData.push(data[i].name);
                barData.push(data[i].value);
                sum += data[i].value;
            }
            console.log(categoryData);
            console.log(sum + "   " + count)
            let option = {
                backgroundColor: '#404a59',
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                title: [{
                    text: '科研兴趣相同爱好者人数',
                    // link: 'http://pages.anjuke.com/expert/newexpert.html',
                    // subtext: 'data from Anjuke',
                    // sublink: 'http://pages.anjuke.com/expert/newexpert.html',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                }, {
                    id: 'statistic',
                    text: count ? '平均: ' + parseInt((sum / count).toFixed(4)) : '',
                    right: 120,
                    top: 40,
                    width: 100,
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    }
                }],
                toolbox: {
                    iconStyle: {
                        normal: {
                            borderColor: '#fff'
                        },
                        emphasis: {
                            borderColor: '#b1e4ff'
                        }
                    },
                    feature: {
                        dataZoom: {},
                        brush: {
                            type: ['rect', 'polygon', 'clear']
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                brush: {
                    outOfBrush: {
                        color: '#abc'
                    },
                    brushStyle: {
                        borderWidth: 2,
                        color: 'rgba(0,0,0,0.2)',
                        borderColor: 'rgba(0,0,0,0.5)',
                    },
                    seriesIndex: [0, 1],
                    throttleType: 'debounce',
                    throttleDelay: 300,
                    geoIndex: 0
                },
                geo: {
                    map: 'china',
                    left: '10',
                    right: '35%',
                    center: [117.98561551896913, 31.205000490896193],
                    zoom: 1.5,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                grid: {
                    right: 40,
                    top: 100,
                    bottom: 40,
                    width: '30%'
                },
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        margin: 2,
                        textStyle: {
                            color: '#aaa'
                        }
                    },
                },
                yAxis: {
                    type: 'category',
                    //  name: 'TOP 20',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    data: categoryData
                },
                series: [{
                    // name: 'pm2.5',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertedData[0],
                    symbolSize: function(val) {
                        return Math.max(val[2] / 300, 8);
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FF8C00',
                            position: 'right',
                            show: true
                        }
                    }
                }, {
                    //  name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertedData[0],
                    symbolSize: function(val) {
                        return Math.max(val[2] / 500, 8);
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 50,
                            shadowColor: '#EE0000'
                        }
                    },
                    zlevel: 1
                }, {
                    id: 'bar',
                    zlevel: 2,
                    type: 'bar',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    },

                    data: data
                }]
            };

            function renderBrushed(params) {
                var mainSeries = params.batch[0].selected[0];

                var selectedItems = [];
                var categoryData = [];
                var barData = [];
                var maxBar = 30;
                var sum = 0;
                var count = 0;

                for (var i = 0; i < mainSeries.dataIndex.length; i++) {
                    var rawIndex = mainSeries.dataIndex[i];
                    var dataItem = convertedData[0][rawIndex];
                    var pmValue = dataItem.value[2];

                    sum += pmValue;
                    count++;

                    selectedItems.push(dataItem);
                }

                selectedItems.sort(function(a, b) {
                    //   return b.value[2] - a.value[2];
                    return a.value - b.value;
                });

                for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
                    categoryData.push(selectedItems[i].name);
                    barData.push(selectedItems[i].value[2]);
                }

                this.setOption({
                    yAxis: {
                        data: categoryData
                    },
                    xAxis: {
                        axisLabel: {
                            show: !!count
                        }
                    },
                    title: {
                        id: 'statistic',
                        text: count ? '平均: ' + (sum / count).toFixed(4) : ''
                    },
                    series: {
                        id: 'bar',
                        //        sort:'descending',
                        data: barData
                    }
                });
            }
            myChart.setOption(option)
        },
            changeData(){
                   this.listData = list.map(elem=>{
                       return {
                           name: elem.provinceShortName,
                           value: elem.currentConfirmedCount
                       }
                   })
            }
           },
           mounted(){
               this.changeData()
               this.myMap()
               //让echarts图标跟着屏幕响应式变化
               window.addEventListener("resize",()=>{
                   this.$echarts.init(document.getElementById('myChart')).resize();
               })
               
            
           },
           created(){
               
           },
           computed:{
               data(){
                   return this.listData
               }
           }
}
</script>
<style scoped>
  .el-header{
    background-color: #222;
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 40px;
  }
  .el-main {
    background-color: #333;
    color: #333;
    text-align: center;
    line-height: 160px;
     min-height: calc(100vh - 60px)
  }
.content{
    background:#333;padding-top:10px;height: 400px;margin-top: 0px;
}
.x{display: flex;justify-content: space-between;flex-direction: column;min-height: calc(100vh - 100px);position: relative;}
.y{display: flex;justify-content:space-between;flex-direction: column;min-height: calc(100vh - 100px)}
.xOne{background:#fff;height: 200px;opacity: 0.2;position: relative;}
.xOne::before{
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #000;
    border-top: 2px solid #000;
    content: "";
    }
.xOne::after{
    position: absolute;
    top: 0;
    right: 0px;
    width: 10px;
    height: 10px;
    border-right: 2px solid #000;
    border-top: 2px solid #000;
    content: "";
    }
.horn{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
}
.horn::before{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    content: "";
    }
.horn::after{
    position: absolute;
    bottom: 0;
    right: 0px;
    width: 10px;
    height: 10px;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    content: "";
    }
.yOne{background:#fff;height: 200px;opacity: 0.3;}
</style>