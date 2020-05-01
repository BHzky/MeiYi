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
                    <el-col :span="5" :offset="4">
                        <!-- <div class="title">{{getData}}</div> -->
                        <img :src="imgData" alt="">
                    </el-col>
                    <el-col :span="6" :offset="2">
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
　　枪械，大炮，巨舰，飞空艇，差分机；魔药，占卜，诅咒，倒吊人，封印物……光明依旧照耀，神秘从未远离，这是一段“愚者”的传说。
                            </div>
                        </div>
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
                        <!-- <div class="itr">
                            第二，推动中国特色社会主义制度自我完善和发展，必须与时俱进、改革创新。习近平总书记指出：
                            “制度自信不是自视清高、自我满足，更不是裹足不前、固步自封，而是要把坚定制度自信和不断改革
                            创新统一起来，在坚持根本政治制度、基本政治制度的基础上，不断推进制度体系完善和发展。”古人讲
                            ：“道有因有循，有革有化。因而循之，与道神之。革而化之，与时宜之。”我们党立志于中华民族千秋大
                            业，就必须在保持中国特色社会主义制度和国家治理体系稳定性和延续性的基础上，不断增强其发展性和创
                            新性，努力构建既成熟定型又永葆生机活力的国家制度和国家治理体系，为确保中国特色社会主义事业长盛不
                            衰、实现中华民族伟大复兴提供牢靠持久的制度保证。一方面，国家制度和国家治理体系必须随着时代的发展和
                            人类思想进步而不断进步。另一方面，制度供给能力决定着国家治理能力。当今世界正经历百年未有之大变局，
                            我国正处在实现中华民族伟大复兴关键时期，国际形势复杂多变，国内改革发展稳定、内政外交国防、治党治国
                            治军等任务之重前所未有，风险挑战之多前所未有。“天下之势不盛则衰，天下之治不进则退。”我们要打赢防范化
                            解重大风险攻坚战，迫切需要加快健全系统完备、科学规范、运行有效的制度体系，加强系统治理、依法治理、综
                            合治理、源头治理，更多依靠制度防范化解各种风险挑战。还要看到，当今国际竞争归根到底是制度的竞争。制度强
                            则国家强。制度的性质、制度的架构、制度的运行、制度的活力，是决定一个国家发展前途和命运的根本所在。我们
                            要在国际竞争中赢得优势、赢得主动、赢得未来，既要坚持好、巩固好我们已经建立并且经过长期实践检验的根本制
                            度、基本制度、重要制度，同时也要随着实践的发展继续全面深化改革，积极推进制度创新，不断完善各方面制度
                            ，充分发挥我们的制度优势，切实把制度优势转化为治理效能，努力创造出比其他制度更高的效率、更强的竞争力、更持久的生机活力。
                        </div>
                        <div class="itr">
                            第三，推动中国特色社会主义制度自我完善和发展，需要抓紧制定国家治理体系和治理能力现代化急需的制度、
                            满足人民对美好生活新期待必备的制度。党和国家在制度建设和治理能力建设上已经取得历史性成就，初步形成了
                            具有鲜明中国特色的国家制度和国家治理体系，同时我们的制度和治理体系还不够完善，还存在不少短板和薄弱环节，
                            还不能完全适应实践发展要求，特别是从中华民族千秋大业的战略高度看，我们在制度建设和治理能力建设上仍然任重道远。
                            党中央对于从现在起到本世纪中叶我国国家制度和国家治理体系建设作出明确战略安排，强调要科学谋划、精心组织，
                            要远近结合、整体推进。当前，需要坚持问题导向，聚焦国家制度和国家治理体系的薄弱环节和突出短板，认真检视在坚持
                            和完善党的领导制度体系、人民当家作主制度体系、法治体系、政府治理体系、基本经济制度、繁荣发展社会主义先进文化
                            的制度、民生保障制度、社会治理制度、生态文明制度体系、党对人民军队的绝对领导制度、“一国两制”制度体系、独立
                            自主的和平外交政策、党和国家监督体系等方面，还有哪些亟待完善和发展的地方，加强制度完善和制度创新，提高国家
                            治理体系和治理能力现代化水平 。只有这样，才能更好坚持道路自信、理论自信、制度自信、文化自信，才能更好满足人民群众对美好生活的新期待。
                        </div> -->
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
      line-height: 100px;
      text-align: left;
  }
  .opus{
      line-height: 30px;
      text-align: left;
      border: 1px solid #555;
      padding: 10px;
  }

</style>