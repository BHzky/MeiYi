import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/display.css'
import "element-ui/lib/theme-chalk/index.css"
import "./assets/css/Eric.css"
import BaiduMap from "vue-baidu-map"
import echarts from "echarts"
import "echarts-gl"
import 'echarts/map/js/china'
Vue.prototype.$echarts=echarts
//配置axios
// axios.defaults.baseURL="http://localhost:5050";
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;
// Vue.use(axios)
Vue.use(ElementUI)

Vue.config.productionTip = false
//百度地图接口的使用
Vue.use(BaiduMap, {
  ak: 'D6mYheHFqoeHCkGVmEoLM7L4paoUohVT'    //这个地方是官方提供的ak密钥
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
