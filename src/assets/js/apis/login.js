import {request} from   "../../../untils/request"
// 列表查询接口
export const getLogin = (parmas) => {
    return request({
      url: '/pro/v1/login',
      method: 'post',
      data: parmas
    })
  }
  export const getReg = (parmas) => {
    return request({
      url: '/pro/v1/reg',
      method: 'post',
      data: parmas
    })
  }