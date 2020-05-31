<template>
    <div id="app">
        <el-container>
            <el-header>MeiYi科研地图</el-header>
            <el-container>
                <el-main>
                        <!-- <el-autocomplete
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
                        </el-autocomplete> -->
                        <el-button type="primary" class="nearby" @click="dialogVisible = true">查看更多分布</el-button>
                        <el-dialog class="choose"
                        :visible.sync="dialogVisible"
                        width="30%"
                        >
                        <div class="suspension">
                            <div class="cricle" @click="nation">
                                <div>查看全国</div>
                            </div>
                            <!-- <div class="cricle">
                                <div>下转</div>
                            </div>
                            <div class="cricle">
                                <div>下转</div>
                            </div> -->
                        </div>
                        </el-dialog>
                    <div>
                        <div id="allmap" class="ditu"></div>
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
      arrayList: [],
      dialogVisible: false,
            form: {
                address: '', //详细地址
                addrPoint: { //详细地址经纬度
                    lng: 0,
                    lat: 0
                }
            },
    };
  },
  methods: {
      nation(){
            this.$router.push("echarts")
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
    BaiduMap() {
      // 百度地图API功能
      var map = new BMap.Map("allmap");
      map.centerAndZoom(new BMap.Point(121.443532, 31.24603), 13);
      map.enableScrollWheelZoom(true);

      function showPoly(pointList) {
        //循环显示点对象
        for (var c = 0; c < pointList.length; c++) {
          var marker = new BMap.Marker(pointList[c]);
          map.addOverlay(marker);
          //将途经点按顺序添加到地图上
          var label = new BMap.Label(c + 1, { offset: new BMap.Size(20, -10) });
          marker.setLabel(label);
        }

        var group = Math.floor(pointList.length / 29); //线路条数
        var mode = ""; //多余个数
        var remainder = pointList.length % 29;
        var calculate = remainder + group;

        //线条数 多余个数计算
        if (calculate === 29) {
          group += 1;
        } else if (calculate > 29) {
          group += 1;
          mode = calculate - 29;
        } else {
          mode = calculate - 1;
        }

        var driving = new BMap.DrivingRoute(map, {
          onSearchComplete: function(results) {
            if (driving.getStatus() == BMAP_STATUS_SUCCESS) {
              var plan = driving.getResults().getPlan(0);
              var num = plan.getNumRoutes();
            //   alert("plan.num ：" + num);
              for (var j = 0; j < num; j++) {
                var pts = plan.getRoute(j).getPath(); //通过驾车实例，获得一系列点的数组
                var polyline = new BMap.Polyline(pts);
                map.addOverlay(polyline);
              }
              searchFn();
            }
          }
        });

        //多出的一段单独进行search
        var endFn = function() {
          if (mode !== "") {
            var waypoint = pointList.slice(
              group * 28 + 1,
              pointList.length - 1
            );
            if (mode === 1) {
              //余数为1 途经点为空
              waypoint = [];
            }
            driving.search(
              pointList[group * 28],
              pointList[pointList.length - 1],
              { waypoints: waypoint }
            );
          }
        };

        var groupCopy = parseInt(group.toString());
        //整条线路递归
        var searchFn = function() {
          groupCopy--;
          if (groupCopy >= 0) {
            var i = group - groupCopy - 1;
            var waypoint = pointList.slice(i * 28 + 1, (i + 1) * 28);
            driving.search(
              pointList[i * 28],
              pointList[(i + 1) * 29 - (i + 1)],
              { waypoints: waypoint }
            );
          } else if (groupCopy == -1) {
            endFn();
          }
        };
        searchFn();
      }
      //将33个百度坐标点放入数据中
      var p1 = new BMap.Point(121.403532, 31.24603);
      var p2 = new BMap.Point(121.481477, 31.240103);
      var p3 = new BMap.Point(121.493262, 31.237015);
      var p4 = new BMap.Point(121.494987, 31.230099);
      var p5 = new BMap.Point(121.489382, 31.225034);
      var p6 = new BMap.Point(121.512953, 31.219846);
      var p7 = new BMap.Point(121.510222, 31.228122);
      var p8 = new BMap.Point(121.520715, 31.232198);
      var p9 = new BMap.Point(121.515828, 31.239485);
      var p10 = new BMap.Point(121.498724, 31.238868);
      var p11 = new BMap.Point(121.496568, 31.227505);
      var p12 = new BMap.Point(121.479177, 31.244178);
      var p13 = new BMap.Point(121.496712, 31.249365);
      var p14 = new BMap.Point(121.503323, 31.260972);
      var p15 = new BMap.Point(121.512953, 31.276158);
      var p16 = new BMap.Point(121.481764, 31.26838);
      var p17 = new BMap.Point(121.464804, 31.285293);
      var p18 = new BMap.Point(121.468685, 31.251587);
      var p19 = new BMap.Point(121.47041, 31.245289);
      var p20 = new BMap.Point(121.489094, 31.19106);
      var p21 = new BMap.Point(121.514534, 31.207987);
      var p22 = new BMap.Point(121.525314, 31.178208);
      var p23 = new BMap.Point(121.530363, 31.160422);
      var p24 = new BMap.Point(121.533363, 31.159422);
      var p25 = new BMap.Point(121.545005, 31.203169);
      var p26 = new BMap.Point(121.562252, 31.186364);
      var p27 = new BMap.Point(121.569295, 31.170422);
      var p28 = new BMap.Point(121.575907, 31.15559);
      var p29 = new BMap.Point(121.585907, 31.14559);
      var p30 = new BMap.Point(121.595907, 31.13559);
      var p31 = new BMap.Point(121.590007, 31.12559);
      var p32 = new BMap.Point(121.605907, 31.11559);
      var p33 = new BMap.Point(121.615907, 31.10559);

      this.arrayList.push(p1);
      this.arrayList.push(p2);
      this.arrayList.push(p3);
      this.arrayList.push(p4);
      this.arrayList.push(p5);
      this.arrayList.push(p6);
      this.arrayList.push(p7);
      this.arrayList.push(p8);
      this.arrayList.push(p9);
      this.arrayList.push(p10);
      this.arrayList.push(p11);
      this.arrayList.push(p12);
      this.arrayList.push(p13);
      this.arrayList.push(p14);
      this.arrayList.push(p15);
      this.arrayList.push(p16);
      this.arrayList.push(p17);
      this.arrayList.push(p18);
      this.arrayList.push(p19);
      this.arrayList.push(p20);
      this.arrayList.push(p21);
      this.arrayList.push(p22);
      this.arrayList.push(p23);
      this.arrayList.push(p24);
      this.arrayList.push(p25);
      this.arrayList.push(p26);
      this.arrayList.push(p27);
      this.arrayList.push(p28);
      this.arrayList.push(p29);
      this.arrayList.push(p30);
      this.arrayList.push(p31);
      this.arrayList.push(p32);
      this.arrayList.push(p33);

      //显示轨迹

      showPoly(this.arrayList);
    }
  },
  mounted() {
    this.BaiduMap();
  }
};
</script>

<style scoped>
/* #allmap {
  width: 100%;
  height: 1200px;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
} */
.el-header, .el-footer {
    background-color: #000;
    color: #fff;
    text-align: left;
    line-height: 60px;
  }
  .el-main {
    background-color: #333;
    color: #333;
    /* text-align: center; */
    /* line-height: 100px; */
    padding: 0 !important;
    min-height: calc(100vh - 60px)
  }
   body > .el-container {
    margin-bottom: 40px;
  }
/* #app{display: flex;flex-direction: column} */
/* .mapsearch{display: flex;} */
.search{width: 30%;left: 20px;position: absolute;top: 0px;z-index: 99;}
.nearby{left:40px;position: absolute;top:80px;z-index: 99;}
.ditu{width: 100%;position: relative;z-index: 1;min-height: calc(100vh - 60px);top: -30px;}
/* .show{display: flex;justify-content: space-around} */
.mapDetails{margin-bottom: 10px}
.choose{opacity: 0.8;margin-top: 150px !important;border-radius: 10px;}
.cricle{width: 100px;height: 100px;border-radius: 50%;background: forestgreen;line-height: 50px;color: #fff;display: flex;}
.cricle>div{margin: auto;}
.suspension{display: flex;justify-content: space-around;}
</style>