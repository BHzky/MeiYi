import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/index.vue"
import scientific from "../views/scientific.vue"
import photo from "../views/photo.vue"
import details from "../views/details/details"
import detailsOne from "../views/details/detailsOne"
import detailsTwo from "../views/details/detailsTwo"
import comment from "../views/details/comment"
import login from "../views/Login/login"
import reg from "../views/Login/reg"
import map from "../views/echarts/map"
import echarts from "../views/echarts/echarts"

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    // redirect:"/login",
    name: 'index',
    component:Index,
    //如果想让这个页面缓存，不重复请求数据的话
    meta:{
      // keepAlive:true,
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'index',
    component:Index,
    //如果想让这个页面缓存，不重复请求数据的话
    meta:{
      // keepAlive:true
      requiresAuth: true
    }
  },
  {path:"/photo",name:"photo",component:photo},
  {
    path:"/scientific",name:"scientific",component:scientific,
    meta:{requiresAuth: true}
  },
  {path:"/details",name:"details",component:details},
  {path:"/detailsOne",name:"detailsOne",component:detailsOne},
  {path:"/detailsTwo",name:"detailsTwo",component:detailsTwo},
  {path:"/comment",name:"comment",component:comment},
  {path:"/login",name:"login",component:login},
  {path:"/reg",name:"reg",component:reg},
  {path:"/map",name:"map",component:map,meta:{requiresAuth: true}},
  {path:"/echarts",name:"echarts",component:echarts},
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {path:"/product/:kw",name:"product",component:()=>import(/* webpackChunkName: "products" */ '../views/Product.vue'),props:true,meta:{
  //   keepAlive:false
  // }},
]





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('token') || sessionStorage.getItem("token")
  // console.log(token,"zhangkaiyi")
  // console.log(to,"wangba")
  if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
