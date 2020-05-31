import {getscholarData,getReferenceinfo} from  "../../assets/js/apis/scholar"

export default{
    namespaced: true,
    state: {
        scholarData:[],
        scholarAll:[],
      },
      mutations: {
          //负责修改state中的变量
          getDataList(state,data){
              state.scholarData=data.map((elem)=>{
                  return elem.author
              });
              state.scholarAlldetails=data
          },
          getDataAll(state,data){
            state.scholarAll=data
        },
      },
      actions: {
          async disGetScholar(context,param){//context代表整个vuex对象    由于后面只能接收一个参数，所以用一个对象来接
              let response = await getscholarData();
              context.commit("getDataList",response);//这边的结果返回给上面的data
          },
          async disGetall(context,param){//context代表整个vuex对象    由于后面只能接收一个参数，所以用一个对象来接
            let response = await getReferenceinfo();
            context.commit("getDataAll",response);//这边的结果返回给上面的data
        },
      },
}