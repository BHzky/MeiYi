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
                            <el-tab-pane label="喜欢">
                                <div class="subscribe">
                                    <div>喜欢过{{peopleScholar}}位学者</div>
                                    <div class="peopleDetails">
                                        <div><img src="/img/scholar/like1.jpg" alt=""></div>
                                        <div>luxun</div>
                                    </div>
                                    
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="收藏">
                                <div>喜欢过{{peopleScholar}}位学者</div>
                                    <div class="peopleDetails">
                                        <div><img src="/img/scholar/like1.jpg" alt=""></div>
                                        <div>luxun</div>
                                    </div>
                            </el-tab-pane>
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
            tabPosition: 'top',
            peopleScholar:1,
            people:[1,2,3,4,5]
            
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
        // console.log(this.scholarData,"9090")
        setInterval(() => {
            var rand = Math.floor( Math.random() * this.people.length );
            // 随机从数组中取出某值（不会改变原数组）
            var data = this.people.slice(rand)[0];
            this.peopleScholar=data
        }, 1000);
        console.log("执行")
    },
    computed:{
        ...mapState('scholar',[
          "scholarData",
        ]),
        // peopleScholar(){
        //     setTimeout(() => {
                
        //         console.log(3243)
        //         return 2
        //     }, 1000); 
        // }
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
  .peopleDetails{
      display: flex;
      margin-top: 10px;
  }
  .peopleDetails>div:nth-child(2){
      height: 100px;
      line-height: 100px;
      margin-left: 50px;
  }
  .peopleDetails img{
      height: 100px;
      line-height: 100px;
      border-radius: 50%;
  }

</style>