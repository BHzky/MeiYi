import {request} from   "../../../untils/request"
// 列表查询接口
export const getReferenceinfo = (parmas) => {
    return request({
      url: '/pro/v1/referenceinfo',
      method: 'get',
      data: parmas
    })
  }
// 点击收藏接口
export const collect = (parmas) => {
  return request({
    url: '/pro/v1/collect',
    method: 'post',
    data: parmas
  })
}
//精确查找接口
export const disexactValue = (parmas) => {
  return request({
    url: '/pro/v1/exactValue',
    method: 'post',
    data: parmas
  })
}
// 具体内容列表查询接口
export const getConcrete = (parmas) => {
  return request({
    url: '/pro/v1/concrete',
    method: 'get',
    data: parmas
  })
}
//发送意见接口
export const disAdvise = (parmas) => {
  return request({
    url: '/pro/v1/advise',
    method: 'post',
    data: parmas
  })
}
export const attentionAdd = (parmas) => {
  return request({
    url: '/pro/v1/attentionAdd',
    method: 'get',
    data: parmas
  })
}