<template>
  <div class="container">
    <div class="comment" v-for="item in comments" :key="item.likeNum">
      <div class="info">
        <img class="avatar" :src="item.fromAvatar" width="36" height="36"/>
        <!-- 用户名称和评论的时间 -->
        <div class="right">
          <div class="name">{{item.fromName}}</div>
          <div class="date">{{item.date}}</div>
        </div>
      </div>
      <!-- 评论的内容 -->
      <div class="content">{{item.content}}</div>
      <!-- 赞和回复 -->
      <div class="control">
        <span class="like" :class="{active: item.isLike}" @click="likeClick(item)">
          <i class="iconfont icon-like"></i>
          <span class="like-num">{{item.likeNum > 0 ? item.likeNum + '人赞' : '赞'}}</span>
        </span>
        <span class="comment-reply" @click="showCommentInput(item)">
          <i class="iconfont icon-comment"></i>
          <span>回复</span>
        </span>
      </div>
      <div class="reply">
        <div class="item" v-for="reply in item.reply" :key="reply.fromName">
            <!-- 回复者的名字和@回复的人以及回复的内容 -->
          <div class="reply-content">
            <span class="from-name">{{reply.fromName}}</span><span>: </span>
            <span class="to-name">@{{reply.toName}}</span>
            <span>{{reply.content}}</span>
          </div>
          <div class="reply-bottom">
            <span>{{reply.date}}</span>
            <span class="reply-text" @click="showCommentInput(item, reply)">
              <i class="iconfont icon-comment"></i>
              <span>回复</span>
            </span>
          </div>
        </div>
        <div class="write-reply" v-if="item.reply.length > 0" @click="showCommentInput(item)">
          <i class="el-icon-edit"></i>
          <span class="add-comment">添加新评论</span>
        </div>
        <transition name="fade">
          <div class="input-wrapper" v-if="showItemId === item.id">
            <el-input class="gray-bg-input"
                      v-model="inputComment"
                      type="textarea"
                      :rows="3"
                      autofocus
                      placeholder="写下你的评论">
            </el-input>
            <div class="btn-control">
              <span class="cancel" @click="cancel">取消</span>
              <el-button class="btn" type="success" round @click="commitComment">确定</el-button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    // props: {
    //   comments: {
    //     type: Array,
    //     required: true
    //   }
    // },
    components: {},
    data() {
      return {
        inputComment: '',
        showItemId: '',
        comments: [
    {
      id: 'comment0001', //主键id
      date: '2018-07-05 08:30',  //评论时间
      ownerId: 'talents100020', //文章的id
      fromId: 'errhefe232213',  //评论者id
      fromName: '犀利的评论家',   //评论者昵称
      fromAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //评论者头像
      likeNum: 3, //点赞人数
      content: '非常靠谱的程序员',  //评论内容
      reply: [  //回复，或子评论
        {
          id: '34523244545',  //主键id
          commentId: 'comment0001',  //父评论id，即父亲的id
          fromId: 'observer223432',  //评论者id
          fromName: '夕阳红',  //评论者昵称
          fromAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg', //评论者头像
          toId: 'errhefe232213',  //被评论者id
          toName: '犀利的评论家',  //被评论者昵称
          toAvatar: 'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg',  //被评论者头像
          content: '赞同，很靠谱，水平很高',  //评论内容
          date: '2018-07-05 08:35'   //评论时间
        },
        {
          id: '34523244545',
          commentId: 'comment0001',
          fromId: 'observer567422',
          fromName: '清晨一缕阳光',
          fromAvatar: 'http://imgsrc.baidu.com/imgad/pic/item/c2fdfc039245d688fcba1b80aec27d1ed21b245d.jpg',
          toId: 'observer223432',
          toName: '夕阳红',
          toAvatar: 'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg',
          content: '大神一个！',
          date: '2018-07-05 08:50'
        }
      ]
    },
    {
      id: 'comment0002',
      date: '2018-07-05 08:30',
      ownerId: 'talents100020',
      fromId: 'errhefe232213',
      fromName: '毒蛇郭德纲',
      fromAvatar: 'http://ww1.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2q2p8pj30v90uzmzz.jpg',
      likeNum: 0,
      content: '从没见过这么优秀的人',
      reply: []
    }
  ]
        
      }
    },
    computed: {},
    methods: {
      /**
       * 点赞
       */
      likeClick(item) {
        if (item.isLike === null) {
          Vue.$set(item, "isLike", true);
          item.likeNum++
        } else {
          if (item.isLike) {
            item.likeNum--
          } else {
            item.likeNum++
          }
          item.isLike = !item.isLike;
        }
      },

      /**
       * 点击取消按钮
       */
      cancel() {
        this.showItemId = ''
      },

      /**
       * 提交评论
       */
      commitComment() {
        console.log(this.inputComment);
      },

      /**
       * 点击评论按钮显示输入框
       * item: 当前大评论
       * reply: 当前回复的评论
       */
      showCommentInput(item, reply) {
        if (reply) {
          this.inputComment = "@" + reply.fromName + " "
        } else {
          this.inputComment = ''
        }
        this.showItemId = item.id
      }
    },
    created() {
      console.log(this.comments)
    }
}
</script>
<style scoped>
.container{
     padding: 0 10px;
     box-sizing: border-box;
    }
