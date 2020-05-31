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
                    <el-col :span="4" :offset="3" class="hidden-sm-and-down">
                        <div class="scholarLeft">
                            <img :src="headSculpture[0].img" alt="">
                            <div class="scholarName">{{headSculpture[0].author}}</div>
                            <div class="attention">
                                <div @click="attention">{{scholarAttention}}</div>
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
                     <el-col :span="24" :offset="0"  class="hidden-md-and-up">
                        <div class="scholarLeft">
                            <img :src="headSculpture[0].img" alt="">
                            <div class="scholarName">{{headSculpture[0].author}}</div>
                            <div class="attention">
                                <div @click="attention">{{scholarAttention}}</div>
                                <div>分享</div>
                            </div>
                            <div class="mdattentionDetails">
                                <div>科研贡献:1111</div>
                                <!-- <div>1111</div> -->
                                <div>科研文献数量:{{2}}篇</div>
                                <!-- <div>{{2}}篇</div> -->
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12" :offset="1" class="hidden-sm-and-down">
                        <el-tabs type="border-card">
                            <el-tab-pane label="个人主页">
                                <div class="personPage">
                                    <div>姓名：{{headSculpture[0].author}}</div>
                                    <div>获得荣誉：{{headSculpture[0].title}}</div>
                                    <div>个人简介：{{headSculpture[0].abstract}}</div>
                                    <div>发表的文章：{{headSculpture[0].title}}</div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="成果">
                                <div style="margin-top:100px">{{headSculpture[0].introduce}}</div>
                            </el-tab-pane>
                            <el-tab-pane label="学者文章">
                                <div style="height:405px">暂无数据2</div>
                            </el-tab-pane>
                        </el-tabs>
                    </el-col>
                    <el-col :span="24" :offset="0" class="hidden-md-and-up" style="margin-top:30px">
                        <el-tabs type="border-card">
                            <el-tab-pane label="个人主页">
                                <div class="mdpersonPage">
                                    <div>姓名：{{headSculpture[0].author}}</div>
                                    <div>获得荣誉：{{headSculpture[0].title}}</div>
                                    <div>个人简介：{{headSculpture[0].abstract}}</div>
                                    <div>发表的文章：{{headSculpture[0].title}}</div>
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
import {collectAdd} from '../../assets/js/apis/scholar'
export default {
    data (){
        return {
            tabPosition: 'top',
            scholarAttention:"关注"
            
        }
    },
    methods:{
        ...mapActions("scholar",[
          "disGetScholar",
          'disGetall'
      ]),
      attention(){
          console.log(11)
          if(this.scholarAttention==="关注"){
              this.scholarAttention="已关注"
              collectAdd().then((res)=>{
                  console.log(res,"zhang")
              })
          }else{
              this.scholarAttention="关注"
          }
      }
    },
    created(){
        
    },
    mounted(){
        this.disGetScholar()
        this.disGetall();
        console.log(this.scholarAlldetails,"09099")
        // console.log(this.scholarData,"9090")
    },
    computed:{
        ...mapState('scholar',[
          "scholarData",
          'scholarAll',
          'scholarAlldetails'
        ]),
        headSculpture(){
            let data=this.scholarAlldetails.filter((elem,i,arr)=>{
              return elem.referId == this.$route.query.value
            })
            return data 
        }
    },
    updated(){
        console.log(this.headSculpture,"00")
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
  .mdattentionDetails{
      margin-top: 20px;
  }
  .mdattentionDetails div{
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
  .mdpersonPage{
      text-align: left;
      height: 605px;
  }
  .personPage div{
      margin:30px 20px ;
  }
  .mdpersonPage div{
      margin:30px 20px ;
  }

</style>