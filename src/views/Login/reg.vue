<template>
<div id="app">
  <el-container>
  <el-header>MeiYi</el-header>
  <el-main>
    <el-row :gutter="10">
      <el-col  :lg="{span:9,offset:7}" :md="{span:9,offset:7}" :sm="{span:12,offset:6}" :xs="{span:20,offset:2}" class="hidden-sm-and-down">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm xsUser">
            <el-form-item  prop="uname">
                <div style="color:#000;font-size:20px;float:left">用户注册</div>
            </el-form-item>
            <el-form-item label="用户名" prop="username">
                <el-input v-model.number="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <div>
                <el-checkbox  v-model="password_ji" label="1"><el-link>我已阅读并同意</el-link></el-checkbox>
                <el-link @click="dialogVisible = true">《用户服务协议》</el-link>
                </div>
                <el-dialog
                title="霸王条款"
                :visible.sync="dialogVisible"
                width="50%"
                >
                <span>别看了傻逼，请你接受我们一切霸王条款，生气也没有用，我们就是这么恶心的网站</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
                </el-dialog>
            </el-form-item>
            <el-form-item>
                <el-button class="loginin" type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
      </el-form>
      </el-col>
      <el-col  :lg="{span:9,offset:7}" :md="{span:9,offset:7}" :sm="{span:12,offset:6}" :xs="{span:20,offset:2}" class="hidden-md-and-up">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm xsUser">
          <el-form-item  prop="uname">
            <div style="color:#000;font-size:20px;float:left">用户注册</div>
          </el-form-item>
          <el-form-item  prop="username">
            <el-input   placeholder="请输入用户名" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item  prop="pass" >
            <el-input placeholder="请输入密码" v-model="ruleForm.pass" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item  prop="checkPass" >
            <el-input  placeholder="请再次输入密码" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <div>
              <el-checkbox  v-model="password_ji" label="1">我已阅读并同意《用户服务协议》</el-checkbox>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="loginin" type="primary" @click="submitForm('ruleForm')">注册</el-button>
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
import {getReg} from "../../assets/js/apis/login.js"
export default {
  name: 'Login',
  data() {
     var checkusername = (rule, value, callback) => {
        if ( value === '') {
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
       dialogVisible: false,
       ruleForm: {
        username: '',
        pass: '',
        checkPass:'',
        },
       rules: {
          username: [
            { validator: checkusername, trigger: 'blur' }
          ],
           pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        password_ji:false,
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
    // showPwd() {
    //   if (this.passwordType === 'password') {
    //     this.passwordType = ''
    //   } else {
    //     this.passwordType = 'password'
    //   }
    //   this.$nextTick(() => {
    //     this.$refs.password.focus()
    //   })
    // },
    handleLogin() {
      
    },
    submitForm(formName) {
        // console.log(this.$refs[formName])
        this.$refs[formName].validate((valid) => {
          if (valid && this.password_ji) {
             let param = {uname:this.ruleForm.username,upwd:this.ruleForm.pass}
            getReg(param).then(res=>{
            console.log(res,"1111")
            this.$message({
                message: res.message,
                type: 'warning'
                });
                this.ruleForm.username = ""
                this.ruleForm.pass = ""
                this.ruleForm.checkPass = ""
                this.password_ji = false
                this.$router.replace("/login")
            }).catch((e) => {})
          } else {
              if(valid){
                    this.$message({
                    message: "请阅读用户服务协议",
                    type: 'warning'
                    });
                }
            console.log('error submit!!');
            return false;
          }
        });
       
      },
  },
  mounted() {
      },
  // 引入验证的组件
  components: {
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
    .xsUser{
      margin-top: 80px;
    }
  .loginin{
    width: 90%
    }
</style>
