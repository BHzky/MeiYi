<template>
    <div>
      <el-container>
        <el-header fixed :height="topheight">MeiYI图书馆
          <el-row :gutter="20">
            <el-col :span="24" class="hidden-sm-and-down">
              <div class="littleTitle" v-show="topheight=='190px'">
                  <div>Event Probability Mask (EPM) and Event Denoising Convolutional</div>
                  <div>NeuralNetwork (EDnCNN) for Neuromorphic Cameras</div>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main >
          <el-row>
            <el-col :span="24" class="hidden-sm-and-down">
            <div style="background:#000;height:250px;">
                <div class="itr">
                      <div>Event Probability Mask (EPM) and Event</div>
                      <div>Denoising Convolutional NeuralNetwork</div>
                      <div>(EDnCNN) for Neuromorphic Cameras</div>
                </div>
            </div>
            </el-col>
            <el-col :span="24" class="hidden-md-and-up">
            <div style="background:#000;height:350px;">
                <div class="itr">
                      <div>Event Probability Mask (EPM) and Event</div>
                      <div>Denoising Convolutional NeuralNetwork</div>
                      <div>(EDnCNN) for Neuromorphic Cameras</div>
                </div>
            </div>
            </el-col>
          </el-row>
        </el-main >
          <el-row>
            <el-col :span="24" class="hidden-sm-and-down">
            <!-- <div id="app"> -->
                <header class="header" :class="headertop=='#headertop'?'headertop':''">
                    <a href="javascript:;" :class="active == '#home' ? 'active' : ''" @click="toTarget('#home')">概要</a>
                    <a href="javascript:;"  :class="active == '#team' ? 'active' : ''"  @click="toTarget('#team')">文章内容</a>
                    <a href="javascript:;"  :class="active == '#contact' ? 'active' : ''"  @click="toTarget('#contact')">相关推荐</a>
                    <a href="javascript:;"  :class="active == '#join' ? 'active' : ''"  @click="toTarget('#join')">评论</a>
                        <el-link type="primary" class="provide">主要链接</el-link>
                        <el-link type="primary" class="provide" @click="skip">访问新的连接</el-link>
                </header>
            </el-col>
            <el-col :span="24" class="hidden-sm-and-down">
                <div id="home">
                        <span class="subTitle">概要</span>
                        <div>{{abstractData[0]}}</div>
                        <div>{{abstractData[0]}}</div>
                </div>
            </el-col>
            <el-col :span="24" class="hidden-sm-and-down">
                <div id="team">
                    <span class="subTitle">文章内容</span>
                    <div>第一章：{{newclassifiedDisplay[0]}}</div>
                    <div>第二章：{{newclassifiedDisplay[0]}}</div>
                    <div>第三章：{{newclassifiedDisplay[0]}}</div>
                    <div>第四章：{{newclassifiedDisplay[0]}}</div>
                    <div>第五章：{{newclassifiedDisplay[0]}}</div>
                    <div>第六章：{{newclassifiedDisplay[0]}}</div>
                    <div>第七章：{{newclassifiedDisplay[0]}}</div>
                    <div>第八章：{{newclassifiedDisplay[0]}}</div>
                    <div>第九章：{{newclassifiedDisplay[0]}}</div>
                    <div>第十章：{{newclassifiedDisplay[0]}}</div>
                </div>
            </el-col>
            <el-col :span="24" class="hidden-sm-and-down">
                <div id="contact">
                    <span class="subTitle">相关推荐</span>
                    <div v-for="(value,i) of recommend" :key="i">
                        <!-- <span>来源：{{recommend[i].source}}</span> -->
                        <span>作者：{{recommend[i].author}}</span>
                        <span class="title">标题：{{recommend[i].title}}</span>
                        <span>时间：{{recommend[i].time}}</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="24" class="hidden-sm-and-down">
                <div id="join" >
                    <span class="subTitle">评论</span>
                    <template > 
                    <comment></comment>
                    </template> 
                </div>
            </el-col>
            <el-col :span="24" class="hidden-md-and-up">
                <el-col :span="24">
                  <div class="mdHeader">
                      <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                          SELECT<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item @click.native="toTarget1('#home1')">概要</el-dropdown-item>
                          <el-dropdown-item @click.native="toTarget1('#team1')">文章内容</el-dropdown-item>
                          <el-dropdown-item @click.native="toTarget1('#contact1')">相关推荐</el-dropdown-item>
                          <el-dropdown-item @click.native="toTarget1('#join1')">评论</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div id="home1">
                        <span class="subTitle">概要</span>
                        <div>{{abstractData[0]}}</div>
                        <div>{{abstractData[0]}}</div>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div id="team1">
                        <span class="subTitle">文章内容</span>
                        <div>第一章：{{newclassifiedDisplay[0]}}</div>
                        <div>第二章：{{newclassifiedDisplay[0]}}</div>
                        <div>第三章：{{newclassifiedDisplay[0]}}</div>
                        <div>第四章：{{newclassifiedDisplay[0]}}</div>
                        <div>第五章：{{newclassifiedDisplay[0]}}</div>
                        <div>第六章：{{newclassifiedDisplay[0]}}</div>
                        <div>第七章：{{newclassifiedDisplay[0]}}</div>
                        <div>第八章：{{newclassifiedDisplay[0]}}</div>
                        <div>第九章：{{newclassifiedDisplay[0]}}</div>
                        <div>第十章：{{newclassifiedDisplay[0]}}</div>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div id="contact1">
                       <span class="subTitle">相关推荐</span>
                       <div v-for="(value,i) of recommend" :key="i">
                        <!-- <span>来源：{{recommend[i].source}}</span> -->
                       <span>作者：{{recommend[i].author}}</span>
                       <span class="title">标题：{{recommend[i].title}}</span>
                       <span>时间：{{recommend[i].time}}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div id="join1">
                    <span class="subTitle">评论</span>
                    <template > 
                    <comment></comment>
                    </template> 
                  </div>
                </el-col>
                <el-col :span="24">
                 <div class="newpage">
                          <el-link type="primary" class="provide">主要链接</el-link>
                          <el-link type="primary" class="provide" @click="skip">访问新的连接</el-link>
                 </div>
                </el-col>
                <el-col :span="24">
                  <!-- <template>
                  <comment></comment>
                  </template> -->
                </el-col>
            </el-col>
          </el-row>
          
        <el-footer height="120px">
          <div class="footmeiyi">MEIYI</div>
        </el-footer>
      </el-container>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
