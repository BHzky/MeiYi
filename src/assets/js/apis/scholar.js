import {request} from   "../../../untils/request"

export const getscholarData = (parmas) => {
    return request({
      url: '/pro/v1/scholar',
      method: 'get',
      data: parmas
    })
  }
  // 列表查询接口
export const getReferenceinfo = (parmas) => {
    return request({
      url: '/pro/v1/referenceinfo',
      method: 'get',
      data: parmas
    })
  }