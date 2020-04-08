<template>
<div>
    <div id="myChart" :style="{width: '1000px', height: '300px',border:'1px solid red',margin:'120px auto'}"></div>
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
        myMap(){
            let myChart = this.$echarts.init(document.getElementById('myChart'));
            let option={
                //左下角
                visualMap:{
                    pieces: [
                        {gt: 1000, lte: 9999,label: '1000-9999',color:"red"},  // (310, 1000]
                        {gt: 100, lte: 999,label: '100-999',color:"orange"},   // (200, 300]
                        {gt: 10, lte: 99, label: '10-99',color:"blue"},       // (10, 200]
                        {gt:0,lt: 10,label: '1-10',color:"yellow"} ,
                        {value: 0, label: '0', color: 'pink'},  // [123, 123]     
                    ]
                },
                title:{
                    text:"科研图书馆分布情况",
                    subtext:"@meiyi",
                    left:"center",
                    padding:15,
                    },
                tooltip:{},
                series:[
                    {
                        name:"地图",
                        type:"map",
                        map:"china",
                        data:this.data//数据
                    }
                ],
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