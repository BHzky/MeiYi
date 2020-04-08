import axios from "axios";
import qs from "qs";
import store from "../store"

axios.defaults.baseURL="http://localhost:8081"
// var baseURL="http://localhost:5050"
//设置超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withcredentials = true

//请求拦截(请求发出前处理请求)
axios.interceptors.request.use((config) => {
    //在发送请求之前如果为post序列化请求参数
    if (config.method === 'post') {
      // config.data = qs.stringify(config.data);
      config.data = config.data;
    }
    // console.log(localStorage.getItem("token"),"token")
    // if(!localStorage.getItem("token")){
    //   alert("500错误")
    // }
    if(localStorage.getItem("token")){
        config.headers.token=localStorage.getItem("token");
      }
    if(sessionStorage.getItem("token")){
        config.headers.token=sessionStorage.getItem("token");
      }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

// 响应拦截器（处理响应数据）
axios.interceptors.response.use((res) => {
    //对响应数据做判断，与后台协议统一接口返回格式
    // console.log('>>>>>>>response: ', res);
    // if (res.data.succ != 'ok') { //这个判断可根据实际情况修改
    //   return Promise.reject(res);
    // }
    // console.log(res,"0000")
    console.log("触发响应拦截器...")
    if(res.data.status==403){
      console.log(11)
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      // store.commit("setIslogin",false);
      // store.commit("setUname","");
    }else if(res.data.code==-1){
      console.log(55)
      store.commit("setIslogin",false);
      store.commit("setUname","");
      alert(res.data.msg+" 请先登录 !");
    }else if(res.data.token){
      // store.commit("setUname",res.data.uname);
      console.log(44)
      store.commit("setIslogin",true);
      if(res.remember==="true"){
        localStorage.setItem("token",res.data.token);
      }else{
        sessionStorage.setItem("token",res.data.token);
      }
    }
    return res;
  }, (error) => {
    return Promise.reject(error);
  });
// 封装get方法
function get(url, params){
    return new Promise((resolve, reject) =>{
        axios.get(url, params).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err.data);
        })
    });
}

// 封装post方法
function post(url, params){
    return new Promise((resolve, reject) =>{
        axios.post(url, params).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err.data);
        })
    });
}

//对外接口
export function request({method, url, data}){
    if(method == 'get'){
        return get(url, data);
    }else if(method == 'post'){
        return post(url, data);
    }
}

export default {
    install(Vue) {
    Vue.prototype.axios = axios;
    Vue.prototype.$request = function () {
            return request;
        }
    }
}