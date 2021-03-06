import {getReferenceinfo,getConcrete} from  "../../assets/js/apis/scientific"

export default{
    namespaced: true,
    state: {
        dataList:[],
        allData:[],
        collect:"",//评论
        concrete:[],
        // topSource:[],//
        // topTitle:[],
        // topTime:[],
        // topCollect:[],
        // topReferid:[],
        // showdata:[1,1],
      },
      mutations: {
          //负责修改state中的变量
          getDataList(state,data){
              //进行相关操作
              // console.log(data)
              state.dataList=data.map((elem)=>{
                  return elem.source
              });
              state.allData=data;
              state.collect=data.map((elem)=>{
                return elem.collect
              });
          },
          getDatacontent(state,data){
              state.concrete=data
          }
      },
      actions: {
          async disGetDataList(context,param){//context代表整个vuex对象    由于后面只能接收一个参数，所以用一个对象来接
              let response = await getReferenceinfo();
              context.commit("getDataList",response);//这边的结果返回给上面的data
          },
          async disConcrete(context,param){
            let response = await getConcrete();
            context.commit("getDatacontent",response);//这边的结果返回给上面的data
        },
      },
}