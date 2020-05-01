<template>
<div id="app">
  <el-container>
  <el-header>MeiYi</el-header>
  <el-main>
    <el-row :gutter="10">
      <el-col :lg="{span:4,offset:2}" :md="{span:5,offset:1}" class="hidden-sm-and-down">
        <img style="margin-top:50px" src="/img/loginBg.jpg" alt="">
      </el-col>
      <el-col :lg="{span:10,offset:8}" :md="{span:10,offset:8}" :sm="{span:16,offset:8}" class="hidden-sm-and-down">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm user">
          <el-form-item  prop="username">
            <el-input  placeholder="请输入用户名" v-model="ruleForm.username"  autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input  placeholder="请输入密码" v-model="ruleForm.password" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item  prop="canvas">
            <el-input placeholder="请输入验证码" v-model="ruleForm.canvas" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="identifybox">
              <div @click="refreshCode" class="textbtn">
                <s-identify :identifyCode="identifyCode"></s-identify>
              </div>
              <el-button @click="refreshCode" type='text' class="textbtn">看不清，换一张</el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <div>
              <el-checkbox  v-model="password_ji" label="1">记住用户</el-checkbox>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="loginin" type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <div>
            <span> <el-link>尚未注册?</el-link> </span>
            <el-divider direction="vertical"></el-divider>
            <span><el-link href="/reg">点击注册</el-link></span>
          </div>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col  :sm="{span:12,offset:6}" :xs="{span:20,offset:2}" class="hidden-md-and-up">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm xsUser">
          <el-form-item  prop="name">
            <div style="color:#000;font-size:20px;float:left">用户名密码登录</div>
          </el-form-item>
          <el-form-item  prop="username">
            <el-input  placeholder="请输入用户名" v-model="ruleForm.username"  autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input  placeholder="请输入密码" v-model="ruleForm.password" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item  prop="canvas">
            <el-input placeholder="请输入验证码" v-model="ruleForm.canvas" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="identifybox">
              <div @click="refreshCode" class="textbtn">
                <s-identify :identifyCode="identifyCode"></s-identify>
              </div>
              <el-button @click="refreshCode" type='text' class="textbtn">看不清，换一张</el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <div>
              <el-checkbox  v-model="password_ji" label="1">记住用户</el-checkbox>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="loginin" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-main>
  <el-footer>MeiYi图书</el-footer>
</el-container>
</div>
</template>
<script>
import move from './move'
import SIdentify from "./canvas"
import {getLogin} from "../../assets/js/apis/login.js"
import {mapState} from "vuex"
export default {
  name: 'Login',
  data() {
     var checkusername = (rule, value, callback) => {
        if (!value) {
          callback(new Error('用户名不能为空'));
        }else{
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
        //验证码自定义验证规则
      const validateVerifycode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'))
        } else if (value !== this.identifyCode) {
          console.log(1,'validateVerifycode:', value)
          callback(new Error('验证码不正确!'))
        } else {
          callback()
        }
      };
    return {
       ruleForm: {
        username: '',
        password: '',
        canvas:'',
        },
         rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: checkusername, trigger: 'blur' }
          ],
          canvas: [
          { required: true, trigger: 'blur', validator: validateVerifycode }
        ]
        },
       password_ji:true,
      identifyCode: '',
      identifyCodes: '1234567890',
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
   
  },
  methods: {
    // 是否记住密码
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
        var exdate = new Date();
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        document.cookie = "userName=" + c_name + ";path=/;expires=" + exdate.toLocaleString()
        document.cookie = "userPwd=" + c_pwd + ";path=/;expires=" + exdate.toLocaleString()
    },
    //获取cookie
    getCookie: function() {
        if (document.cookie.length > 0) {
            var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
            for (var i = 0; i < arr.length; i++) {
                var arr2 = arr[i].split('='); //再次切割
                //判断查找相对应的值
                if (arr2[0] == 'userName') {
                    this.ruleForm.username = arr2[1]; //保存到保存数据的地方
                } else if (arr2[0] == 'userPwd') {
                    this.ruleForm.password = arr2[1];//将密码解密放入输入框
                // console.log(1111,this.loginForm.password)
                // console.log(arr2[1])
                }
            }
        }
    },
    //删除cookie
    clearCookie: function() {
        this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了

    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      
    },
    //点击登录时
    submitForm(formName) {
        //判断复选框是否被勾选 勾选则调用配置cookie方法
        if (this.password_ji == true) {
            //console.log("checked == true");
            //传入账号名，加密后的密码，和保存天数3个参数
            this.setCookie(this.ruleForm.username, this.ruleForm.password, 7);
            // console.log(this.loginForm.username)
        }else {
            //console.log("清空Cookie");
            //清空Cookie
            this.clearCookie();
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
             let param = {uname:this.ruleForm.username,upwd:this.ruleForm.password,remember:this.password_ji}
              // let param = `uname=${this.ruleForm.username}&upwd=${this.ruleForm.password}`
              getLogin(param).then(res=>{
                console.log(res,"1111")
                if(res.code===1){
                  console.log(987,this.$router)
                  this.$router.push("/index")
                }else{
                  this.$message({
                    message: res.msg,
                    type: 'warning'
                  });
                }
              }).catch((e) => {})
          } else {
            // 刷新验证码
            this.identifyCode = ''
            this.makeCode(this.identifyCodes, 4)
            console.log('error submit!!');
            return false;
          }
        });
       
      },
     // 生成随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 切换验证码
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    // 生成四位随机验证码
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ]
      }
      console.log(this.identifyCode)
    },
  },
  mounted() {
    // 验证码初始化
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
    //在mounted里面获取cookie
    this.getCookie();
      },
      updated(){
       
      },
  // 引入验证的组件
  components: {
    SIdentify,
    move
  },
}
</script>
<style  scoped>
  .el-header, .el-footer {
    background-color: rgb(19, 20, 20);
    color: rgb(255, 255, 255);
    /* text-align: center; */
    line-height: 60px;
    font-size: 20px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: rgb(255, 255, 255);
    color: #333;
    text-align: center;
    line-height: 120px;
    flex-flow: column;
    /* 屏幕高度自适应100% */
    min-height: calc(100vh - 120px)
    
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
  .user{
    width: 50%;
    margin-top: 30px;
    border: 1px solid rgb(142, 197, 171);
    padding: 40px;
    border-radius: 2px;
    background: rgb(251, 253, 251);
    }
    .xsUser{
      margin-top: 80px;
    }
  .textbtn{
    color: #606266;
    margin: auto;
    }
  .identifybox{
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin: auto;
    position: relative;
    }
  .loginin{
    width: 90%
    }
</style>