import comment from "./comment.vue"
export default {
  components: {
      comment
    },
 data() {
      return {
          // recommend:"",
          screenWidth: document.body.clientWidth,
          active: '#home',
          active1: '#home1',
          headertop:"",
          topheight:"",
          scrollIntoViewOptions:{
              block:"start",
              behavior:"smooth"
          }

        }
    },
    methods:{ 
      ...mapActions("scientific",[
          "disConcrete",
          "disGetDataList",
      ]),
       
        toTarget(target){
            console.log(target)
            this.active = target
            let toElement = document.querySelector(target);
            let container = document.querySelector('#app');
            toElement.scrollIntoView(this.scrollIntoViewOptions);
            // Velocity(toElement, 'scroll', {
            //     container: container, 
            //     duration: 500, 
            //     offset: -60, 
            //     easing: 'ease-out'
            // });
            },
        toTarget1(target){
            // console.log(target)
            this.active1 = target
            let toElement = document.querySelector(target);
            toElement.scrollIntoView(this.scrollIntoViewOptions);
            },
        onScroll () {
            let scrolled =  document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            if (scrolled < this.distance_team) {
                this.active = "#home"
            } else if (scrolled >= this.distance_team && scrolled < this.distance_contact) {
                this.active = "#team"
            } else if (scrolled >= this.distance_contact && scrolled < this.distance_join) {
                this.active = "#contact"
            } else {
                this.active = "#join"
            }
            if(scrolled>100 && this.screenWidth>=992){
              // console.log("oweoir")
                this.topheight="190px"
                this.headertop="#headertop"
            }else{
                this.topheight=""
                this.headertop=""
            }
            },
         skip(){
              this.$router.push({path: '/detailsTwo'});
            }, 
    },
    watch:{
        //监听页面宽度
        screenWidth(val){
          // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
          if(!this.timer){
              // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
              this.screenWidth = val
              this.timer = true
              let that = this
              setTimeout(function(){
                  // 打印screenWidth变化的值
                  console.log(that.screenWidth)
                  if(that.screenWidth<=992){
                    that.topheight=""
                  }
                  that.timer = false
              },400)
          }
      }
    },
    created(){
        this.disConcrete();
        this.disGetDataList();
    },
    mounted(){
         // 一次性计算赋值，减少滚动计算节点位置次数
        this.distance_team = document.querySelector('#team').offsetTop - 60
        this.distance_contact = document.querySelector('#contact').offsetTop - 60
        this.distance_join = document.querySelector('#join').offsetTop - 60
        this.$nextTick(function () {
            window.addEventListener('scroll', this.onScroll)
        })
        //监听页面宽度
         const that = this
         window.onresize = () => {
              return (() => {
                  window.screenWidth = document.body.clientWidth
                  that.screenWidth = window.screenWidth
              })()
        }
    },
    computed:{
          ...mapState('scientific',[
            "concrete",
            "allData",
        ]),
          showdata(){
            let data=this.concrete.filter((elem,i,arr)=>{
             return elem.referId == this.$route.query.referId
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
                return elem.content
              })
          },
          related(){
            let data=this.allData.filter((elem,i,arr)=>{
             return elem.referId == this.$route.query.referId
          })
            return data
          },
          recommend(){
            let data=this.allData.filter((elem,i,arr)=>{
             return elem.source == this.related[0].source
          })
            return data
          },
      },
      updated(){
          // console.log(this.related,"kkkkk")
          // console.log(this.recommend,"0000")
          // console.log(this.newclassifiedDisplay,"9999")
        
      },
}
</script>
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #fff;
    line-height: 60px;
    background: #000;
    z-index: 999;
    font-size: 20px;
  }
  .el-header .littleTitle{
      line-height: 40px;
      padding-bottom: 20px;
      font-size: 15px;
  }
  .el-header{position: fixed;width: 100%}
  .el-main {
    background-color: #fff;
    color: #fff;
    background: #000;
  }