.container .comment{
      display: flex;
      flex-direction: column;
      padding: 10px;
      border-bottom: 1px solid #F2F6FC;
 }   
.container .comment .info{
      display: flex;
      align-items: center;
 }
.container .comment .info .avatar{
      border-radius: 50%;
  }
.container .comment .info .right{
      display: flex;
      flex-direction: column;
      margin-left: 10px;
  }
.container .comment .info .right .name{
      font-size: 16px;
      color: #303133;
      margin-bottom: 5px;
      font-weight: 500;
  }
.container .comment .info .right .date{
      font-size: 12px;
      color: #909399;
  }
.container .comment .content{
      font-size: 16px;
      color: #303133;
      line-height: 20px;
      padding: 10px 0;
  }
  .container .comment .control {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #909399;
  }
.container .comment .control .like {
       display: flex;
       align-items: center;
       margin-right: 20px;
       cursor: pointer;
  }
.container .comment .control .like.active{
       color: #409EFF;
  }
.container .comment .control .like:hover{
       color: #409EFF;
  }
.container .comment .control .like .iconfont{
       font-size: 14px;
       margin-right: 5px;
  }
.container .comment .control .comment-reply{
       display: flex;
       align-items: center;
       cursor: pointer;
  }
.container .comment .control .comment-reply:hover{
       color: #333;
   }
.container .comment .control .comment-reply .iconfont{
       font-size: 16px;
       margin-right: 5px;
   }
.container .comment .reply{
       margin: 10px 0;
       border-left: 2px solid #DCDFE6;
   }
.container .comment .reply .item{
       margin: 0 10px;
       padding: 10px 0;
       border-bottom: 1px dashed #EBEEF5;
   }
.container .comment .reply .item .reply-content{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #303133;
   }
.container .comment .reply .item .reply-content .from-name{
        color: #409EFF;
   }
.container .comment .reply .item .reply-content .to-name{
        color: #409EFF;
        margin-left: 5px;
        margin-right: 5px;
   }
.container .comment .reply .reply-bottom {
        display: flex;
        align-items: center;
        margin-top: 6px;
        font-size: 12px;
        color: #909399;
 }
.container .comment .reply .reply-bottom .reply-text{
        display: flex;
        align-items: center;
        margin-left: 10px;
        cursor: pointer;
 }
.container .comment .reply .reply-bottom .reply-text:hover{
        color: #333;
 }
.container .comment .reply .reply-bottom .reply-text .icon-comment{
        margin-right: 5px;
 }
.container .comment .reply .write-reply{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #909399;
        padding: 10px;
        cursor: pointer;
 }
.container .comment .reply .write-reply:hover{
        color: #303133;
 }
.container .comment .reply .write-reply .el-icon-edit {
        margin-right: 5px;
 }
.container .comment .reply .fade-enter-active{
        transition: opacity 0.5s;
 }
.container .comment .reply .fade-leave-active{
        transition: opacity 0.5s;
 }
.container .comment .reply .fade-enter{
        opacity: 0;
 }
.container .comment .reply .fade-leave-to {
        opacity: 0;
 }
.container .comment .reply .input-wrapper{
        padding: 10px;
  }
.container .comment .reply .input-wrapper .btn-control{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-top: 10px;
  }
.container .comment .reply .input-wrapper .btn-control .cancel{
        font-size: 16px;
        color: #606266;
        margin-right: 20px;
        cursor: pointer;
  }
.container .comment .reply .input-wrapper .btn-control .cancel:hover{
       color: #333;
  }
.container .comment .reply .input-wrapper .btn-control .confirm{
       font-size: 16px;
  }
</style>