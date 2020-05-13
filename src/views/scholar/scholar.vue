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
                                <el-breadcrumb-item>学者页</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </el-col>
                    <el-col :span="6" :offset="3" class="hidden-sm-and-down">
                        <div class="itr">
                            <span>{{scholarData.length}}</span>
                            位学者入驻
                        </div>
                    </el-col>
                    <el-col :span="8" :offset="0" class="hidden-md-and-up">
                        <div class="itr">
                            <span>{{scholarData.length}}</span>
                            位学者入驻
                        </div>
                    </el-col>
                    <el-col :span="6" class="hidden-sm-and-down">
                        <div class="itr">
                            <span>{{scholarAll.length}}</span>
                            篇文章发表
                        </div>
                    </el-col>
                    <el-col :span="8" class="hidden-md-and-up">
                        <div class="itr">
                            <span>{{scholarAll.length}}</span>
                            篇文章发表
                        </div>
                    </el-col>
                    <el-col :span="6" class="hidden-sm-and-down">
                        <div class="itr">
                            <span>{{scholarData.length}}</span>
                            项自主研究成果
                        </div>
                    </el-col>
                    <el-col :span="8" class="hidden-md-and-up">
                        <div class="itr">
                            <span>{{scholarData.length}}</span>
                            项自主研究成果
                        </div>
                    </el-col>
                    <el-col :span="18" :offset="3" class="hidden-sm-and-down">
                        <div class="classify">
                            <div class="apply" @click="apply">申请入驻</div>
                        </div>
                    </el-col>
                    <el-col :span="20" :offset="1" class="hidden-md-and-up">
                        <div class="classify">
                            <div class="apply" @click="apply">申请入驻</div>
                        </div>
                    </el-col>
                    <el-col :span="24" class="hidden-sm-and-down">
                        <myCarousel>
                            <!-- <template slot-scope="a">
                                {{a}}
                            </template> -->
                        </myCarousel>
                    </el-col>
                    <el-col :span="20" :offset="2" class="hidden-md-and-up">
                        <myCarousel>
                        </myCarousel>
                    </el-col>
                    <el-col :span="10" :offset="3" class="hidden-sm-and-down">
                        <div class="famous"><i class="el-icon-s-custom" style="margin-right:10px"></i>知名学者</div>
                        <div class="honour">
                            <div class="honourLeft">
                                <div v-for="item in items" :key="item.name" @click="famous">
                                    <img :src="item.name" alt="">
                                    <div class="name-of-scholar">
                                        <div>学者</div>
                                        <div>{{scholarData[item.tag]}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="honourRight">
                                <div v-for="item in itemsTwo" :key="item.name">
                                    <img :src="item.name" alt="">
                                    <div class="name-of-scholar">
                                        <div>学者</div>
                                        <div>{{scholarData[item.tag]}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="24" :offset="0" class="hidden-md-and-up">
                        <div class="famous"><i class="el-icon-s-custom" style="margin-right:10px"></i>知名学者</div>
                        <div class="honour">
                            <div class="honourLeft">
                                <div class="Smfam" v-for="item in items" :key="item.name" @click="famous">
                                    <img :src="item.name" alt="">
                                    <div class="name-of-scholar">
                                        <div>学者</div>
                                        <div>{{scholarData[item.tag]}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="honourRight">
                                <div v-for="item in itemsTwo" :key="item.name">
                                    <img :src="item.name" alt="">
                                    <div class="name-of-scholar">
                                        <div>学者</div>
                                        <div>{{scholarData[item.tag]}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="7" :offset="1"  class="hidden-sm-and-down">
                        <div>
                            <div class="famous"><i class="el-icon-star-off" style="margin-right:10px"></i>学者风采</div>
                            <div class="elegant" v-for="(value,i) in 4" :key="i">
                                [期刊论文{{i+1}}]
                                <div>{{elegantAuthor[i]}}</div>
                                <!-- <div>author:{{i.author}}</div> -->
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="24" :offset="0" class="hidden-md-and-up">
                        <div>
                            <div class="famous"><i class="el-icon-star-off" style="margin-right:10px"></i>学者风采</div>
                            <div class="SMelegant" v-for="(value,i) in 4" :key="i">
                                [期刊论文{{i+1}}]
                                <div>{{elegantAuthor[i]}}</div>
                                <!-- <div>author:{{i.author}}</div> -->
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
        <el-footer height="160px">
          MeiYI图书馆
        </el-footer>
    </div>
</template>
<script>
import myCarousel from "./carousel"
import {mapState,mapActions} from "vuex"
export default {
    components:{
        myCarousel
    },
    data (){
        return {
            items: [
                {name: '/img/scholar/like10.jpg', tag: "1"},
                {name: '/img/scholar/like11.jpg', tag: "2"},
                {name: '/img/scholar/like12.jpg', tag: "3"},
                {name: '/img/scholar/like13.jpg', tag: "4"},
            ],
            itemsTwo: [
                {name: '/img/scholar/like1.jpg', tag: "5"},
                {name: '/img/scholar/like2.jpg', tag: "6"},
                {name: '/img/scholar/like3.jpg', tag: "7"},
                {name: '/img/scholar/like4.jpg', tag: "8"},
            ],

            
        }
    },
    methods:{
        ...mapActions("scholar",[
          "disGetScholar",
          'disGetall',
      ]),
        getRandomArrayElements(arr, count) {
            var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
            while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
            }
            return shuffled.slice(min);
        },
        apply(){
            this.$message({
                showClose: true,
                message: '功能维护中',
                type: 'warning'
            });
        },
        famous(){
            this.$router.push("scholarDetails")
        }
    },
    created(){
        
    },
    mounted(){
        this.disGetScholar();
        this.disGetall()
        console.log(this.scholarData,"9090")
        
    },
    computed:{
        ...mapState('scholar',[
          "scholarData",
          'scholarAll'
        ]),
        elegantData(){
            return this.getRandomArrayElements(this.scholarAll,4)
        },
        elegantAuthor(){
            return this.scholarAll.map((elem)=>{
                return elem.title
            })
        }
    },
    updated(){
        // console.log(this.elegantData,"5555")
        // console.log(this.elegantAuthor,"popi")
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
  .itr{
      width: 100%;
      background: #fff;
      height: 100px;
      line-height: 100px;
      /* margin: auto; */
      border-left: 1px dashed #555;
      border-right: 1px dashed #555;
  }
  .itr span{font-size: 30px;color: rgb(17, 130, 236);}
  .classify{
      width: 95%;
      background: #fff;
      margin: auto;
      height: 80px;
      margin-top: 20px;
      display: flex;
      padding: 20px;
  }
  .apply{
      width: 200px;
      height: 80px;
      background: rgb(11, 160, 230);
      margin: auto;
      line-height: 80px;
      cursor: pointer;
      border-radius: 20px;
  }
  .honour{
      display: flex;
      justify-content: space-around;
  }
  .honour .honourLeft,.honourRight{
      width: 50%;
      height: 400px;
      /* background: red; */
      display: flex;
      justify-content: space-around;
      flex-direction: column;
  }
  .honour .honourLeft{
      margin-right: 10px;
     
  }
  .honourLeft>div{
      height: 100px;
      background: #fff;
      line-height: 100px;
      border-bottom: 1px dashed #000;
      display: flex;
  }
   .honourRight>div{
      height: 100px;
      background: #fff;
      line-height: 100px;
      border-bottom: 1px dashed #000;
      display: flex;
  }
  .honourLeft div img{
      border-radius: 50%;
      height: 80px;
      margin: auto 20px;
  }
  .honourRight div img{
      border-radius: 50%;
      height: 80px;
      margin: auto 20px;
  }
  .name-of-scholar{
      /* display: flex; */
      /* justify-content: space-around; */
      /* flex-direction: column; */
      overflow: hidden;
      width: 100px;
      color: #000;
  }
  .name-of-scholar div{
      height: 40px;
      line-height: 60px;
      text-align: left;
  }
  .famous{
      /* height: 100px; */
      text-align: left;
      font-size: 30px;
      color: rgb(20, 20, 20);
      /* margin-top: -50px; */
      padding: 20px;
  }
  .elegant{
      height: 100px;
      line-height: 30px;
      background: #fff;
      border-bottom: 1px dashed #000;
      text-align: left;
      padding-left: 10px;
  }
  .SMelegant{
      height: 130px;
      line-height: 30px;
      background: #fff;
      border-bottom: 1px dashed #000;
      text-align: left;
      padding-left: 10px;
  }
  

</style>