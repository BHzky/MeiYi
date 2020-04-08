<template>
    <div>
      <el-container>
        <el-header fixed>MeiYI图书馆</el-header>
        <el-main>
          <el-row>
            <el-col :span="24" class="hidden-sm-and-down">
              <div class="title"><p>在知识的海洋里寻找每一天的快乐</p></div>
            </el-col>
            <el-col :span="24" class="hidden-md-and-up">
              <div class="mdTitle"><p>在知识的海洋里寻找每一天的快乐</p></div>
            </el-col>
            <el-col :span="24" class="hidden-sm-and-down">
                <el-input clearable class="titleinput"  prefix-icon="el-icon-search" v-model="titleinput" placeholder="请您搜索相关内容" @keyup.enter.native="skip"></el-input>
            </el-col>
            <el-col :span="24" class="hidden-md-and-up">
                <el-input clearable class="mdTitleinput"  prefix-icon="el-icon-search" v-model="titleinput" placeholder="请您搜索相关内容" @keyup.enter.native="skip"></el-input>
            </el-col>
            <el-col :span="24">
                <div class="titlefont">在线搜索海量科研资料</div>
            </el-col>
            
            <el-col :lg="{span:24,offset:0}" :md="{span:24,offset:0}" :sm="{span:24,offset:0}" :xs="{span:16,offset:8}">
              <div class="bpaper">科研文章来源</div>
            </el-col>
            <!-- </el-row>
            <el-row > -->
              <!-- <div class="outmiddle">  -->
                <!-- <div class="middleall"> -->
                  <el-col :md="{span:5,offset:6}" class="hidden-md-and-up">
                    <div class="mdTask">
                      <!-- <ul> -->
                        <!-- <li>Task</li> -->
                        <el-link @click="newskip($event)" :data="'CIKM'">CIKM</el-link>
                        <el-link @click="newskip($event)" :data="'IEEE Access'">IEEE Access</el-link>
                        <el-link @click="newskip($event)" :data="'Scientometrics'">Scientometrics</el-link>
                        <el-link @click="newskip($event)" :data="'ACM SIGIR forum'">ACM SIGIR forum</el-link>
                        <el-link @click="newskip($event)" :data="'The adaptive web'">The adaptive web</el-link>
                        <el-link class="alllink" type="primary" @click="dialogTableVisible = true">查看所有<i class="el-icon-right row"></i></el-link>
                      <!-- </ul> -->
                    </div>
                  </el-col>
                  <el-col :lg="{span:4,offset:6}" :md="{span:5,offset:5}" :sm="{span:6,offset:0}" class="hidden-sm-and-down">
                    <div class="task">
                      <!-- <div class="yaxis"></div> -->
                      <ul>
                        <!-- <li>Task</li> -->
                        <li><el-link @click="newskip($event)" :data="'CIKM'">CIKM</el-link></li>
                        <li><el-link @click="newskip($event)" :data="'IEEE Access'">IEEE Access</el-link></li>
                        <li><el-link @click="newskip($event)" :data="'Scientometrics'">Scientometrics</el-link></li>
                        <li><el-link @click="newskip($event)" :data="'ACM SIGIR forum'">ACM SIGIR forum</el-link></li>
                        <li><el-link @click="newskip($event)" :data="'The adaptive web'">The adaptive web</el-link></li>
                        <li><el-link class="alllink" type="primary" @click="dialogTableVisible = true">查看所有<i class="el-icon-right row"></i></el-link></li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :lg="4" :md="{span:5}" :sm="{span:6}" class="hidden-sm-and-down">
                    <div class="task">
                      <!-- <div class="yaxis"></div> -->
                      <ul>
                      <!-- <li>Task</li> -->
                        <li><el-link @click="newskip" :data="'PLoS ONE'">PLoS ONE</el-link></li>
                        <li><el-link @click="newskip" :data="'IOSR Journal'">IOSR Journal</el-link></li>
                        <li><el-link @click="newskip" :data="'Scientometrics'">Scientometrics</el-link></li>
                        <li><el-link @click="newskip" :data="'Neural Computation'">Neural Computation</el-link></li>
                        <li><el-link @click="newskip" :data="'Int J Comput Appl'">Int J Comput Appl</el-link></li>
                        <li><el-link class="alllink" type="primary" @click="dialogTableVisible = true">查看所有<i class="el-icon-right row"></i></el-link></li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :lg="4" :md="{span:5}" :sm="{span:6}" class="hidden-sm-and-down">
                  <div class="task">
                    <!-- <div class="yaxis"></div> -->
                    <ul>
                      <!-- <li>Task</li> -->
                      <li><el-link @click="newskip" :data="'Magnetism'">Magnetism</el-link></li>
                      <li><el-link @click="newskip" :data="'ICDE Workshop'">ICDE Workshop</el-link></li>
                      <li><el-link @click="newskip" :data="'Deep Learning'">Deep Learning</el-link></li>
                      <li><el-link @click="newskip" :data="'Stochastic Gradient'">Stochastic Gradient</el-link></li>
                      <li><el-link @click="newskip" :data="'International Journal'">International Journal</el-link></li>
                      <li><el-link class="alllink" type="primary" @click="dialogTableVisible = true">查看所有<i class="el-icon-right row"></i></el-link></li>
                    </ul>
                  </div>
                  </el-col>
                <!-- </div> -->
              <!-- </div> -->
            </el-row>
            
        </el-main>
        <el-row>
          <el-col :lg="4" :md="24" :sm="24">
                  <ul style="margin-top:20px;margin-left:20px">
                    <li>How it works</li>
                    <li>How it works <i class="el-icon-right"></i></li>
                    <li>How it works <i class="el-icon-right"></i></li>
                  </ul>
          </el-col>   
          <el-col :lg="{span:6}" :md="{span:6,offset:0}" :sm="{span:6,offset:0}" :xs="{span:15,offset:5}">
                <img src="/img/1.gif" alt="">
          </el-col>
           <el-col :lg="{span:6}" :md="{span:6,offset:0}" :sm="{span:6,offset:0}" :xs="{span:15,offset:5}">
                <img src="/img/2.gif" alt="">
          </el-col>
           <el-col :lg="{span:6}" :md="{span:6,offset:0}" :sm="{span:6,offset:0}" :xs="{span:15,offset:5}">
                <img src="/img/3.gif" alt="">
          </el-col>
          
              
            <!-- </div> -->
       <el-col :lg="24" class="hidden-md-and-down">
        <div class="contact">
          <div class="contactus">联系我们</div>
          <div class="contactdetails">Found an issue or just want to reach out? We want to hear 
            from you. Join our community to help improve the IBM Science Summarizer</div>
          <div class="contactreact"><el-link class="alllink" type="primary" @click="newdialogTableVisible = true">直接到达<i class="el-icon-right row"></i></el-link></div>
        </div>
        </el-col>
        </el-row>
        
        <!-- 第一列的任务 -->
         <el-dialog title="寻找新的任务" :visible.sync="dialogTableVisible">
                    <el-input style="width:50%" v-model="input_value" @input="throttle" ref="inputs" placeholder="请输入内容进行查找"></el-input>
                    <ul class="fuzzylookup" v-if="state">
                        <li v-for="(item,index) in list" :key="index" >
                          <span @click="searchSkip">{{item}}</span>
                          <!-- <span>{{item.id}}</span>
                          <span>{{item.name}}</span>
                          <span>{{item.time}}</span> -->
                        </li>
                    </ul>
                    <ul class="fuzzylookup" v-else>
                        <li v-for="(item,index) in dataList" :key="index" >
                          <span @click="searchSkip">{{item}}</span>
                          <!-- <span>{{item.id}}</span> -->
                          <!-- <span>{{item.name}}</span> -->
                          <!-- <span>{{item.time}}</span> -->
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
import {getList} from "../assets/js/apis/scientific.js"
// import {getList} from "../assets/js/apis/details.js"
import {mapState,mapActions} from "vuex"
import deTails from "./details/details"
export default {
 data() {
      const item = {
        date: 'hate',
        name: 'class',
        address: 'international'
      };
      return {
        sub_title:[
          "电脑","人文","动物","科技","自然"
        ],
        titleinput:"",
        input_value:"",
        state:false,
        statu:true,
        // dataList:[
        //     { id: "1001", name: "哈哈", time: "20170207" },
        //     { id: "1002", name: "呵呵", time: "20170213" },
        //     { id: "1206", name: "嘻嘻", time: "20170208" },
        //     { id: "1206", name: "嘻嘻", time: "20170208" },
        //       ],    
         list:[],
         textarea2: '',
         gridData: [{
          date: 'hate',
          name: 'class',
          address: 'international'
        },{
          date: 'hate',
          name: 'class',
          address: 'international'
        },{
          date: 'hate',
          name: 'class',
          address: 'international'
        },{
          date: 'hate',
          name: 'class',
          address: 'international'
        },{
          date: 'hate',
          name: 'class',
          address: 'international'
        },{
          date: 'hate',
          name: 'class',
          address: 'international'
        },{
          date: 'hate',
          name: 'class',
          address: 'international'
        },],
        dialogTableVisible: false,
        newdialogTableVisible: false,
        input:"",
        tableData: Array(20).fill(item)
      }
    },
    methods:{
      ...mapActions("scientific",[
          "disGetDataList"
      ]),
      skip(){
         this.$router.push({
           path:'/details',
           query:{source:this.titleinput}
           })
        //  this.showdata=[]
        //  this.show.map((elem)=>{
        //    if(elem.content.indexOf(this.titleinput)!=-1){
        //      this.showdata.unshift(elem)
        //    }
        //  })
      },
      //浮动框的跳转
      searchSkip(e){
        console.log(e.currentTarget.innerHTML)
          this.$router.push({
           path:'/details',
           query:{source:e.currentTarget.innerHTML}
           })
      },
      newskip(e){
        // console.log(e.currentTarget.getAttribute("data"),111)
         let font=e.currentTarget.getAttribute("data")
         console.log(font,"font")
         this.$router.push({
           path:'/details',
           query:{source:font}
           })
        //  this.showdata=[]
        //  console.log(this.allData,"000")
        //  this.allData.map((elem)=>{
        //    if(elem.source.indexOf(font)!=-1){
        //      this.showdata.unshift(elem)
        //    }
        //  })
      },
      //触发keyup事件之后触发的方法
            search(){
　　　　　　     //这个变量主要是用来测试节流后和不节流的区别
　　　　　　　　　　var i=0;
　　　　　　　　　　console.log(i++);
                //定义的新数组存放筛选之后的数据
                this.list=[];
                //拿到当前input输入框输入的值
                this.input_value=this.$refs.inputs.value;
                //判断展示ul列表，如果输入了就展示没输入就不展示
                if(this.input_value.length>0){
                    this.state=true;
                }else{
                    this.state=false;
                }
                //循环模拟数据的数组
                this.dataList.map((elem)=>{
                    //拿当前json的id、name、time去分别跟输入的值进行比较
                    //indexOf 如果在检索的字符串中没有出现要找的值是会返回-1的，所以我们这里不等于-1就是假设输入框的值在当前json里面找到的情况
                    // if(elem.id.indexOf(this.input_value)!=-1    || elem.name.indexOf(this.input_value)!=-1 ||  elem.time.indexOf(this.input_value)!=-1){
                    if(elem.indexOf(this.input_value)!=-1){
                        //然后把当前json添加到list数组中
                        this.list.push(elem);
                    }
                })
            },
             //节流函数
        throttle(){
            //保持this的指向始终指向vue实例
            var that=this;
            if(!that.statu){
                return;
            }    
            that.statu=false;
            setTimeout(function(){
                console.log(new Date());
                that.search();
                that.statu=true;
            },1000)
        },
      },
      computed:{
        ...mapState('scientific',[
          "dataList",
          "allData",
          "show",
          // "showdata"
        ]),
        showdata:{
            get (){
                return this.$store.state.scientific.showdata
            },
            set(val){
                this.$store.state.scientific.showdata=val
            }
        }

      },
      created(){
        this.disGetDataList();
      },
      updated(){
        // console.log(this.dataList,777)
      },
      components:{
        deTails
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
    background-color: #000;
    color: #fff;
    /* font-size: 40px; */
    text-align: center;
    line-height: 160px;
    /* height: 750px; */
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
  .title{margin-top:50px;font-size: 40px;margin-bottom: -40px;}
  .mdTitle{margin-top:50px;font-size: 20px;margin-bottom: -40px;line-height: 200px;}
  .titleinput{width: 40%;}
  .mdTitleinput{width: 90%;}
  .titlefont{font-size:10px;margin-top: -120px;}
  .bpaper{line-height: 30px;float: left;}
  .task{line-height:40px;margin-top:40px;display: flex;justify-content:space-around;border: 1px solid #fff;text-align: left;}
  .mdTask{line-height: 20px;margin-top: 40px;}
  .yaxis{width:1px;height:270px;background:rgb(196, 199, 196);margin-top: 10px;margin-right: -25px}
  .outmiddle{display: flex}
  .middleall{display: flex;justify-content: space-around;width: 50%;margin:auto;margin-top: -30px}
  .works{width:100%;height:400px;background:#fff}
  .works ul{margin-top:40px;margin-left: 40px}
  .works ul li{margin-top:20px;}
  .works ul li:not(:nth-child(1)){color: rgb(61, 155, 243)}
  .contact{width: 100%;height: 200px;background: rgb(218, 215, 215)}
  .contactus{margin-left: 40px;margin-top:40px}
  .contactdetails{width: 300px;margin-left: 300px}
  .contactreact{margin-left: 260px;margin-top: 20px;color:rgb(61, 155, 243)}
  .footmeiyi{font-size: 50px;line-height: 120px;margin-left: 30px}
  .alllink{margin-left: 20px}
  .row{margin-left: 10px}
  .el-link.el-link--default{color: #fff;margin-left: 20px}
  .thanks{margin-top:20px;margin-bottom: 20px}
  /* .gif{display: flex;justify-content: flex-start;height: 300px;} */
  img{height: 300px;}
  .fuzzylookup{margin-top: 20px;display: flex;justify-content: flex-start;flex-wrap: wrap;
  max-height: 300px;overflow-y: scroll;}
   .fuzzylookup span{cursor: pointer;}
  .fuzzylookup li{margin-top: 10px;width: 210px;margin-right: 20px;}
</style>