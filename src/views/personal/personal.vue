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
                    <el-col :span="9" :offset="0">
                        <div class="userName">用户名称：{{username}}</div>
                    </el-col>
                    <el-col :span="15" :offset="3">
                         <el-tabs :tab-position="tabPosition" style="height: 300px;">
                            <el-tab-pane label="喜欢">
                                <div class="subscribe">
                                    <div>喜欢过{{attentionNum}}位学者</div>
                                    <div class="peopleDetails" v-for="num in attentionNum" :key="num">
                                        <div><img :src='`/img/scholar/like${num}.jpg`' alt=""></div>
                                        <div>{{attention}}</div>
                                    </div>
                                    
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="收藏">
                                <div>收藏过{{collectNum}}篇文章</div>
                                    <div class="collectDetails"  v-for="num in collectNum" :key="num">
                                        <div>文章标题：</div>
                                        <div>{{collect}}</div>
                                    </div>
                            </el-tab-pane>
                        </el-tabs>
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
import {getPersonal} from '../../assets/js/apis/personal.js'
export default {
    data (){
        return {
            tabPosition: 'top',
            peopleScholar:1,
            people:[1,2,3,4,5],
            user:[{}],
            
        }
    },
    methods:{
        ...mapActions("scholar",[
          "disGetScholar"
      ]),
    },
    created(){
        getPersonal().then((res)=>{
            this.user = res
            console.log(this.user)
        })
    },
    mounted(){
        
    },
    computed:{
        collectNum(){
            return this.user[0].collectNum
        },
        attentionNum(){
            return this.user[0].attentionNum
        },
        username(){
            return this.user[0].username
        },
        collect(){
            return this.user[0].collect
        },
        attention(){
            return this.user[0].attention
        }
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
    min-height: calc(100vh - 60px)
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
  .collectDetails{
      display: flex;
      margin-top: 40px;
  }
  .collectDetails>:nth-child(1){
      margin-right: 40px;
  }
  .userName{
      margin-bottom: 30px;
      color: rgb(75, 177, 236);
      font-size: 25px;
  }

</style>