<template>
    <div>
      <el-container>
        <el-header fixed>MeiYI图书馆</el-header>
        <el-main>
          <el-row :gutter="10">
            <el-col :span="24">
              <el-input class="meitou" prefix-icon="el-icon-search" v-model="input" placeholder="请输入需要查找的内容"></el-input>
            </el-col>
            <!-- <div class="select"> -->
            <el-col :span="4" class="hidden-md-and-down">
              <el-select v-model="valueAuthor" placeholder="请选择作者">
                  <el-option key="1" label="1" value="1">
                  <div @click="dialogTableVisible = true">View all...</div>
                  </el-option>
                  <el-option
                  v-for="item in topAuthor"
                  :key="item.label"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
                  </el-option>
              </el-select>
            </el-col>
            <el-col :span="4" class="hidden-md-and-down">
              <el-select v-model="valueTime" placeholder="请选择时间">
                  <el-option key="1" label="1" value="1">
                  <div @click="dialogTableVisible = true">View all...</div>
                  </el-option>
                  <el-option
                  v-for="item in topTime"
                  :key="item.key"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.value }}</span>
                  <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
                  </el-option>
              </el-select>
            </el-col>
            <el-col :span="4" class="hidden-md-and-down">
              <el-select v-model="valueCollect" placeholder="请选择收藏数">
                  <el-option key="1" label="1" value="1">
                  <div @click="dialogTableVisible = true">View all...</div>
                  </el-option>
                  <el-option
                  v-for="item in topCollect"
                  :key="item.key"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.value }}</span>
                  <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
                  </el-option>
              </el-select>
            </el-col>
            <el-col :span="4" class="hidden-md-and-down">
              <el-select v-model="valueTitle" placeholder="请选择标题">
                <el-option key="1" label="1" value="1">
                  <div @click="dialogTableVisible = true">View all...</div>
                  </el-option>
                  <el-option
                  v-for="item in topTitle"
                  :key="item.label"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
                  </el-option>
              </el-select>
            </el-col>
            <!-- <el-col :span="4">
              <div style="height:100px"></div>
            </el-col> -->
            <el-col :span="4" class="hidden-md-and-down">
              <el-select v-model="valueReferid" placeholder="请选择文章编号">
                  <el-option key="1" label="1" value="1">
                  <div @click="dialogTableVisible = true">View all...</div>
                  </el-option>
                  <el-option
                  v-for="item in topReferid"
                  :key="item.label"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
                  </el-option>
              </el-select>
              </el-col>
              <el-col :span="4" class="hidden-md-and-down">
                <el-button type="primary" @click="exactValue">查找</el-button>
              </el-col>
              <el-col :span="24">
                <div class="subtitle">meiyi knowledge</div>
              </el-col>
              <!-- 第一列的任务 -->
              <el-dialog title="寻找新的任务" :visible.sync="dialogTableVisible">
                          <el-input style="width:50%" v-model="input_value"  ref="inputs" placeholder="请输入内容进行查找"></el-input>
                          <ul class="fuzzylookup" v-show="state">
                              <li v-for="(item,index) in list" :key="index" >
                                <span>{{item.id}}</span>
                                <span>{{item.name}}</span>
                                <span>{{item.time}}</span>
                              </li>
                          </ul>
                          <!-- <el-table :data="gridData">
                            <el-table-column property="date" label="hate" width="150"></el-table-column>
                            <el-table-column property="name" label="class" width="200"></el-table-column>
                            <el-table-column property="address" label="international"></el-table-column>
                          </el-table> -->
                          <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogTableVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
                          </div>
                </el-dialog>
          <!-- </div>  -->
         </el-row>
        </el-main>
        <el-row style="padding:20px">
         <!-- <div class="content"> -->
              <el-col :span="20">
                <div v-if="isExactterm">一共{{showdata.length}}条数据</div>
                <div v-else>一共{{exactTerm.length}}条数据</div>
              </el-col>
             <!-- <div> -->
              <el-col :span="24" class="hidden-sm-and-down">
                 <div v-if="isExactterm">
                  <el-card  class="box-card" v-loading="loading" v-for="(item,i) of showdata" :key="i">
                      <div>
                          <div>
                            <el-link type="primary" :data="showdata[i].referId" @click="skip($event)">展示更多关于本篇文章的详细情况 <i class="el-icon-right"></i> </el-link>
                            
                          </div>
                          <div class="pdf">
                            <span @click="pdf">pdf</span>
                            <i class="el-icon-share" ></i>  
                            <i class="el-icon-s-flag" @click="newdialogTableVisible = true"></i>  
                          </div>
                          <div class="details">
                              <ul class="clu" @click="contentJudge($event,i)">
                                  <li><el-link type="info">文章标题</el-link></li>
                                  <li><el-link type="info">文章概要</el-link></li>
                                  <li><el-link type="info">文章来源</el-link></li>
                                  <li><el-link type="info">文章科研成果</el-link></li>
                                  <li>
                                    <span class="collect" @click="comment">
                                            评论
                                            <el-badge class="mark" :value="12" />
                                    </span>
                                    <span class="collect" @click="collectWay(i)">
                                            {{isCollect[i]}}
                                            <el-badge class="mark" :value="collect[i]" />
                                    </span>
                                  </li>
                                  
                                  <!-- 评论抽屉 -->
                                  <el-drawer
                                    title="我是标题"
                                    :visible.sync="drawer"
                                    :with-header="false">
                                    <span>我来啦!</span>
                                  </el-drawer>
                              </ul>
                              <el-card class="newbox-card" :class="cardbg">
                                <div class="enlargement">
                                    <!-- <div v-if="initialize">{{classifiedDisplay[i]}}</div> -->
                                    <div>{{newclassifiedDisplay[i]}}</div>
                                    <!-- 图片 -->
                                    <div>
                                        <div class="block block1" @click="dialogVisible = true">
                                          <el-image :src="url"></el-image>
                                        </div>
                                    </div>
                                      <!-- <div class="demo-image__preview">
                                      <el-image 
                                        style="width: 100px; height: 100px"
                                        :src="url" 
                                        :preview-src-list="srcList">
                                      </el-image>
                                    </div> -->
                                </div>
                              </el-card>
                              <el-dialog 
                                :visible.sync="dialogVisible"
                                width="70%"
                                >
                                <div class="dia">
                                  <div  style="margin:auto;">
                                      <el-image :src="url"></el-image>
                                  </div>
                                </div>
                              </el-dialog>
                          </div>
                      </div>
                  </el-card>
                 </div>
                 <div  v-else >
                  <el-card class="box-card" v-loading="loading" v-for="(item,i) of exactTerm" :key="i">
                      <div>
                          <div>
                            <el-link type="primary" :data="exactTerm[i].referId" @click="skip($event)">展示更多关于本篇文章的详细情况 <i class="el-icon-right"></i> </el-link>
                            
                          </div>
                          <div class="pdf">
                            <span @click="pdf">pdf</span>
                            <i class="el-icon-share" ></i>  
                            <i class="el-icon-s-flag" @click="newdialogTableVisible = true"></i>  
                          </div>
                          <div class="details">
                              <ul class="clu" @click="contentJudgeExactTerm($event,i)">
                                  <li><el-link type="info">文章标题</el-link></li>
                                  <li><el-link type="info">文章概要</el-link></li>
                                  <li><el-link type="info">文章来源</el-link></li>
                                  <li><el-link type="info">文章科研成果</el-link></li>
                                  <li>
                                    <span class="collect" @click="comment">
                                            评论
                                            <el-badge class="mark" :value="12" />
                                    </span>
                                    <span class="collect" @click="collectWay(i)">
                                            {{isCollect[i]}}
                                            <el-badge class="mark" :value="collect[i]" />
                                    </span>
                                  </li>
                                  
                                  <!-- 评论抽屉 -->
                                  <el-drawer
                                    title="我是标题"
                                    :visible.sync="drawer"
                                    :with-header="false">
                                    <span>我来啦!</span>
                                  </el-drawer>
                              </ul>
                              <el-card class="newbox-card" :class="cardbg">
                                <div class="enlargement">
                                    <div>{{newexactTerm[i]}}</div>
                                    <!-- 图片 -->
                                    <div>
                                        <div class="block block1" @click="dialogVisible = true">
                                          <el-image :src="url"></el-image>
                                        </div>
                                    </div>
                                </div>
                              </el-card>
                              <el-dialog 
                                :visible.sync="dialogVisible"
                                width="70%"
                                >
                                <div class="dia">
                                  <div  style="margin:auto;">
                                      <el-image :src="url"></el-image>
                                  </div>
                                </div>
                              </el-dialog>
                          </div>
                      </div>
                  </el-card>
                 </div>
              </el-col>
              <el-col :span="24" class="hidden-md-and-up">
                <!-- <template> -->
                 <el-card class="box-card" v-loading="loading" v-for="(item,i) of showdata" :key="i">
                    <div>
                        <div>
                           <el-link type="primary" :data="showdata[i].referId" @click="skip($event)">展示更多关于本篇文章的详细情况</el-link>
                           <div class="mdPdf">
                            <span @click="pdf">pdf</span>
                            <i class="el-icon-share" ></i>  
                            <i class="el-icon-s-flag" @click="newdialogTableVisible = true"></i>  
                          </div>
                          <div style="margin-top:10px">
                            <el-dropdown @command="handleCommand" trigger="click">
                              <span class="el-dropdown-link">
                                选择所需<i class="el-icon-arrow-down el-icon--right"></i>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item :command="{skip:'a',i}">文章标题</el-dropdown-item>
                                <el-dropdown-item :command="{skip:'b',i}">文章概要</el-dropdown-item>
                                <el-dropdown-item :command="{skip:'c',i}">文章来源</el-dropdown-item>
                                <el-dropdown-item :command="{skip:'d',i}">文章科研成果</el-dropdown-item>
                              </el-dropdown-menu>
                            </el-dropdown>
                          </div>
                        </div>
                        
                        <div class="details">
                            <div class="mdClu" @click="contentJudge">
                                <el-card class="box-card" :class="cardbg">
                                    <!-- <div>{{choose + ":"}}</div> -->
                                    <div>{{classifiedDisplay[i]}}</div>
                                </el-card>
                            </div>
                            
                            <el-dialog 
                              :visible.sync="dialogVisible"
                              width="70%"
                              >
                              <div class="dia">
                                <div class="block" style="margin:auto;">
                                    <el-image :src="url"></el-image>
                                </div>
                              </div>
                            </el-dialog>
                        </div>
                    </div>
                </el-card>
                <!-- </template> -->
              </el-col>
             <!-- </div> -->
         <!-- </div> -->
        </el-row>
         <!-- 直接到达内容 -->
          <el-dialog title="是否存在什么问题" :visible.sync="newdialogTableVisible">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      placeholder="请输入内容"
                      v-model="textarea2">
                    </el-input>
                    <div class="thanks">感谢提供您宝贵的意见</div>
                    <el-input v-model="input" placeholder="请输入您的邮箱，方便我们与您联系"></el-input>
                     <div slot="footer" class="dialog-footer">
                      <el-button @click="newdialogTableVisible = false">取 消</el-button>
                      <el-button type="primary" @click="newdialogTableVisible = false">确 定</el-button>
                    </div>
          </el-dialog>
        <el-footer height="120px">
          <div class="footmeiyi">MEIYI</div>
        </el-footer>
      </el-container>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
