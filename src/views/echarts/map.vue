<template>
    <div id="app">
        <el-container>
            <el-header>MeiYi科研地图</el-header>
            <el-container>
                <el-main>
                        <el-autocomplete
                        class="search"
                        popper-class="autoAddressClass"
                        v-model="form.address"
                        :fetch-suggestions="querySearchAsync"
                        :trigger-on-focus="false"
                        placeholder="详细地址"
                        @select="handleSelect"
                        clearable>
                        <template slot-scope="{ item }">
                            <i class="el-icon-search fl mgr10"></i>
                            <div style="overflow:hidden;">
                            <div class="title">{{ item.title }}</div>
                            <span class="address ellipsis">{{ item.address }}</span>
                            </div>
                        </template>
                        </el-autocomplete>
                        <el-button type="primary" class="nearby" @click="dialogVisible = true">查看分布</el-button>
                        <el-dialog class="choose"
                        :visible.sync="dialogVisible"
                        width="30%"
                        >
                        <div class="suspension">
                            <div class="cricle" @click="nation">
                                <div>全国</div>
                            </div>
                            <div class="cricle">
                                <div>下转</div>
                            </div>
                            <div class="cricle">
                                <div>下转</div>
                            </div>
                        </div>
                        </el-dialog>
                    <div>
                        <div id="map-container" class="ditu"></div>
                    </div>
                </el-main>

            </el-container>
        </el-container>
        <!-- 搜索框 -->
        
        <!-- 地图容器 -->
        
       
      
    </div> 
</template>
<script>
export default {
     data() {
      return {
            dialogVisible: false,
            form: {
                address: '', //详细地址
                addrPoint: { //详细地址经纬度
                    lng: 0,
                    lat: 0
                }
            },
            map: '', //地图实例
            mk: '' //Marker实例
            }  
    },
    methods:{
        nation(){
            this.$router.push("echarts")
        },
        initMap() {
            var that = this;
            this.map = new BMap.Map("map-container", {enableMapClick:false},{enableBizAuthLogo: false})  //新建地图实例，enableMapClick:false ：禁用地图默认点击弹框
            var point = new BMap.Point(116.404, 39.915);
            this.map.centerAndZoom(point,11)
            this.mk = new BMap.Marker(point,{enableDragging:true}) //创建一个图像标注实例，enableDragging：是否启用拖拽，默认为false
            this.map.addOverlay(this.mk) //将覆盖物添加到地图中
            this.mk.addEventListener('dragend', function(e){
                that.getAddrByPoint(e.point) //拖拽结束后调用逆地址解析函数，e.point为拖拽后的地理坐标
            })
            var navigationControl = new BMap.NavigationControl({ //创建一个特定样式的地图平移缩放控件
                anchor: BMAP_ANCHOR_TOP_RIGHT, //靠右上角位置
                // type: BMAP_NAVIGATION_CONTROL_SMALL //SMALL控件类型
                offset: new BMap.Size(0, 70)//控制位置
            })
            var opts = {    
                width : 250,     // 信息窗口宽度    
                height: 100,     // 信息窗口高度    
                title : "说明"  // 信息窗口标题   
            }    
            var infoWindow = new BMap.InfoWindow("可以查看附近具有相同爱好者的分布情况", opts);  // 创建信息窗口对象    
            this.mk.addEventListener("click",function(e){
                this.map.openInfoWindow(infoWindow,e.point); 
            })
            this.map.addControl(navigationControl ) //将控件添加到地图
            this.map.addControl(new BMap.OverviewMapControl());//右下角的小地图 
            this.map.addControl(new BMap.MapTypeControl()); //右上角的地图种类
            var geolocationControl = new BMap.GeolocationControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT}) //创建一个地图定位控件
            geolocationControl.addEventListener("locationSuccess", function(e){ //绑定定位成功后事件
                that.getAddrByPoint(e.point) //定位成功后调用逆地址解析函数
            });
            geolocationControl.addEventListener("locationError",function(e){ //绑定定位失败后事件
                alert(e.message);
            });
            this.map.addControl(geolocationControl) //将控件添加到地图
            this.geolocation()
            this.map.addEventListener('click', function(e){ //给地图绑定点击事件
                that.getAddrByPoint(e.point) //点击后调用逆地址解析函数
            })
        },
        getAddrByPoint(point){
            var that = this;
            var geco = new BMap.Geocoder();
            geco.getLocation(point, function(res){
                console.log(res,1111)  //内容见下图
                that.mk.setPosition(point) //重新设置标注的地理坐标
                that.map.panTo(point)  //将地图的中心点更改为给定的点
                that.form.address = res.address;  //记录该点的详细地址信息
                that.form.addrPoint = point;  //记录当前坐标点
            })
        },
        geolocation() {
            var that = this;
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(res){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                that.getAddrByPoint(res.point) //当成功时，调用逆地址解析函数
                } else {
                alert('failed'+this.getStatus()); //失败时，弹出失败状态码
                }        
            },{enableHighAccuracy: true}) //enableHighAccuracy：是否要求浏览器获取最佳效果，默认为false
        },
        querySearchAsync(str,cb){
        var options = {
            onSearchComplete: function(res){ //检索完成后的回调函数
            var s = [];
            if (local.getStatus() == BMAP_STATUS_SUCCESS){
                for (var i = 0; i < res.getCurrentNumPois(); i ++){
                s.push(res.getPoi(i));
                }
                cb(s) //获取到数据时，通过回调函数cb返回到<el-autocomplete>组件中进行显示
            } else{
                cb(s)
            }
            }
        }
        var local = new BMap.LocalSearch(this.map, options) //创建LocalSearch构造函数
        local.search(str) //调用search方法，根据检索词str发起检索
        },
        handleSelect(item) {
            this.form.address = item.address + item.title; //记录详细地址，含建筑物名
            this.form.addrPoint = item.point; //记录当前选中地址坐标
            this.map.clearOverlays() //清除地图上所有覆盖物
            this.mk = new BMap.Marker(item.point) //根据所选坐标重新创建Marker
            this.map.addOverlay(this.mk) //将覆盖物重新添加到地图中
            this.map.panTo(item.point) //将地图的中心点更改为选定坐标点
        },
      },
    mounted(){
          this.initMap()
      }
}
</script>
<style  scoped>
  .el-header, .el-footer {
    background-color: #000;
    color: #fff;
    text-align: left;
    line-height: 60px;
  }
   .el-aside {
    background-color: #333;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #333;
    color: #333;
    /* text-align: center; */
    line-height: 100px;
    padding: 0 !important;
    min-height: calc(100vh - 120px)
  }
   body > .el-container {
    margin-bottom: 40px;
  }
/* #app{display: flex;flex-direction: column} */
/* .mapsearch{display: flex;} */
.search{width: 30%;left: 20px;position: absolute;top: 50px;z-index: 99;}
.nearby{left: 500px;position: absolute;top:80px;z-index: 99;}
.ditu{width: 100%;position: relative;z-index: 1;min-height: calc(100vh - 60px)}
/* .show{display: flex;justify-content: space-around} */
.mapDetails{margin-bottom: 10px}
.choose{opacity: 0.8;margin-top: 150px !important;border-radius: 10px;}
.cricle{width: 50px;height: 50px;border-radius: 50%;background: forestgreen;line-height: 50px;color: #fff;display: flex;}
.cricle>div{margin: auto;}
.suspension{display: flex;justify-content: space-around;}
</style>