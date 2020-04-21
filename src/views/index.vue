<template>
    <div>
      <el-container>
        <el-header fixed height="60px" class="top">
          <el-row>
            <el-col :lg="{span:3,offset:2}" :md="{span:5}" :sm="{span:5}" :xs="{span:10}"><div>MeiYI图书馆</div></el-col>
            <el-col :lg="{span:4,offset:2}" :md="{span:6}" class="hidden-sm-and-down">
              <template>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="发现" name="first"></el-tab-pane>
                  <el-tab-pane label="科研" name="second"></el-tab-pane>
                  <el-tab-pane label="我的" name="three"></el-tab-pane>
                </el-tabs>
              </template>
            </el-col>
            <el-col :span="4" :offset="1" class="hidden-sm-and-down">
              <el-input v-model="input" placeholder="请输入内容">
                <el-button slot="append" icon="el-icon-search" type="primary"></el-button>
              </el-input>
            </el-col>
            <!-- 头像框 -->
            <!-- <el-col :span="1" :offset="2">
                  <div class="demo-basic--circle" style="margin-top:10px">
                    <div class="block">
                      <el-avatar size="large" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
                    </div>
                  </div>
            </el-col> -->
            <!-- <el-col :lg="{span:1,offset:4}" :md="{span:2,offset:4}" :sm="{span:3,offset:10}" :xs="{span:4,offset:5}" v-show="regLogin">
              <el-link class="el-icon-s-opportunity" href="/reg">注册</el-link>
            </el-col>
            <el-col :lg="{span:1,offset:0}" :md="{span:2,offset:0}" :sm="{span:5,offset:0}" :xs="{span:4}" v-show="regLogin">
              <el-link class="el-icon-s-custom" href="/login">登录</el-link>
            </el-col> -->
             <el-col :lg="{span:1,offset:6}" :md="{span:2,offset:6}" :sm="{span:5,offset:0}" :xs="{span:4,offset:10}">
              <el-link class="el-icon-s-custom" href="/login" @click.native="logOff">注销</el-link>
            </el-col>
          </el-row>
        </el-header>
        <el-main >
          <el-row>
            <el-col :lg="{span:16,offset:4}" :md="{span:22,offset:1}" :sm="{span:8,offset:10}" class="hidden-sm-and-down">
              <div style="margin-top:100px;">
                    <el-carousel :interval="4000"  height="400px">
                      <el-carousel-item v-for="item in 4" :key="item">
                        <img @click="carousel" style="width:100%" :src="`/img/index${item}.jpg`" alt="">
                      </el-carousel-item>
                    </el-carousel>
              </div>
            </el-col>
            <el-col :lg="{span:18,offset:3}" :md="{span:8,offset:10}" class="hidden-sm-and-up">
              <div>
                    <el-carousel :interval="4000" height="200px" arrow="always">
                      <el-carousel-item v-for="item in 4" :key="item">
                        <img style="width:100%" :src="`/img/index${item}.jpg`" alt="">
                      </el-carousel-item>
                    </el-carousel>
              </div>
            </el-col>
            <el-col class="hidden-sm-and-up">
              <el-input v-model="input" placeholder="请输入内容" style="margin-top:5px"></el-input>
            </el-col>
            <el-col class="hidden-sm-and-up">
            <div class="echartsSm" >
              <div>
                <i class="el-icon-video-camera-solid"></i>
                <el-link>体验计划</el-link>
              </div>
              <el-button type="info" size="mini" style="width:100px;margin:auto" @click="joinMap">进入体验</el-button>
            </div>
          </el-col>
            <el-col :lg="{span:16,offset:4}" :md="{span:16,offset:4}">
              <div class="like">
                <span> <div></div> <span>猜你喜欢</span></span>
                <el-link @click="anotherBatch"> <i class="el-icon-refresh"></i> 换一批</el-link>
              </div>
            </el-col>
            <el-col :lg="{span:16,offset:4}" :md="{span:16,offset:4}" class="hidden-sm-and-down">
              <div class="demo-image likeImage">
                <div class="block" v-for="fit in likeNumber" :key="fit">
                  <img
                    style="width: 95%;height:95%"
                    :src="fit"
                    >
                </div>
              </div>
            </el-col>
            <el-col :lg="{span:16,offset:3}" class="hidden-sm-and-up">
              <div class="demo-image likeImage">
                <div class="block" v-for="fit in mdlikeNumber" :key="fit">
                  <img
                    style="width: 95%;height:95%"
                    :src="fit">
                </div>
              </div>
            </el-col>
            <el-col :lg="{span:16,offset:4}" :md="{span:16,offset:4}">
              <div class="like">
                <span> <div></div> <span>科研专类</span></span>
                <el-link> <i class="el-icon-refresh"></i> 换一批</el-link>
              </div>
            </el-col>
            <el-col :lg="{span:16,offset:4}" :md="{span:16,offset:4}" class="hidden-sm-and-down">
              <div class="demo-image likeImage">
                <div class="block" v-for="fit in 5" :key="fit">
                  <img
                    style="width: 95%;height:95%"
                    :src="url">
                </div>
              </div>
            </el-col>
            <el-col :lg="{span:16,offset:3}"  class="hidden-sm-and-up">
              <div class="demo-image likeImage">
                <div class="block" v-for="fit in 4" :key="fit">
                  <img
                    style="width: 95%;height:95%"
                    :src="url">
                </div>
              </div>
            </el-col>
             <el-col :lg="{span:16,offset:4}" :md="{span:16,offset:4}">
              <div class="like">
                <span> <div></div> <span>科研头条</span></span>
                <el-link> <i class="el-icon-refresh"></i> 换一批</el-link>
              </div>
            </el-col>
            <el-col :lg="{span:16,offset:4}" :md="{span:16,offset:4}" class="hidden-sm-and-down">
              <div class="demo-image likeImage">
                <div class="block" v-for="fit in 5" :key="fit">
                  <img
                    style="width: 95%;height:95%"
                    :src="url">
                </div>
              </div>
            </el-col>
            <el-col :lg="{span:16,offset:3}" class="hidden-sm-and-up">
              <div class="demo-image likeImage">
                <div class="block" v-for="fit in 4" :key="fit">
                  <img
                    style="width: 95%;height:95%"
                    :src="url">
                </div>
              </div>
            </el-col>
            <el-col :span="24" :offset="0">
               <div class="cont">
                <div class="contlist" ref='contlist' @mouseover="stopScroll" @mouseout="startScroll">
                  <ul>
                    <li v-for="(item, index) in list" :key="index">
                      {{ index + 1 }} 、<em>{{ item.name }}</em> {{ item.time }}
                    </li>
                  </ul>
                  <ul>
                    <li v-for="(item, index) in list" :key="index">
                      {{ index + 1 }} 、<em>{{ item.name }}</em> {{ item.time }}
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
            <el-col :lg="{span:18,offset:3}">
               <el-divider></el-divider>
            </el-col>
            <el-col :lg="{span:12,offset:8}" :md="{span:11,offset:7}" class="hidden-sm-and-down">
              <div>
                <span>关于</span>
                <el-divider direction="vertical"></el-divider>
                <span>联系我们</span>
                <el-divider direction="vertical"></el-divider>
                <span>求助</span>
                <el-divider direction="vertical"></el-divider>
                <span>建议</span>
                <el-divider direction="vertical"></el-divider>
                <span>网站信息</span>
                <el-divider direction="vertical"></el-divider>
                <span>用户反馈</span>
                <el-divider direction="vertical"></el-divider>
                <span>版权声明</span>
              </div>
            </el-col>
            <el-col :lg="{span:10,offset:7}" :md="{span:11,offset:7}">
              <div class="bottomSide">每一图书馆是专业的科研平台，汇集了各种实时的科研资讯。随时随地，读我想读。</div>
            </el-col>
            <el-col :lg="{span:20,offset:4}" :md="{span:11,offset:7}">
              <div class="bottomSide">地址：江苏省常州市钟楼区中吴大道1801号江苏理工学院  客服热线：000-000-0000  举报电话：000-000-0000  《举报受理和处置管理办法》</div>
            </el-col>
            <el-col :lg="{span:12,offset:8}" :md="{span:11,offset:7}" class="hidden-sm-and-up">
              <div>
                <span>关于</span>
                <el-divider direction="vertical"></el-divider>
                <span>联系我们</span>
                <el-divider direction="vertical"></el-divider>
                <span>建议</span>
                <el-divider direction="vertical"></el-divider>
                <span>网站信息</span>
                <el-divider direction="vertical"></el-divider>
                <span>版权声明</span>
              </div>
            </el-col>
            
          </el-row>
        </el-main>
        <el-row>
          <el-col class="hidden-sm-and-down">
            <div class="echarts" >
              <div>
                <i class="el-icon-video-camera-solid"></i>
                <el-link>体验计划</el-link>
              </div>
              <el-button type="info" size="mini" style="width:100px;margin:auto" @click="joinMap">进入体验</el-button>
            </div>
          </el-col>
        </el-row>
        <el-footer height="60px">
          MeiYI图书馆
        </el-footer>
      </el-container>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
 data() {
      return {
          likeNumber:[
            '/img/like/like1.jpg',
            '/img/like/like2.jpg',
            '/img/like/like3.jpg',
            '/img/like/like4.jpg',
            '/img/like/like5.jpg',
            '/img/like/like6.jpg'
            ],
          mdlikeNumber:[
            '/img/like/like1.jpg',
            '/img/like/like2.jpg',
            '/img/like/like3.jpg',
            '/img/like/like4.jpg',
          ],
          activeName: '',
          input:"",
          url: '/img/recommend_details/recommend_details1.jpg',
          list: [
            {name: '科研日报1', time: '2020-6-1 16:20:34'},
            {name: '科研日报2', time: '2020-6-1 16:20:34'},
            {name: '科研日报3', time: '2020-6-1 16:20:34'},
            {name: '科研日报4', time: '2020-6-1 16:20:34'},
            {name: '科研日报5', time: '2020-6-1 16:20:34'},
          ],
          scrollW: 0, //记录滚动到哪了

        }
    },
    methods:{ 
      carousel(){
        console.log(1)
      },
      anotherBatch(){
        console.log("99")
        if(this.likeNumber[0]==='/img/like/like1.jpg'){
            this.likeNumber=[
            '/img/like/like7.jpg',
            '/img/like/like8.jpg',
            '/img/like/like9.jpg',
            '/img/like/like10.jpg',
            '/img/like/like11.jpg',
            '/img/like/like12.jpg'
            ]
        }else if(this.likeNumber[0]==='/img/like/like7.jpg'){
          this.likeNumber=[
            '/img/like/like1.jpg',
            '/img/like/like2.jpg',
            '/img/like/like3.jpg',
            '/img/like/like4.jpg',
            '/img/like/like5.jpg',
            '/img/like/like6.jpg'
            ]
        }
        if(this.mdlikeNumber[0]==='/img/like/like1.jpg'){
            this.mdlikeNumber=[
            '/img/like/like5.jpg',
            '/img/like/like6.jpg',
            '/img/like/like7.jpg',
            '/img/like/like8.jpg',
            ]
        }else if(this.mdlikeNumber[0]==='/img/like/like7.jpg'){
          this.mdlikeNumber=[
            '/img/like/like1.jpg',
            '/img/like/like2.jpg',
            '/img/like/like3.jpg',
            '/img/like/like4.jpg',
            ]
        }
        
      },
      //未登录时候的提示
      unlisted(){
        this.$message({
          message: '请先进行登录或者注册，再进行相关操作',
          type: 'warning'
        });
      },
      //进入地图
      joinMap(){
      //   if(this.islogin){
          this.$router.push("echarts")
      //   }else{
      //     this.unlisted()
      //   }
      },
      //注销方法
      logOff(){
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        console.log(22)
      },
      goTo(path) {
          this.$router.replace(path)
          console.log("111")
        },
        handleClick(tab, event) {
        console.log(tab, event,"22");
        if(tab.label==="科研"){
          // if(this.islogin){
            this.$router.push({path: '/scientific'})
          // }else{
            // this.unlisted()
          // }
        }else if(tab.label==="我的"){
          // if(this.islogin){
            this.$router.push({path: '/map'})
          // }else{
            // this.unlisted()
          // }
        }
      },
      // 循环向左滚动
      //鼠标悬停，停止滚动
			stopScroll () {
				var target = this.$refs.contlist;
				clearInterval(this.scrollTime)
			},
			//鼠标移开 ，接着滚动
			startScroll () {
				var target = this.$refs.contlist;
				this.scrollW = target.offsetLeft; // 移开时记录向左移动的距离
				this.scroll()
			},
			//循环滚动
			scroll (){
				var that = this; //因为定时器里要使用vue对象时不能用this, 在定时器中的 this 代表
				var target = this.$refs.contlist; 
				var initLeft = 0;
				if(this.scrollW < 0){
					initLeft = this.scrollW * (-1)
				}
				//定时器
				this.scrollTime = setInterval(function(){
				    initLeft ++;
				    if(initLeft >= target.offsetWidth / 2 ){
				        initLeft = 0;
				    }
					target.style.left = '-'+ initLeft +'px';//获取不到translateX的值改用 left
					
					//target.style = 'transform: translateX(-'+ initLeft +'px)';
				},16)
			}
    },
    watch:{
    },
    mounted(){
      //实例挂载完毕前
			//调用滚动代码
			this.scroll()

    },
    computed:{
          ...mapState("index",[
          "show",
        //   "showdata"
        ]),
         ...mapState([
          "islogin",
        //   "showdata"
        ]),
        regLogin(){
          if(this.islogin){
            return false
          }else{
            return true
          }
        }

      },
      updated(){
        //   this.onScroll()
        // console.log(this.show,"22")
        // console.log(this.islogin,"00")
        
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
  .el-header{border-bottom: 2px solid #E4E7ED;}
  .el-header{position: fixed;width: 100%}
  .el-main {
    background-color: #fff;
    color: #000;
    background: #fff;
  }
  .echarts{
  width: 140px;
  height: 150px;
  position: fixed;
  z-index: 999;
  top: 400px;
  right: 30px;
  background: floralwhite;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 4px;
  /* line-height: 100px; */
  text-align: center;
  font-size: 50px;
  display: flex;
  flex-direction: column;
}
  .echartsSm{
  width: 100%;
  height: 150px;
  /* position: fixed; */
  background: rgb(236, 204, 139);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 4px;
  /* line-height: 100px; */
  text-align: center;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.echarts div{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
}
.echartsSm div{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
}
.like{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  }
  .like>span:first-child{font-size: 20px;display: flex;}
  .like>span:first-child>div{
    background: chartreuse;
    width: 10px;
    height: 20px;
    border-radius: 4px;
    margin-right: 10px;
  }
  .likeImage{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    }
  .bottomSide{
    margin-top: 20px;
  }
    /* 无限滚动的样式 */
    ul,li,em{
		margin:0;
		padding: 0;
	}
	.cont{
		height: 40px;
		background-color:#000;
		color: #fff;
		overflow: hidden;
		position: relative;
	}
	.contlist{
		position: absolute;
		white-space: nowrap;
		display: flex;
		flex-direction: row;
	}
	.contlist ul{
		display: flex;
		flex-direction: row;
	}
	.contlist ul li{
		font-size: 12px;
		margin-right: 25px;
		height: 40px;
		line-height: 40px;
		display: flex;
		flex-direction: row;
	}
	.contlist ul li em{
		color:#f80;
		font-size: 12px;
		padding-right: 10px;
	}
  
</style>
<style>
.top .el-tabs__item{color: #fff;}
.top .el-link.el-link--default{color:#fff !important;}

</style>