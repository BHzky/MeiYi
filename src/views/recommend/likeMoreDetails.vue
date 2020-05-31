<template>
    <div>
      <el-container>
        <el-header fixed>MeiYI图书馆</el-header>
        <el-main>
            <el-row>
              <el-col :span="24" :offset="0">
                      <div style="margin-bottom:5px;margin-top:5px">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/index' }"><i class="el-icon-location-information"></i>首页</el-breadcrumb-item>
                                <el-breadcrumb-item>详情</el-breadcrumb-item>
                            </el-breadcrumb>
                      </div>
                </el-col>
                <el-col :span="4" :offset="0" class="hidden-md-and-down">
                    <div class="leftTitle">
                        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" :default-expand-all="true"></el-tree>
                    </div>
                </el-col>
                <el-col :lg="{sapn:20,offset:0}" :md="{span:20}" :sm="{span:24}">
                  <div class="rightContent">
                    <el-col :span="24">
                      <a href="javascript:;" :class="active == '#home' ? 'active' : ''" @click="toTarget('#home')">概括</a>
                        <div id="home">
                            <div class="title">概括</div>
                            <div class="content">{{abstractData[0]}}</div>
                            <div class="content">{{newclassifiedDisplay[0]}}</div>
                            <div class="content">{{newclassifiedDisplay[0]}}</div>
                        </div>
                    </el-col>
                    <el-col :span="24">
                      <a href="javascript:;"  :class="active == '#team' ? 'active' : ''"  @click="toTarget('#team')">介绍</a>
                        <div id="team">
                            <div class="title">介绍</div>
                            <div class="content">{{abstractData}}</div>
                            <div class="content">{{newclassifiedDisplay[0]}}</div>
                            <div class="content">{{newclassifiedDisplay[0]}}</div>
                        </div>
                    </el-col>
                    <el-col :span="24">
                      <a href="javascript:;"  :class="active == '#contact' ? 'active' : ''"  @click="toTarget('#contact')">背景</a>
                        <div id="contact">
                            <div class="title">背景</div>
                            <div class="content">{{abstractData}}</div>
                            <div class="content">{{newclassifiedDisplay[0]}}</div>
                            <div class="content">{{newclassifiedDisplay[0]}}</div>
                        </div>
                    </el-col>
                    <el-col :span="24">
                      <a href="javascript:;"  :class="active == '#join' ? 'active' : ''"  @click="toTarget('#join')">说明</a>
                        <div id="join">
                            <div class="title">说明</div>
                            <div class="content">{{abstractData}}</div>
                            <div class="content">{{newclassifiedDisplay[0]}}</div>
                            <div class="content">{{newclassifiedDisplay[0]}}</div>
                        </div>
                    </el-col>
                  </div>
                </el-col>
            </el-row>
        </el-main>
        <!-- <el-footer height="60px">
          <div class="footmeiyi">MEIYI</div>
        </el-footer> -->
      </el-container>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
 data() {
      return {
          activeNames: ['1'],
          active: '#home',
          scrollIntoViewOptions:{
              block:"start",
              behavior:"smooth"
          },
          input:"",
          data: [{
            label: '关于这篇文章',
            children: [{
                label: '概括',
                children: [{
                label: '主要概括'
                }], 
            },{
                label: '介绍',
                children: [{
                label: '主要介绍'
                }], 
            },{
                label: '背景',
                children: [{
                label: '主要背景'
                }], 
            },{
                label: '说明',
                children: [{
                label: '主要说明'
                }], 
            }]
            }],
            defaultProps: {
            children: 'children',
            label: 'label'
            }
            }
    },
    methods:{
        ...mapActions("scientific",[
            "disConcrete",
            "disGetDataList",
        ]), 
        handleNodeClick(data) {
            console.log(data.$treeNodeId);
            let value = data.$treeNodeId
            console.log(value,"pppppppppp")
            if(value == 3){
              this.toTarget("#home")
            }else if(value === 5){
              this.toTarget("#team")
            }else if(value === 7){
              this.toTarget("#contact")
            }else if(value === 9){
              this.toTarget("#join")
            }
        },
        toTarget(target){
            console.log(target)
            this.active = target
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
            }
    },
    watch:{
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
        console.log(this.concrete,"pppp")
    },
    computed:{
          ...mapState('scientific',[
            "concrete",
            "allData",
        ]),
        showdata(){
            let data=this.concrete.filter((elem,i,arr)=>{
              return elem.referId == this.$route.query.data
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
      },
      updated(){
        console.log(this.showdata,"zhang")
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
  .el-main {
    background-color: rgb(255, 255, 255);
    color: #333;
    min-height: calc(100vh - 60px);
  }
  .leftTitle{
      min-height: calc(100vh - 190px);
      border: 1px solid rgb(179, 175, 175);
      overflow-y: scroll;
      padding: 30px;
      border-radius: 2px;
  }
  .rightContent{
      max-height: calc(100vh - 170px);
      border: 1px solid rgb(179, 175, 175);
      border-radius: 2px;
      overflow: scroll;
      padding: 20px;
  }
  .title{margin-top: 20px;}
  .content{
    margin-top:10px;
    margin-bottom:20px
  }

</style>