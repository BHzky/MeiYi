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
                                <el-breadcrumb-item>概括页</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </el-col>
                    <el-col :span="5" :offset="4" class="hidden-sm-and-down">
                        <img :src="imgData" alt="" style="width:100%">
                    </el-col>
                    <el-col :span="24" :offset="0" class="hidden-md-and-up">
                        <img :src="imgData" alt="" style="width:100%">
                    </el-col>
                    <el-col :span="7" :offset="1" class="hidden-sm-and-down">
                        <div class="imgLeft">
                            <!-- <div>探索科研的宇宙</div> -->
                            <div>
                                标签：{{getData}}
                            </div>
                            <div>
                                <el-button type="primary" @click="read">在线阅读</el-button>
                                <el-button type="primary">pdf</el-button>
                            </div>
                            <div class="opus">
                                {{abstractData[0]}}
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="24" :offset="0" class="hidden-md-and-up">
                        <!-- <div class="SMimgLeft"> -->
                            <!-- <div>探索科研的宇宙</div> -->
                            <div style="margin:20px 0;">
                                标签：{{getData}}
                            </div>
                            <div style="margin:20px 0;">
                                <el-button type="primary" @click="read">在线阅读</el-button>
                                <el-button type="primary">pdf</el-button>
                            </div>
                            <div class="opus">
                                {{abstractData[0]}}
                            </div>
                        <!-- </div> -->
                    </el-col>
                    <el-col :span="16" :offset="4">
                        <div class="itr">
                            {{newclassifiedDisplay[0]}}
                        </div>
                        <div class="itr">
                            {{newclassifiedDisplay[0]}}
                        </div>
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
            tabPosition: 'top',
            getData:"Int J Comput Appl",
            getId:"411"
        }
    },
    methods:{
        ...mapActions("scientific",[
            "disConcrete",
            "disGetDataList",
        ]), 
      read(){
          this.$router.push({
              path:"/likeMoreDetails",
              query:{data:this.getId}
          })
      }
    },
    created(){
        this.disConcrete();
        this.disGetDataList();
    },
    mounted(){
        
        console.log(this.allData,"xiaoluc")
        if(this.$route.query.uid==='/img/like/like1.jpg'){
            this.getData="CIKM"
            this.getId="411"
        }else if(this.$route.query.uid==='/img/like/like2.jpg'){
            this.getData="IEEE Access"
            this.getId="412"
        }else if(this.$route.query.uid==='/img/like/like3.jpg'){
            this.getData="Scientometrics"
            this.getId="413"
        }else if(this.$route.query.uid==='/img/like/like4.jpg'){
            this.getData="ACM SIGIR forum"
            this.getId="414"
        }else if(this.$route.query.uid==='/img/like/like5.jpg'){
            this.getData="The adaptive web"
            this.getId="415"
        }else if(this.$route.query.uid==='/img/like/like6.jpg'){
            this.getData="PLoS ONE"
            this.getId="416"
        }else if(this.$route.query.uid==='/img/like/like7.jpg'){
            this.getData="IOSR Journal"
            this.getId="417"
        }else if(this.$route.query.uid==='/img/like/like8.jpg'){
            this.getData="Scientometrics"
            this.getId="418"
        }else if(this.$route.query.uid==='/img/like/like9.jpg'){
            this.getData="Magnetism"
            this.getId="419"
        }else if(this.$route.query.uid==='/img/like/like10.jpg'){
            this.getData="Stochastic Gradient"
            this.getId="420"
        }else if(this.$route.query.uid==='/img/like/like11.jpg'){
            this.getData="Int J Comput Appl"
            this.getId="421"
        }else if(this.$route.query.uid==='/img/like/like12.jpg'){
            this.getData="ACM SIGIR forum"
            this.getId="422"
        }
    },
    computed:{
        ...mapState('scientific',[
            "concrete",
            "allData",
        ]),
        imgData(){
            return this.$route.query.uid
        },
        showdata(){
            let data=this.allData.filter((elem,i,arr)=>{
              return elem.source == this.getData
            })
            return data
          },
           //概要
          abstractData(){
             return  this.showdata.map((elem)=>{
                return elem.abstract
              })
          },
          //内容
          newclassifiedDisplay(){
            return  this.showdata.map((elem)=>{
                return elem.introduce
              })
          },
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
  .title{
      font-size: 30px;
  }
  .itr{
      /* height: 200px; */
      line-height:20px;
      text-align: left;
      margin-top: 20px;
  }
  .imgLeft{
      line-height: 60px;
      text-align: left;
  }
  .SMimgLeft{
      display: flex;
  }
  .opus{
      line-height: 30px;
      text-align: left;
      border: 1px solid #555;
      padding: 10px;
      /* width: 600px; */
      height: 160px;
      overflow: hidden;
  }

</style>