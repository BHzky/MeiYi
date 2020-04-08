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
              <el-select v-model="value" placeholder="请选择">
                  <el-option key="1" label="1" value="1">
                  <div @click="dialogTableVisible = true">View all...</div>
                  </el-option>
                  <el-option
                  v-for="item in cities"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                  </el-option>
              </el-select>
            </el-col>
            <el-col :span="4" class="hidden-md-and-down">
              <el-select v-model="value" placeholder="请选择">
                  <el-option key="1" label="1" value="1">
                  <div @click="dialogTableVisible = true">View all...</div>
                  </el-option>
                  <el-option
                  v-for="item in cities"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                  </el-option>
              </el-select>
            </el-col>
            <el-col :span="4" class="hidden-md-and-down">
              <el-select v-model="value" placeholder="请选择">
                  <el-option key="1" label="1" value="1">
                  <div @click="dialogTableVisible = true">View all...</div>
                  </el-option>
                  <el-option
                  v-for="item in cities"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                  </el-option>
              </el-select>
            </el-col>
            <el-col :span="4" class="hidden-md-and-down">
              <el-select v-model="value" placeholder="请选择">
                <el-option key="1" label="1" value="1">
                  <div @click="dialogTableVisible = true">View all...</div>
                  </el-option>
                  <el-option
                  v-for="item in cities"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                  </el-option>
              </el-select>
            </el-col>
            <!-- <el-col :span="4">
              <div style="height:100px"></div>
            </el-col> -->
            <el-col :span="8" class="hidden-md-and-down">
              <el-select v-model="value" placeholder="请选择" style="float:right">
                  <el-option key="1" label="1" value="1">
                  <div @click="dialogTableVisible = true">View all...</div>
                  </el-option>
                  <el-option
                  v-for="item in cities"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                  </el-option>
              </el-select>
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
                <div>一共{{showdata.length}}条数据</div>
              </el-col>
             <!-- <div> -->
              <el-col :span="24" class="hidden-sm-and-down">
                 <el-card class="box-card" v-loading="loading" v-for="(item,i) of showdata" :key="i">
                    <div>
                        <div>
                           <el-link type="primary" @click="skip">Related Tasks can Share! A Multi-task Framework for Affective language</el-link>
                          </div>
                        <div class="pdf">
                          <span @click="pdf">pdf</span>
                          <i class="el-icon-share" ></i>  
                          <i class="el-icon-s-flag" @click="newdialogTableVisible = true"></i>  
                        </div>
                        <div class="details">
                            <ul class="clu" @click="contentJudge($event,i)">
                                <li><el-link type="info">介绍</el-link></li>
                                <li><el-link type="info">内容</el-link></li>
                                <li><el-link type="info">结论</el-link></li>
                                <li><el-link type="info">展示</el-link></li>
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
              </el-col>
              <el-col :span="24" class="hidden-md-and-up">
                <!-- <template> -->
                 <el-card class="box-card" v-loading="loading" v-for="(item,i) of showdata" :key="i">
                    <div>
                        <div>
                           <el-link type="primary" @click="skip">Related Tasks can Share! A Multi-task Framework for Affective language</el-link>
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
                                <el-dropdown-item :command="{skip:'a',i}">介绍</el-dropdown-item>
                                <el-dropdown-item :command="{skip:'b',i}">内容</el-dropdown-item>
                                <el-dropdown-item :command="{skip:'c',i}">结论</el-dropdown-item>
                                <el-dropdown-item :command="{skip:'d',i}">展示</el-dropdown-item>
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
export default {
 data() {
      const item = {
        date: 'hate',
        name: 'class',
        address: 'international'
      };
      return {
        // initialize:true,
        choose:["介绍","keyan","mm","jk"],
        dialogVisible: false,
        //card的背景颜色
        cardbg:"cardbg",
        classifiedDisplay:"",
        // newclassifiedDisplay:"",
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
        cities: [{
          value: 'Beijing',
          label: '北京'
          }, {
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Nanjing',
            label: '南京'
          }, {
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }],
          value: ''
        }
    },
    methods:{
      ...mapActions("scientific",[
          "disGetDataList"
      ]),
      //判断下拉框
       handleCommand(command) {
        // this.$message('click on item ' + command);
        // console.log(this.showdata,"jjjj")
        // console.log(command,"dajiba")
        let i = command.i
        if(command.skip==="a"){
          // i = 0
          this.classifiedDisplay[i] = this.showdata.map((elem)=>{
            return elem.author
          })[i]
          // console.log( this.classifiedDisplay[i],"0909090")
          this.cardbg="cardbg1"
          // this.choose="介绍"
        }else if(command.skip==="b"){
          // i = 1
          this.classifiedDisplay[i] = this.showdata.map((elem)=>{
            return elem.title
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
            return elem.time
          })[i]
          this.cardbg="cardbg2"
          // this.choose="展示"
        }
      },
      content(){
        
      },
      //判断内容框需要显示的数据
      contentJudge(e,i){
        console.log(e.target.innerHTML);
        let value = e.target.innerHTML;
        console.log(this.showdata,"hh")
        if(value==="介绍"){
          this.newclassifiedDisplay[i] = this.showdata.map((elem)=>{
            return elem.author
          })[i]
          this.cardbg="cardbg1"
        }else if(value==="内容"){
          let data = this.showdata.map((elem)=>{
            return elem.title
          })[i]
          this.newclassifiedDisplay[i] = data
          this.cardbg="cardbg4"
        }else if(value==="结论"){
          this.newclassifiedDisplay[i] = this.showdata.map((elem)=>{
            return elem.source
          })[i]
          this.cardbg="cardbg3"
        }else if(value==="展示"){
          this.newclassifiedDisplay[i] = this.showdata.map((elem)=>{
            return elem.time
          })[i]
          this.cardbg="cardbg2"
        }
        console.log(this.newclassifiedDisplay,"0987654321")
      },
      skip(){
         this.$router.push({path: '/detailsOne'});
      },  
      pdf(){
        const {href} = this.$router.resolve({path:"https://arxiv.org/pdf/2002.05909.pdf"});
        window.open(href, '_blank');
      } ,
    },
    computed:{
          ...mapState('scientific',[
          "allData",
          "dataList",
          // "showdata"
        ]),
        showdata(){
          let data=this.allData.filter((elem,i,arr)=>{
             return elem.source === this.$route.query.source
          })
          return data
        },
        newclassifiedDisplay(){
         return  this.showdata.map((elem)=>{
            return elem.author
          })
        }

        // showdata:{
        //     get (){
        //         return this.$store.state.scientific.showdata
        //     },
        //     set(val){
        //         this.$store.state.scientific.showdata=val
        //     }
        // }
      },
      updated(){
        // console.log(this.classifiedDisplay,"098767890")
        //   console.log(this.show)
          // console.log(this.showdata,"999")
          // console.log(this.newclassifiedDisplay,">>>>>>>>")
      },
      mounted(){
        this.disGetDataList()
        
        setTimeout(()=>{
              // console.log(this.showdata,"yy")
              this.classifiedDisplay = this.showdata.map((elem)=>{
                return elem.source
              })
              // console.log(this.classifiedDisplay,"opop")
          },1000)
        
          // console.log(this.classifiedDisplay,"pp09p")
      },
      created(){
          
          setTimeout(()=>{
              this.loading=false
          },1000)
          // console.log(this.showdata,"ppp")
          
          
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
  .el-header{position: fixed;width: 100%}
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
  .contactdetails{width: 300px;margin-left: 300px}
  .contactreact{margin-left: 260px;margin-top: 20px;color:rgb(61, 155, 243)}
  .footmeiyi{font-size: 50px;line-height: 120px;margin-left: 30px}
  .alllink{margin-left: 40px}
  .row{margin-left: 10px}
  .el-link.el-link--default{color: #fff;margin-left: 20px}
  .thanks{margin-top:20px;margin-bottom: 20px}
  .gif{display: flex;justify-content: flex-start;height: 325px;margin-left: 300px;margin-top: -80px}
  .gif img{margin-left: -40px;width: 400px}
  .meitou{margin-top: 65px;margin-bottom: 20px;}
  /* .content{height: 1000px;background: rgb(224, 223, 223);padding: 20px} */
  .subtitle{margin-top: 30px}
   .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;margin-top: 20px;height: 300px;position: relative;
  }
  .newbox-card {
    width: 100%;margin-top: 20px;height: 200px;position: relative;
  }
  .enlargement{display: flex;justify-content: space-between;}
  .clu{margin-top: 20px;margin-left: 20px}
  .mdClu{width: 100%;}
  .clu li{margin-top: 5px;width: 300px;}
  .details{display: flex;justify-content: flex-start;}
  .pdf{float: right;margin-top: -10px}
  .pdf span{margin-right: 5px;cursor: pointer;}
  .mdPdf span{margin-right: 5px;cursor: pointer;}
  .mdPdf{margin-top: 10px;}
  .el-icon-share{margin-right: 5px}
  .cardbg,.cardbg1,.cardbg2,.cardbg3,.cardbg4{background: rgb(243, 243, 243);}
  .block1{width:150px;height: 150px;margin-top: 0px;}
  .dia{display: flex;}
  /* 下拉框 */
   .el-dropdown-link {
    cursor: pointer;
    /* color: #409EFF; */
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>