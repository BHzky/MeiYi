import {request} from   "../../../untils/request"
// 列表查询接口
export const getList = (parmas) => {
    return request({
      url: '/pro/v1/index',
      method: 'get',
      data: parmas
    })
  }