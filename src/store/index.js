import Vue from 'vue'
import Vuex from 'vuex'
import index from "./modules/index"
import scientific from "./modules/scientific"
import scholar from './modules/scholar'
import getters from "./getters"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uname:"",
    islogin:false,
  },
  mutations: {
    setUname(state,uname){
        state.uname=uname;
      },
    setIslogin(state,islogin){
        state.islogin=islogin;
      },
  },
  modules: {
    index,
    scientific,
    scholar
  },
  getters
})
