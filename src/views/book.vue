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
                                <el-breadcrumb-item>图书馆</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </el-col>
                    <el-col :lg="{span:16,offset:4}" :md="{span:16,offset:4}">
                        <div class="like">
                            <span> <div></div> <span>图书推荐</span></span>
                        </div>
                        </el-col>
                        <el-col :lg="{span:16,offset:4}" :md="{span:16,offset:4}" class="hidden-sm-and-down">
                        <div class="demo-image likeImage">
                            <div class="block" v-for="(fit,i) of book" :key="i" ref="block" @click="block(fit.book)" style="margin-bottom:50px;margin-right:10px"> 
                            <img
                                style="width: 100%;height:80%"
                                :src="fit.book"
                                >
                                <div class="bookDec">{{fit.dec}}</div>
                            </div>
                        </div>
                        </el-col>
                        <el-col :lg="{span:16,offset:4}" :md="{span:16,offset:4}" class="hidden-sm-and-down">
                        <div class="demo-image likeImage">
                            <div class="block" v-for="(fit,i) of bookOne" :key="i" ref="block" @click="block(fit.book)" style="margin-bottom:50px">
                            <img
                                style="width: 100%;height:70%"
                                :src="fit.book"
                                >
                                <div class="bookDec">{{fit.dec}}</div>
                            </div>
                        </div>
                        </el-col>
                        <el-col :lg="{span:16,offset:3}" class="hidden-md-and-up">
                        <div class="demo-image likeImage">
                            <div class="block" v-for="fit in mdbook" :key="fit" @click="block(fit)">
                            <img
                                style="width: 95%;height:95%"
                                :src="fit">
                            </div>
                        </div>
                    </el-col>
                    <el-col :lg="{span:16,offset:4}" :md="{span:16,offset:4}" class="hidden-sm-and-down">
                        <div class="demo-image likeImage">
                            <div class="block" v-for="(fit,i) of bookTwo" :key="i" ref="block" @click="block(fit.book)" style="margin-bottom:50px;margin-right:10px"> 
                            <img
                                style="width: 100%;height:80%"
                                :src="fit.book"
                                >
                                <div class="bookDec">{{fit.dec}}</div>
                            </div>
                        </div>
                        </el-col>
                        <el-col :lg="{span:16,offset:4}" :md="{span:16,offset:4}" class="hidden-sm-and-down">
                        <div class="demo-image likeImage">
                            <div class="block" v-for="(fit,i) of bookThree" :key="i" ref="block" @click="block(fit.book)" style="margin-bottom:50px">
                            <img
                                style="width: 100%;height:70%"
                                :src="fit.book"
                                >
                                <div class="bookDec">{{fit.dec}}</div>
                            </div>
                        </div>
                        </el-col>
                        <el-col :lg="{span:16,offset:3}" class="hidden-md-and-up">
                        <div class="demo-image likeImage">
                            <div class="block" v-for="fit in mdbooktwo" :key="fit" @click="block(fit)">
                            <img
                                style="width: 95%;height:95%"
                                :src="fit">
                            </div>
                        </div>
                       </el-col>
                       <el-col :lg="{span:16,offset:3}" class="hidden-md-and-up">
                        <div class="demo-image likeImage">
                            <div class="block" v-for="fit in mdbookthree" :key="fit" @click="block(fit)">
                            <img
                                style="width: 95%;height:95%"
                                :src="fit">
                            </div>
                        </div>
                       </el-col>
                       <el-col :lg="{span:16,offset:3}" class="hidden-md-and-up">
                        <div class="demo-image likeImage">
                            <div class="block" v-for="fit in mdbookfour" :key="fit" @click="block(fit)">
                            <img
                                style="width: 95%;height:95%"
                                :src="fit">
                            </div>
                        </div>
                       </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
    data (){
        return {
            tabPosition: 'top',
            peopleScholar:1,
            book:[
                {book:'/img/book/book1.jpg',dec:"大数据时代的科研活动"},
                {book:'/img/book/book2.jpg',dec:"学科竞争力研究"},
                {book:'/img/book/book3.jpg',dec:"党的历史知识简明读本"},
                {book:'/img/book/book4.jpg',dec:"教育科研与教师专业发展"},
                {book:'/img/book/book5.jpg',dec:"媒介素养的跨学科研究与实践"},
                {book:'/img/book/book6.jpg',dec:"科研成果研讨会发言汇编"},
                ],
            bookOne:[
                {book:'/img/book/book7.jpg',dec:'科研团队绩效及作用机制研究'},
                {book:'/img/book/book8.jpg',dec:'推动数字科技助力金融业创新'},
                {book:'/img/book/book10.jpg',dec:'贴近行业一线的实践经验'},
                {book:'/img/book/book11.jpg',dec:'金融领域极具前瞻性的理论'},
                {book:'/img/book/book12.jpg',dec:'大数据时代科研人员个人学术信息管理行为'},
                {book:'/img/book/book13.jpg',dec:'科研方法指导及实践'},
                ],
            bookTwo:[
                {book:'/img/book/book14.jpg',dec:'科研团队绩效及作用机制研究'},
                {book:'/img/book/book15.jpg',dec:'推动数字科技助力金融业创新'},
                {book:'/img/book/book16.jpg',dec:'贴近行业一线的实践经验'},
                {book:'/img/book/book17.jpg',dec:'金融领域极具前瞻性的理论'},
                {book:'/img/book/book18.jpg',dec:'大数据时代科研人员个人学术信息管理行为'},
                {book:'/img/book/book19.jpg',dec:'科研方法指导及实践'},
                ],
            bookThree:[
                {book:'/img/book/book20.jpg',dec:'科研团队绩效及作用机制研究'},
                {book:'/img/book/book21.jpg',dec:'推动数字科技助力金融业创新'},
                {book:'/img/book/book22.jpg',dec:'贴近行业一线的实践经验'},
                {book:'/img/book/book23.jpg',dec:'金融领域极具前瞻性的理论'},
                {book:'/img/book/book24.jpg',dec:'大数据时代科研人员个人学术信息管理行为'},
                {book:'/img/book/book25.jpg',dec:'科研方法指导及实践'},
                ],
            mdbook:[
                '/img/book/book1.jpg',
                '/img/book/book2.jpg',
                '/img/book/book3.jpg',
                '/img/book/book4.jpg',
                ],
            mdbooktwo:[
                '/img/book/book5.jpg',
                '/img/book/book6.jpg',
                '/img/book/book7.jpg',
                '/img/book/book8.jpg',
                ],
            mdbookthree:[
                '/img/book/book9.jpg',
                '/img/book/book10.jpg',
                '/img/book/book11.jpg',
                '/img/book/book12.jpg',
                ],
            mdbookfour:[
                '/img/book/book13.jpg',
                '/img/book/book14.jpg',
                '/img/book/book15.jpg',
                '/img/book/book16.jpg',
                ],
            
        }
    },
    methods:{
        block(fit){
            this.$router.push({
            path:'/likeDetails',
            query:{uid:fit}
            })
        },
    },
    created(){
        
    },
    mounted(){
    },
    computed:{
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
    background-color: #fff;
    color: #333;
    text-align: center;
    min-height: calc(100vh - 60px)
  }
  .likeImage{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    }

</style>