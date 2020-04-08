<template>
    <div id="outer">
      <!-- 整体大布局 -->
      <el-container>
        <el-container>
          <el-header height="100px" class="top">
              <h1 class="title">每一图书馆</h1>
              <ul class="classify">
                <li>科研</li>
                <li>人物</li>
                <li>风景</li>
                <li>教学</li>
              </ul>
              <ul class="search">
                <li>
                  <el-input
                    placeholder="请输入查询内容"
                    prefix-icon="el-icon-search"
                    v-model="input">
                  </el-input>
                </li>
                <li class="left">
                  <el-button type="primary" icon="el-icon-search">搜索</el-button>
                </li>
              </ul>
              
              <!-- <div style="width:400px;">
                <div style="width:200px">
                  <el-input
                    placeholder="请输入查询内容"
                    prefix-icon="el-icon-search"
                    v-model="input">
                  </el-input>
                </div>
                <div>
                  <el-button type="primary" icon="el-icon-search">搜索</el-button>
                </div>
              </div> --> 
          </el-header>
          <el-main>
             <!-- 轮播 -->
             <div style="width:1000px;margin:auto">
                <el-carousel :interval="4000" type="card" height="300px">
                  <el-carousel-item v-for="item in 5" :key="item">
                    <img style="width:100%" :src="`/img/index/recommend${item}.jpg`" alt="">
                  </el-carousel-item>
                </el-carousel>
             </div> 
          </el-main>
       </el-container> 
     </el-container>  
      <el-button style="font-size:30px;width:100%" type="primary" @click="skip">返回</el-button>  
    </div>
</template>
<script>
import defaultImg from "../../public/img/bg.png"
import {getIndex} from "../assets/js/apis/index.js"//这边只能直接解构
export default {
    data(){
        return {
             input: '每一图书馆'
        }
    },
    methods:{
        skip(){
            this.$router.replace('/')
        }
    },
    created(){
        
        // console.log(this.$route)
        // getIndex().then(
        //     result=>{
        //         console.log(result)
        //     }
        // )
    }

}
</script>
<style scoped>
/* 最外层布局样式 */
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height:100px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    display: flex;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  /* 轮播样式 */
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /* 每一映像铺大标题 */
  .title{font-weight: bolder;font-size:25px;}
  /* 顶部样式 */
  .top{display: flex;justify-content: space-around;}
  .classify{display: flex;list-style: none;justify-content: space-between;width: 200px;}
  .search{display: flex;list-style: none;justify-content: space-between;width: 300px;}
  .search .left{width:20px}
</style>