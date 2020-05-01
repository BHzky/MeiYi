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
                                <el-breadcrumb-item :to="{ path: '/scholar' }">学者页</el-breadcrumb-item>
                                <el-breadcrumb-item>学者介绍页</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </el-col>
                    <el-col :span="4" :offset="3">
                        <div class="scholarLeft">
                            <img src="/img/scholar/like1.jpg" alt="">
                            <div class="scholarName">鲁迅</div>
                            <div class="attention">
                                <div>关注</div>
                                <div>分享</div>
                            </div>
                            <div class="attentionDetails">
                                <div>科研贡献</div>
                                <div>1111</div>
                                <div>科研文献数量</div>
                                <div>{{2}}篇</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12" :offset="1">
                        <el-tabs type="border-card">
                            <el-tab-pane label="个人主页">
                                <div class="personPage">
                                    <div>姓名：</div>
                                    <div>获得荣誉：</div>
                                    <div>个人简介：</div>
                                    <div>发表的文章：</div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="成果">
                                <div style="height:405px">暂无数据1</div>
                            </el-tab-pane>
                            <el-tab-pane label="学者文章">
                                <div style="height:405px">暂无数据2</div>
                            </el-tab-pane>
                        </el-tabs>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
        <el-footer height="60px">
          MeiYI图书馆
        </el-footer>
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
  .el-header,.el-footer{
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
  .scholarLeft{
      height: 500px;
      background: #fff;
  }
  .scholarLeft img{
      border-radius: 50%;
  }
  .attention{
      display: flex;
      justify-content: space-around;
  }
  .attention div{
      width: 80px;
      height: 30px;
      line-height: 30px;
      background: rgb(39, 159, 240);
      border-radius: 10px;
      margin-top: 10px;
      cursor: pointer;
  }
  .scholarName{
      padding-top: 20px;
      padding-bottom: 20px;
  }
  .attentionDetails{
      margin-top: 20px;
  }
  .attentionDetails div{
      margin-top: 20px;
      text-align: left;
      padding-left: 20px;
  }
  .personPage{
      text-align: left;
      height: 405px;
  }
  .personPage div{
      margin:30px 20px ;
  }

</style>