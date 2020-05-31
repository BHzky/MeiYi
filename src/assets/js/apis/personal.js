import {request} from   "../../../untils/request"

export const getPersonal = (parmas) => {
    return request({
      url: '/pro/v1/personal',
      method: 'get',
      data: parmas
    })
  }