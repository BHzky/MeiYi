<template>
    <div>
        <el-container>
            <el-header>MeiYi科研</el-header>
            <el-main>
                <el-row>
                    <el-col :span="20" :offset="3">
                        <div style="margin-bottom:40px;margin-top:40px">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/index' }"><i class="el-icon-location-information"></i>首页</el-breadcrumb-item>
                                <el-breadcrumb-item>个人中心</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </el-col>
                    <el-col :span="15" :offset="3">
                         <el-tabs :tab-position="tabPosition" style="height: 300px;">
                            <el-tab-pane label="订阅">
                                <div class="subscribe">
                                    <div>订阅过{{}}位学者</div>
                                    
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="收藏"><i class="el-icon-pie-chart"></i>收藏</el-tab-pane>
                            <el-tab-pane label="喜欢"><i class="el-icon-timer"></i>喜欢</el-tab-pane>
                        </el-tabs>
                        <!-- <div class="person">
                            <div> <i class="el-icon-star-off"></i> 订阅</div>
                            <div> <i class="el-icon-pie-chart"></i> 收藏</div>
                            <div> <i class="el-icon-timer"></i> 喜欢</div>
                        </div> -->
                    </el-col>
                    <el-col :span="6">
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
    data (){
        return {
            tabPosition: 'top'
            
        }
    },
    methods:{
        ...mapActions("scholar",[
          "disGetScholar"
      ]),
    },
    created(){
        
    },
    mounted(){
        this.disGetScholar()
        console.log(this.scholarData,"9090")
    },
    computed:{
        ...mapState('scholar',[
          "scholarData",
        ]),
    },
    updated(){
    }
}
</script>
<style scoped>
  .el-header{
    background-color: #000;
    color: #fff;
    text-align: left ;
    line-height: 60px;
  }
   .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }
  .person{
      display: flex;
      justify-content: space-around;
  }
  .subscribe{
      text-align: left;
  }
  .subscribe>div:nth-child(1){
      border-bottom: 1px solid rgb(155, 153, 153);
      padding-bottom: 30px;
      padding-top: 30px;
  }

</style>