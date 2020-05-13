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
                                <el-breadcrumb-item>猜你喜欢</el-breadcrumb-item>
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
                                标签：科研 宇宙
                            </div>
                            <div>
                                <el-button type="primary">在线阅读</el-button>
                                <el-button type="primary">pdf</el-button>
                            </div>
                            <div class="opus">
                                作品介绍：
                                蒸汽与机械的浪潮中，谁能触及非凡？历史和黑暗的迷雾里，又是谁在耳语？我从诡秘中醒来，睁眼看见这个世界：
　　                            枪械，大炮，巨舰，飞空艇，差分机；魔药，占卜，诅咒，倒吊人，封印物……光明依
                                旧照耀，神秘从未远离，这是一段“愚者”的传说。
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="24" :offset="0" class="hidden-md-and-up">
                        <!-- <div class="SMimgLeft"> -->
                            <!-- <div>探索科研的宇宙</div> -->
                            <div style="margin:20px 0;">
                                标签：科研 宇宙
                            </div>
                            <div style="margin:20px 0;">
                                <el-button type="primary">在线阅读</el-button>
                                <el-button type="primary">pdf</el-button>
                            </div>
                            <div class="opus">
                                作品介绍：
                                蒸汽与机械的浪潮中，谁能触及非凡？历史和黑暗的迷雾里，又是谁在耳语？我从诡秘中醒来，睁眼看见这个世界：
　　                            枪械，大炮，巨舰，飞空艇，差分机；魔药，占卜，诅咒，倒吊人，封印物……光明依
                                旧照耀，神秘从未远离，这是一段“愚者”的传说。
                            </div>
                        <!-- </div> -->
                    </el-col>
                    <el-col :span="16" :offset="4">
                        <div class="itr">
                            《决定》提出：“推进全面深化改革，既要保持中国特色社会主义制度和国家治理体系的稳定性和延续性，
                            又要抓紧制定国家治理体系和治理能力现代化急需的制度、满足人民对美好生活新期待必备的制度，
                            推动中国特色社会主义制度不断自我完善和发展、永葆生机活力。”这一重要论述，对推进全面深化改革，
                            推动中国特色社会主义制度不断完善和发展、永葆生机活力，提出了以下3个方面的明确要求。
                        </div>
                        <div class="itr">
                            第一，推动中国特色社会主义制度不断完善和发展、永葆生机活力，首先要坚持和巩固我国的根本制度、基本制度、重要制度，
                            保持中国特色社会主义制度和国家治理体系的稳定性和延续性。经过新中国成立70年来的不断探索实践，已经形成了比较成熟定型的中国
                            特色社会主义制度体系，以及建立在这些制度基础上的经济体制、政治体制、文化体制、社会体制、生态文明体制等各方面具体制度。
                            这是我们坚持和完善国家制度和国家治理体系的根本基础和基本遵循。在实践中首先要坚持好、巩固好这些根本制度、基本制度、重要制度，
                            在此基础上，稳中求进，继续完善和发展中国特色社会主义制度，使之更加成熟更加定型，不断提高国家治理体系和治理能力现代化水平。
                            习近平总书记一再强调的决不能在根本性问题上犯颠覆性错误，很重要的一个方面就是决不能轻易动摇我们党和国家已有的制度根基，
                            更不能照搬照抄西方制度模式。正如习近平总书记强调的：“改什么、怎么改必须以是否符合完善和发展中国特色社会主义制度、
                            推进国家治理体系和治理能力现代化的总目标为根本尺度，该改的、能改的我们坚决改，不该改的、不能改的坚决不改。”
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
            getData:"中国科技论文精品在线"
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
        if(this.$route.query.uid===0){
            this.getData="中国科技论文精品在线"
        }else if(this.$route.query.uid===1){
            this.getData="每一科研相关报道"
        }else if(this.$route.query.uid===2){
            this.getData="关于改善科研现状"
        }else if(this.$route.query.uid===3){
            this.getData="让学习科研成为习惯"
        }
    },
    computed:{
        ...mapState('scholar',[
          "scholarData",
        ]),
        imgData(){
            return this.$route.query.uid
        }
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
  }

</style>