#home,#team,#contact,#join{
  width: 70%;
  /* height: 500px; */
  color: #000;
  font-size: 15px;
  /* text-align: center; */
  line-height: 30px;
  margin-left:300px;
  padding:20px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  position: relative;
}
#join{
  border-bottom: 0px solid ;
}
.subTitle{
  font-size:30px
}
#home1,#team1,#contact1,#join1{
  width: 80%;
  /* height: 500px; */
  color: #000;
  font-size: 15px;
  /* text-align: center; */
  line-height: 30px;
  /* margin-left:300px; */
  padding:10px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin: auto;
  /* position: relative; */
}
.content{
   width: 80%; 
   margin-left:200px;
   margin-top: 100px;
}
#home{
  /* background: tomato; */
  margin-top: 100px;
}
#team{
  /* background: deepskyblue; */
}
#contact{
  /* background: orange; */
}
#join{
  /* background: lightgreen; */
}
.header{
    width: 200px;
    height: 300px;
    position: fixed; 
    top: 210px;
    left: 0px;
    z-index: 1;
    background: #fff;
    display: flex;
    flex-direction: column;
    display: -webkit-flex;
    justify-content: center;
    margin-top:120px
}
.mdHeader{
    width: 90%;
    margin: auto;
    background: rgb(245, 244, 244);
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    margin-top:40px;
    margin-bottom: 40px;
    height: 40px;
    line-height: 40px;
    border: 1px solid rgb(245, 244, 244);
}
.header .provide{
  border: 1px solid rgb(49, 192, 228);width: 150px;margin-left: 50px;height: 20px;line-height: 20px;
  background:rgb(49, 192, 228) ;color: #fff;padding: 2px;
  }
.header .provide:last-child{margin-top: 10px;background: #fff;color:rgb(49, 192, 228) ;}
.headertop{height:100px}
.header a{
    width: 200px;
    height: 60px;
    display: block;
    text-align: center;
    line-height: 60px;
    color: #333333;
    text-decoration: none;
}
.header a:hover{color: dodgerblue;}
.header a.active{color: dodgerblue !important;}
.contentSon{height: 800px;}
.itr{padding-top:100px;font-size:30px;}
.itr>div:nth-child(2){margin-top:5px;margin-bottom: 5px;}
.newpage{display: flex;flex-direction: column;margin-top: 20px;margin-bottom: 20px;}
.newpage>.provide:last-child{border: 1px solid #000;width: 40%;margin:20px auto;height: 30px;}
.title{margin-left:10px;margin-right:10px}

</style>