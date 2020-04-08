<template>
    <div>
      <el-container>
        <el-header fixed>MeiYI图书馆</el-header>
        <el-main >
        </el-main>
            <el-row>
                <el-col :span="24" class="hidden-md-and-down">
                <!-- <div id="app"> -->
                    <header class="header">
                        <a href="javascript:;" :class="active == '#home' ? 'active' : ''" @click="toTarget('#home')">概括</a>
                        <a href="javascript:;"  :class="active == '#team' ? 'active' : ''"  @click="toTarget('#team')">介绍</a>
                        <a href="javascript:;"  :class="active == '#contact' ? 'active' : ''"  @click="toTarget('#contact')">背景</a>
                        <a href="javascript:;"  :class="active == '#join' ? 'active' : ''"  @click="toTarget('#join')">说明</a>
                    </header>
                </el-col>
                <el-col :span="24" class="hidden-md-and-down">
                    <div id="home">
                        <div class="title">概括</div>
                            <el-collapse v-model="activeNames" >
                                <el-collapse-item title="一致性 Consistency" name="1">
                                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                </el-collapse-item>
                                <el-collapse-item title="反馈 Feedback" name="2">
                                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                </el-collapse-item>
                                <el-collapse-item title="效率 Efficiency" name="3">
                                    <div>简化流程：设计简洁直观的操作流程；</div>
                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                </el-collapse-item>
                                <el-collapse-item title="可控 Controllability" name="4">
                                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                </el-collapse-item>
                            </el-collapse>
                    </div>
                </el-col>
                <el-col :span="24" class="hidden-md-and-down">
                    <div id="team">
                        <div class="title">介绍</div>
                        <el-collapse v-model="activeNames" >
                                <el-collapse-item title="一致性 Consistency" name="1">
                                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                </el-collapse-item>
                                <el-collapse-item title="反馈 Feedback" name="2">
                                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                </el-collapse-item>
                                <el-collapse-item title="效率 Efficiency" name="3">
                                    <div>简化流程：设计简洁直观的操作流程；</div>
                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                </el-collapse-item>
                                <el-collapse-item title="可控 Controllability" name="4">
                                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                </el-collapse-item>
                            </el-collapse>
                    </div>
                </el-col>
                <el-col :span="24" class="hidden-md-and-down">
                    <div id="contact">
                        <div class="title">背景</div>
                    <el-collapse v-model="activeNames" >
                                <el-collapse-item title="一致性 Consistency" name="1">
                                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                </el-collapse-item>
                                <el-collapse-item title="反馈 Feedback" name="2">
                                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                </el-collapse-item>
                                <el-collapse-item title="效率 Efficiency" name="3">
                                    <div>简化流程：设计简洁直观的操作流程；</div>
                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                </el-collapse-item>
                                <el-collapse-item title="可控 Controllability" name="4">
                                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                </el-collapse-item>
                            </el-collapse>
                    </div>
                </el-col>
                <el-col :span="24" class="hidden-md-and-down">
                    <div id="join">
                        <div class="title">说明</div>
                        <el-collapse v-model="activeNames" >
                                <el-collapse-item title="一致性 Consistency" name="1">
                                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                </el-collapse-item>
                                <el-collapse-item title="反馈 Feedback" name="2">
                                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                </el-collapse-item>
                                <el-collapse-item title="效率 Efficiency" name="3">
                                    <div>简化流程：设计简洁直观的操作流程；</div>
                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                </el-collapse-item>
                                <el-collapse-item title="可控 Controllability" name="4">
                                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                </el-collapse-item>
                            </el-collapse>
                    </div>
                </el-col>
                <el-col :span="24" class="hidden-lg-and-up">
                    <div id="home1">
                        <div class="title">概括</div>
                            <el-collapse v-model="activeNames" >
                                <el-collapse-item title="一致性 Consistency" name="1">
                                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                </el-collapse-item>
                                <el-collapse-item title="反馈 Feedback" name="2">
                                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                </el-collapse-item>
                                <el-collapse-item title="效率 Efficiency" name="3">
                                    <div>简化流程：设计简洁直观的操作流程；</div>
                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                </el-collapse-item>
                                <el-collapse-item title="可控 Controllability" name="4">
                                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                </el-collapse-item>
                            </el-collapse>
                    </div>
                </el-col>
                <el-col :span="24" class="hidden-lg-and-up">
                    <div id="team1">
                        <div class="title">介绍</div>
                        <el-collapse v-model="activeNames" >
                                <el-collapse-item title="一致性 Consistency" name="1">
                                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                </el-collapse-item>
                                <el-collapse-item title="反馈 Feedback" name="2">
                                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                </el-collapse-item>
                                <el-collapse-item title="效率 Efficiency" name="3">
                                    <div>简化流程：设计简洁直观的操作流程；</div>
                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                </el-collapse-item>
                                <el-collapse-item title="可控 Controllability" name="4">
                                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                </el-collapse-item>
                            </el-collapse>
                    </div>
                </el-col>
                <el-col :span="24" class="hidden-lg-and-up">
                    <div id="contact1">
                        <div class="title">背景</div>
                    <el-collapse v-model="activeNames" >
                                <el-collapse-item title="一致性 Consistency" name="1">
                                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                </el-collapse-item>
                                <el-collapse-item title="反馈 Feedback" name="2">
                                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                </el-collapse-item>
                                <el-collapse-item title="效率 Efficiency" name="3">
                                    <div>简化流程：设计简洁直观的操作流程；</div>
                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                </el-collapse-item>
                                <el-collapse-item title="可控 Controllability" name="4">
                                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                </el-collapse-item>
                            </el-collapse>
                    </div>
                </el-col>
                <el-col :span="24" class="hidden-lg-and-up">
                    <div id="join1">
                        <div class="title">说明</div>
                        <el-collapse v-model="activeNames" >
                                <el-collapse-item title="一致性 Consistency" name="1">
                                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                </el-collapse-item>
                                <el-collapse-item title="反馈 Feedback" name="2">
                                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                </el-collapse-item>
                                <el-collapse-item title="效率 Efficiency" name="3">
                                    <div>简化流程：设计简洁直观的操作流程；</div>
                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                </el-collapse-item>
                                <el-collapse-item title="可控 Controllability" name="4">
                                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                </el-collapse-item>
                            </el-collapse>
                    </div>
                </el-col>
                <!-- </div> -->
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
          activeNames: ['1'],
          active: '#home',
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
            }
    },
    watch:{
    },
    mounted(){
         // 一次性计算赋值，减少滚动计算节点位置次数
        this.distance_team = document.querySelector('#team').offsetTop - 60
        this.distance_contact = document.querySelector('#contact').offsetTop - 60
        this.distance_join = document.querySelector('#join').offsetTop - 60
        this.$nextTick(function () {
            window.addEventListener('scroll', this.onScroll)
        })
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
  /* height: 500px; */
  color: #000;
  font-size: 15px;
  /* text-align: center; */
  line-height: 30px;
  margin-left:300px;
  padding:20px;
  /* border-top: 1px solid #000; */
  /* border-bottom: 1px solid #000; */
  position: relative;
  margin-bottom: 100px;
}
#home1,#team1,#contact1,#join1{
  margin: auto;
  width: 80%;
  /* height: 500px; */
  color: #000;
  font-size: 15px;
  /* text-align: center; */
  line-height: 30px;
  /* margin-left:300px; */
  padding:20px;
  /* border-top: 1px solid #000; */
  /* border-bottom: 1px solid #000; */
  position: relative;
  margin-bottom: 100px;
}
#home{
  /* background: tomato; */
  margin-top: 100px;
}
#home1{
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
    height: 150px;
    position: fixed; 
    top:0px;
    left: 100px;
    z-index: 1;
    background: #fff;
    display: flex;
    flex-direction: column;
    display: -webkit-flex;
    justify-content: center;
    margin-top:120px
}
.header a{
    width: 140px;
    height: 40px;
    display: block;
    text-align: center;
    line-height: 40px;
    color: #333333;
    text-decoration: none;
    text-align: left;
    padding-left: 20px;
}
.header a:hover{color: dodgerblue;}
.header a.active{color: dodgerblue !important;background: rgb(236, 236, 236);text-align: left;padding-left: 20px;border-radius: 2px;}
.title{margin-top: -60px;margin-bottom: 20px;}

</style>