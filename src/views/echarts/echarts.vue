<template>
<div>
    <el-container>
        <el-header>MeiYi可视化</el-header>
        <el-main>
            <el-row :gutter="10">
                <el-col :span="6">
                    <div class="x">
                        <div class="xOne">
                            <div id="myChart1" style="height:300px;width:100%"></div>
                            <!-- <div class="horn"> -->
                                
                            <!-- </div> -->
                        </div>
                        <div class="xOne">
                            <div id="myChart2" style="height:300px;width:100%"></div>
                            <!-- <div class="horn"></div> -->
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
                        <div class="yOne">
                            <div id="myChart3" style="height:300px;width:100%"></div>
                            <!-- <div class="yhorn"></div> -->
                        </div>
                        <div class="yOne">
                            <div id="myChart4" style="height:300px;width:100%"></div>
                            <!-- <div class="yhorn"></div> -->
                        </div>
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
        echarts4(){
            let myChart = this.$echarts.init(document.getElementById('myChart4'));
            
            let option = {
                title: {
                    text: '近期搜索词汇',
                    // left: 'center',
                    top: 10,
                    textStyle: {
                        color: '#fff',
                        fontSize:"15"
                    }
                },
                backgroundColor: "#38445E",
                grid: {
                    left: '12%',
                    top: '20%',
                    bottom: '12%',
                    right: '8%'
                },
                xAxis: {
                    data: ['驯鹿', '火箭', '飞机', '高铁', '轮船', '汽车', '跑步', '步行', ],
                axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 129, 109, 0.1)',
                            width: 1 //这里是为了突出显示加上的
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#999',
                            fontSize: 12
                        }
                    }
                },
                yAxis: [{
                        splitNumber: 2,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 129, 109, 0.1)',
                                width: 1 //这里是为了突出显示加上的
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#999'
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: 'rgba(255,255,255,.5)'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(255, 129, 109, 0.1)',
                                width: 0.5,
                                type: 'dashed'
                            }
                        }
                    }
                ],
                series: [{
                    name: 'hill',
                    type: 'pictorialBar',
                    barCategoryGap: '0%',
                    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                    label: {
                        show: true,
                        position: 'top',
                        distance: 15,
                        color: '#DB5E6A',
                        fontWeight: 'bolder',
                        fontSize: 20,
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                        offset: 0,
                                        color: 'rgba(232, 94, 106, .8)' //  0%  处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(232, 94, 106, .1)' //  100%  处的颜色
                                    }
                                ],
                                global: false //  缺省为  false
                            }
                        },
                        emphasis: {
                            opacity: 1
                        }
                    },
                    data: [123, 60, 25, 18, 12, 9, 2, 1],
                    z: 10
                }]
            };
            myChart.setOption(option)
        },
        echarts3(){
            let myChart = this.$echarts.init(document.getElementById('myChart3'));
            var colorArray = [
                {
                    top: '#ffa800', //黄
                    bottom: 'rgba(11,42,84,.3)'
                }, {
                    top: '#1ace4a', //绿
                    bottom: 'rgba(11,42,84, 0.3)'
                },
                {
                    top: '#4bf3ff', //蓝
                    bottom: 'rgba(11,42,84,.3)'
                }, {
                    top: '#4f9aff', //深蓝
                    bottom: 'rgba(11,42,84,.3)'
                },
                {
                    top: '#b250ff', //粉
                    bottom: 'rgba(11,42,84,.3)'
                }
            ];
            let option = {
                title: {
                    text: '近期点赞收藏数',
                    // left: 'center',
                    top: 10,
                    textStyle: {
                        color: '#fff',
                        fontSize:"15"
                    }
                },
                backgroundColor: '#0E2A43',
                tooltip: {
                    show: true,
                    formatter: "{b}:{c}"
                    },
            grid: {
                    left: '5%',
                    top: '12%',
                    right: '1%',
                    bottom: '8%',
                    containLabel: true
                    },
            
                xAxis: {
                    type: 'value',
                    show:false,
                    position: 'top',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#fff',
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },
                yAxis: [{
                        type: 'category',
                        axisTick: {
                            show: false,
                            alignWithLabel: false,
                            length: 5,

                        },
                        "splitLine": { //网格线
                            "show": false
                        },
                        inverse: 'true', //排序
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#fff',
                            }
                        },
                        data: ['first', 'two', 'three', 'four', 'five']
                    }

                ],
                series: [{
                        name: '能耗值',
                        type: 'bar',
                            label: {
                            normal: {
                            show: true,
                            position: 'right',
                            formatter: '{c}',
                            textStyle: {
                                color: 'white' //color of value
                            }
                            }
                        },
                        itemStyle: {
                            normal: {
                                show: true,
                                color: function(params) {
                                    let num = colorArray.length;
                                    return {
                                        type: 'linear',
                                        colorStops: [{
                                            offset: 0,
                                            color: colorArray[params.dataIndex % num].bottom
                                        }, {
                                            offset: 1,
                                            color: colorArray[params.dataIndex % num].top
                                        }, {
                                            offset: 0,
                                            color: colorArray[params.dataIndex % num].bottom
                                        }, {
                                            offset: 1,
                                            color: colorArray[params.dataIndex % num].top
                                        }, {
                                            offset: 0,
                                            color: colorArray[params.dataIndex % num].bottom
                                        }, {
                                            offset: 1,
                                            color: colorArray[params.dataIndex % num].top
                                        }, {
                                            offset: 0,
                                            color: colorArray[params.dataIndex % num].bottom
                                        }, {
                                            offset: 1,
                                            color: colorArray[params.dataIndex % num].top
                                        }, {
                                            offset: 0,
                                            color: colorArray[params.dataIndex % num].bottom
                                        }, {
                                            offset: 1,
                                            color: colorArray[params.dataIndex % num].top
                                        }, {
                                            offset: 0,
                                            color: colorArray[params.dataIndex % num].bottom
                                        }, {
                                            offset: 1,
                                            color: colorArray[params.dataIndex % num].top
                                        }],
                                        //globalCoord: false
                                    }
                                },
                                barBorderRadius: 70,
                                borderWidth: 0,
                                borderColor: '#333',
                            }
                        },
                        barGap: '0%',
                        barCategoryGap: '50%',
                        data: [60, 132, 89, 134, 60]
                    }

                ]
            };
            myChart.setOption(option)
        },
        echarts2(){
            let myChart = this.$echarts.init(document.getElementById('myChart2'));
            let option = {
                backgroundColor: '#2c343c',
                title: {
                    text: '阅读文章的比例',
                    // left: 'center',
                    top: 10,
                    textStyle: {
                        color: '#fff',
                        fontSize:"15"
                    }
                },

                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },

                visualMap: {
                    show: false,
                    min: 500,
                    max: 600,
                    inRange: {
                        //colorLightness: [0, 1]
                    }
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '45%',
                    center: ['50%', '50%'],
                    color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
                    data: [{
                            value: 28,
                            name: 'Scientometrics'
                        },
                        {
                            value: 41,
                            name: 'IEEE Access'
                        },
                        {
                            value: 27,
                            name: 'CIKM'
                        },
                        {
                            value: 23,
                            name: 'PLoS ONE'
                        }
                    ].sort(function(a, b) {
                        return a.value - b.value
                    }),
                    roseType: 'radius',

                    label: {
                        normal: {
                            formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
                            rich: {
                                c: {
                                    color: 'rgb(241,246,104)',
                                    fontSize: 20,
                                    fontWeight:'bold',
                                    lineHeight: 5
                                },
                                b: {
                                    color: 'rgb(98,137,169)',
                                    fontSize: 15,
                                    height: 40
                                },
                            },
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgb(98,137,169)',
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20,

                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowColor: 'rgba(0, 0, 0, 0.8)',
                            shadowBlur: 50,
                        }
                    }
                }]
            };
            myChart.setOption(option)
        },
        echarts1(){
            let myChart = this.$echarts.init(document.getElementById('myChart1'));

            var data1 = [132, 324, 327, 452, 365, 145, 326];
            var data2 = [7., -2, 4, -3, -5, -1, 3];
            //定义两个上下箭头的矢量路径
            var up = 'path://M286.031,265l-16.025,3L300,223l29.994,45-16.041-3-13.961,69Z';
            var down = 'path://M216.969,292l16.025-3L203,334l-29.994-45,16.041,3,13.961-69Z'
            //遍历data2里面元素的正负定义一个矢量路径的数组
            var path = [up,down,up,down,down,down,up]
            let option = {
                title:{
                    text:"近一周活跃情况",
                    padding:10,
                    textStyle:{
                        color:"#fff",
                        // fontWeight:"lighter",
                        fontSize:"15"
                    },
                    
                },
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周七'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        "name": "",
                        type: 'pictorialBar',
                        symbol: function(data,params){
                            return path[params.dataIndex]
                        },
                        symbolSize: [20, 30],
                        symbolOffset: [0, -40],
                        color:'orange',
                        symbolPosition: 'end',
                        label: {
                            show: true,
                            position: "top",
                            formatter:  function(params){
                                return data2[params.dataIndex]
                            },
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#34DCFF'
                        },
                        data: data1
                    },
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '40%',
                        data: data1
                    }
                ]
            };
            myChart.setOption(option)

        },
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
               this.echarts1()
               this.echarts2()
               this.echarts3()
               this.echarts4()
               //让echarts图标跟着屏幕响应式变化
               window.addEventListener("resize",()=>{
                   this.$echarts.init(document.getElementById('myChart')).resize();
                   this.$echarts.init(document.getElementById('myChart1')).resize();
                   this.$echarts.init(document.getElementById('myChart2')).resize();
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
    background:#333;padding-top:10px;height: 600px;margin-top: 0px;
}
.x{display: flex;justify-content: space-between;flex-direction: column;min-height: calc(100vh - 100px);position: relative;}
.y{display: flex;justify-content:space-between;flex-direction: column;min-height: calc(100vh - 100px)}
.xOne{background:#444;height: 300px;opacity: 1;position: relative;border: 2px solid #000;}
/* .xOne::before{
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
    right: 0;
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
    } */
.yOne{background:#444;height: 300px;position: relative;border: 2px solid #000;}

</style>