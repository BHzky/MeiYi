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
        </el-main>
          <el-row>
            <el-col :span="24" class="hidden-sm-and-down">
            <!-- <div id="app"> -->
                <header class="header" :class="headertop=='#headertop'?'headertop':''">
                    <a href="javascript:;" :class="active == '#home' ? 'active' : ''" @click="toTarget('#home')">概括</a>
                    <a href="javascript:;"  :class="active == '#team' ? 'active' : ''"  @click="toTarget('#team')">介绍</a>
                    <a href="javascript:;"  :class="active == '#contact' ? 'active' : ''"  @click="toTarget('#contact')">背景</a>
                    <a href="javascript:;"  :class="active == '#join' ? 'active' : ''"  @click="toTarget('#join')">说明</a>
                        <el-link type="primary" class="provide">主要链接</el-link>
                        <el-link type="primary" class="provide" @click="skip">访问新的连接</el-link>
                </header>
            </el-col>
            <el-col :span="24" class="hidden-sm-and-down">
                <div id="home">
                        概括
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念</div>
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念</div>
                </div>
            </el-col>
            <el-col :span="24" class="hidden-sm-and-down">
                <div id="team">
                    介绍
                </div>
            </el-col>
            <el-col :span="24" class="hidden-sm-and-down">
                <div id="contact">
                    背景
                </div>
            </el-col>
            <el-col :span="24" class="hidden-sm-and-down">
                <div id="join">
                    说明
                </div>
            </el-col>
            <!-- </div> -->
            <!-- </el-col> -->
            <el-col :span="24" class="hidden-md-and-up">
              <!-- <div id="app"> -->
                <el-col :span="24">
                  <div class="mdHeader">
                      <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                          SELECT<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item @click.native="toTarget1('#home1')">概括</el-dropdown-item>
                          <el-dropdown-item @click.native="toTarget1('#team1')">介绍</el-dropdown-item>
                          <el-dropdown-item @click.native="toTarget1('#contact1')">背景</el-dropdown-item>
                          <el-dropdown-item @click.native="toTarget1('#join1')">说明</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                      <!-- <a href="javascript:;" :class="active == '#home' ? 'active' : ''" @click="toTarget('#home')">概括111</a>
                      <a href="javascript:;"  :class="active == '#team' ? 'active' : ''"  @click="toTarget('#team')">介绍</a>
                      <a href="javascript:;"  :class="active == '#contact' ? 'active' : ''"  @click="toTarget('#contact')">背景</a>
                      <a href="javascript:;"  :class="active == '#join' ? 'active' : ''"  @click="toTarget('#join')">说明</a> -->
                     
                  </div>
                </el-col>
                <el-col :span="24">
                  <div id="home1">
                          概括
                          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念</div>
                          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念</div>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div id="team1">
                      介绍
                  </div>
                </el-col>
                <el-col :span="24">
                  <div id="contact1">
                      背景
                  </div>
                </el-col>
                <el-col :span="24">
                  <div id="join1">
                      说明
                  </div>
                </el-col>
                <el-col :span="24">
                 <div class="newpage">
                          <el-link type="primary" class="provide">主要链接</el-link>
                          <el-link type="primary" class="provide" @click="skip">访问新的连接</el-link>
                 </div>
                <!-- </div> -->
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
import {mapState} from "vuex"
export default {
 data() {
      return {
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
            console.log(target)
            this.active1 = target
            let toElement = document.querySelector(target);
            // let container = document.querySelector('#app');
            toElement.scrollIntoView(this.scrollIntoViewOptions);
            // Velocity(toElement, 'scroll', {
            //     container: container, 
            //     duration: 500, 
            //     offset: -60, 
            //     easing: 'ease-out'
            // });
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
            console.log(scrolled,"11")
            
            if(scrolled>100 && this.screenWidth>=992){
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
          ...mapState([
          "show",
        //   "showdata"
        ]),
        showdata:{
            get (){
                return this.$store.state.showdata
            },
            set(val){
                this.$store.state.showdata=val
            }
        }
      },
      updated(){
        //   this.onScroll()
        console.log(document.body.clientWidth,"wwwwwww")
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
    /* font-size: 40px; */
    /* text-align: center; */
    /* line-height: 160px; */
    /* height: 250px; */
  }
#home,#team,#contact,#join{
  width: 70%;
  height: 500px;
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
#home1,#team1,#contact1,#join1{
  width: 80%;
  height: 500px;
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
    /* height: 300px; */
    /* position: fixed;  */
    /* top: 210px; */
    /* left: 0px; */
    /* z-index: 1; */
    background: rgb(245, 244, 244);
    display: flex;
    /* flex-direction: column; */
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

</style>