import {collect,disexactValue,attentionAdd} from "../../assets/js/apis/scientific"
export default {
 data() {
      const item = {
        date: 'hate',
        name: 'class',
        address: 'international'
      };
      return {
        //精确查找的数据
        exactTerm:[],
        isExactterm:true,
        valueCollect:"",
        valueAuthor:"",
        valueTime:"",
        valueTitle:"",
        valueReferid:"",
        drawer: false,
        // initialize:true,
        choose:["介绍","keyan","mm","jk"],
        dialogVisible: false,
        //card的背景颜色
        cardbg:"cardbg",
        classifiedDisplay:"",
        newdialogTableVisible: false,
        //图片
        url: '/img/recommend_details/recommend_details3.jpg',
        // srcList: [
        //   "/img/recommend_details/recommend_details3.jpg"
        // ],
        loading: true,
        input_value:"",
        state:false,
        statu:true,
         list:[],
         textarea2: '',
        dialogTableVisible: false,
        newdialogTableVisible: false,
        input:"",
        tableData: Array(20).fill(item),
          value: ''
        }
    },
    methods:{
      ...mapActions("scientific",[
          "disGetDataList",
      ]),
      //精确查找
      exactValue(){
         let param={
           author:this.valueAuthor,
           time:this.valueTime,
           title:this.valueTitle,
           referId:this.valueReferid,
           collect:this.valueCollect,
         }
        disexactValue(param).then(res=>{
          if(res.code===1){
            this.exactTerm=res.result
            this.isExactterm=false
          }
          
        }).catch(e=>{console.log(e)})
      },
      //评论的点击事件
      comment(command){
          this.drawer = true;
      },
      collectWay(i){
        if(this.isCollect[i]==="收藏"){
          this.isCollect[i] = "取消收藏"
          this.$forceUpdate()
          this.$set(this.collect,i,this.collect[i]+1)
          attentionAdd().then((res)=>{
            console.log(res)
          })
        }else{
          this.isCollect[i] = "收藏"
          this.$forceUpdate()
          this.$set(this.collect,i,this.collect[i]-1)
        }
        let param={referId : this.referid[i],collect:this.collect[i]} 
        // param = JSON.stringify(param)
        collect(param).then((res)=>{
          console.log(res)
        }).catch(e=>{console.log(e)})
      },
      //判断下拉框
       handleCommand(command) {
        // this.$message('click on item ' + command);
        let i = command.i
        if(command.skip==="a"){
          // i = 0
          this.classifiedDisplay[i] = this.showdata.map((elem)=>{
            return elem.title
          })[i]
          // console.log( this.classifiedDisplay[i],"0909090")
          this.cardbg="cardbg1"
          // this.choose="介绍"
        }else if(command.skip==="b"){
          // i = 1
          this.classifiedDisplay[i] = this.showdata.map((elem)=>{
            return elem.abstract
          })[i]
          this.cardbg="cardbg4"
          // this.choose="内容"
        }else if(command.skip==="c"){
          // i = 2
          this.classifiedDisplay[i] = this.showdata.map((elem)=>{
            return elem.source
          })[i]
          this.cardbg="cardbg3"
          // this.choose="结论"
        }else if(command.skip==="d"){
          // i = 3
          this.classifiedDisplay[i] = this.showdata.map((elem)=>{
            return elem.introduce
          })[i]
          this.cardbg="cardbg2"
          // this.choose="展示"
        }
      },
      content(){
        
      },
      //判断内容框需要显示的数据
      contentJudge(e,i){
        let value = e.target.innerHTML;
        if(value==="文章标题"){
          let data = this.showdata.map((elem)=>{
            return elem.title
          })[i]
          this.$forceUpdate();
          this.$set(this.newclassifiedDisplay,i,data)
        }else if(value==="文章概要"){
          let data = this.showdata.map((elem)=>{
            return elem.abstract
          })[i]
          this.$forceUpdate();
          this.$set(this.newclassifiedDisplay,i,data)
        }else if(value==="文章来源"){
          let data = this.showdata.map((elem)=>{
            return elem.source
          })[i]
          let data1= this.showdata.map((elem)=>{
            return elem.author
          })[i]
          let data2= this.showdata.map((elem)=>{
            return elem.time
          })[i]
          this.$forceUpdate();
          this.$set(this.newclassifiedDisplay,i,"来源："+data+"作者："+data1+"时间："+data2)
        }else if(value==="文章科研成果"){
          let data3 = this.showdata.map((elem)=>{
            return elem.introduce
          })[i]
          this.$forceUpdate();
          this.$set(this.newclassifiedDisplay,i,data3)
        }
      },
      //精确查询过后的点击函数
      contentJudgeExactTerm(e,i){
        let value = e.target.innerHTML;
        if(value==="文章标题"){
          let data = this.showdata.map((elem)=>{
            return elem.title
          })[i]
          this.$forceUpdate();
          this.$set(this.newexactTerm,i,data)
        }else if(value==="文章概要"){
          let data = this.showdata.map((elem)=>{
            return elem.abstract
          })[i]
          this.$forceUpdate();
          this.$set(this.newexactTerm,i,data)
        }else if(value==="文章来源"){
          let data = this.showdata.map((elem)=>{
            return elem.source
          })[i]
          let data1= this.showdata.map((elem)=>{
            return elem.author
          })[i]
          let data2= this.showdata.map((elem)=>{
            return elem.time
          })[i]
          this.$forceUpdate();
          this.$set(this.newexactTerm,i,"来源："+data+"作者："+data1+"时间："+data2)
        }else if(value==="文章科研成果"){
          let data = this.showdata.map((elem)=>{
            return elem.introduce
          })[i]
          this.$forceUpdate();
          this.$set(this.newexactTerm,i,data)
        }
      },
      skip(e){
        let font=e.currentTarget.getAttribute("data")
        //  console.log(font,"font")
         this.$router.push({
           path:'/detailsOne',
           query:{referId:font}
           })
      },  
      pdf(){
        const {href} = this.$router.resolve({path:"https://arxiv.org/pdf/2002.05909.pdf"});
        window.open(href, '_blank');
      },
    },
    computed:{
          ...mapState('scientific',[
          "allData",
          "dataList",
          // "collect",
          // "showdata"
        ]),
        isCollect(){
          let collect = []
          for(var i=0;i<this.showdata.length;i++){
            collect.push("收藏")
          }
          
          return collect
        },
        showdata(){
          let data=this.allData.filter((elem,i,arr)=>{
             return elem.source === this.$route.query.source
          })
          return data
        },
        newexactTerm(){
          return this.exactTerm.map((elem)=>{
            return elem.title
          })
        },
        newclassifiedDisplay(){
         return  this.showdata.map((elem)=>{
            return elem.title
          })
        },
        //文章收藏
        collect(){
          return this.showdata.map((elem)=>{
            return elem.collect
          })
        },
        //文章编号
        referid(){
          return this.showdata.map((elem)=>{
            return elem.referId
          })
        },
        topReferid(){
          return this.showdata.map((elem)=>{
            return {
              value:elem.referId,
              label:elem.referId,
            }
          })
        },
        topAuthor(){
          return this.showdata.map((elem)=>{
            return {
              value:elem.author,
              label:elem.author,
            }
          })
        },
        topTime(){
          return this.showdata.map((elem)=>{
            return {
              value:elem.time,
              label:elem.time,
              key:elem.author
            }
          })
        },
        topCollect(){
          return this.showdata.map((elem)=>{
            return {
              value:elem.collect,
              label:elem.collect,
              key:elem.author
            }
          })
        },
        topTitle(){
          return this.showdata.map((elem)=>{
            return {
              value:elem.title,
              label:elem.title,
            }
          })
        }
      },
      updated(){
        // console.log(this.collect,"collect")
      },
      mounted(){
        this.disGetDataList()
        
        setTimeout(()=>{
              this.classifiedDisplay = this.showdata.map((elem)=>{
                return elem.source
              })
          },1000)
      },
      created(){
          
          setTimeout(()=>{
              this.loading=false
          },1000)
      }
      
}
</script>
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #fff;
    line-height: 60px;
    background: #000;
    z-index: 999;
  }
  .el-header{
    position: fixed;
    width: 100%
    }
  .el-main {
    background-color: rgb(48, 47, 47);
    color: #fff;
    /* font-size: 40px; */
    /* text-align: center; */
    /* line-height: 160px; */
    /* height: 250px; */
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
  .contactdetails{
    width: 300px;
    margin-left: 300px
    }
  .contactreact{
    margin-left: 260px;
    margin-top: 20px;
    color:rgb(61, 155, 243)
    }
  .footmeiyi{
    font-size: 50px;
    line-height: 120px;
    margin-left: 30px
    }
  .alllink{
    margin-left: 40px
    }
  .row{
    margin-left: 10px
    }
  .el-link.el-link--default{
    color: #fff;
    margin-left: 20px
    }
  .thanks{
    margin-top:20px;
    margin-bottom: 20px
    }
  .gif{
    display: flex;
    justify-content: flex-start;
    height: 325px;
    margin-left: 300px;
    margin-top: -80px
    }
  .gif img{
    margin-left: -40px;
    width: 400px
    }
  .meitou{
    margin-top: 65px;
    margin-bottom: 20px;
    }
  /* .content{height: 1000px;background: rgb(224, 223, 223);padding: 20px} */
  .subtitle{
    margin-top: 30px
    }
   .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
    margin-top: 20px;
    /* height: 300px; */
    position: relative;
  }
  .newbox-card {
    width: 100%;
    margin-top: 20px;
    /* height: 200px; */
    position: relative;
  }
  .enlargement{
    display: flex;
    justify-content: space-between;
    }
  .clu{
    margin-top: 20px;
    margin-left: 20px
    }
  .mdClu{
    width: 100%;
    }
  .clu li
  {margin-top: 12px;
  width: 300px;
  }
  .details{
    display: flex;
    justify-content: flex-start;
    }
  .pdf{
    float: right;
    margin-top: -10px
    }
  .pdf span{
    margin-right: 5px;
    cursor: pointer;
    }
  .mdPdf span{
    margin-right: 5px;
    cursor: pointer;
    }
  .mdPdf{
    margin-top: 10px;
    }
  .el-icon-share{
    margin-right: 5px
    }
  .cardbg,.cardbg1,.cardbg2,.cardbg3,.cardbg4{
    background: rgb(243, 243, 243);
    }
  .block1{
    width:150px;
    height: 150px;
    margin-top: 0px;
    }
  .dia{
    display: flex;
    }
  /* 下拉框 */
   .el-dropdown-link {
    cursor: pointer;
    /* color: #409EFF; */
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .newitem {
  margin-top: 40px;
  /* margin-left: 40px; */
  }
  .collect{
    cursor: pointer;
    }
</style>