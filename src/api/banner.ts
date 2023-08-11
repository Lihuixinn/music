/**
 * 首页轮播图请求
 */
import axios, { Canceler } from 'axios'
import request from './request'   
             
interface IC {
  cancelgetBanner?: Canceler
}

const cancelgetBanner: IC = {}

function getBanner() {
  return request({
    url: '/banner',
    params: {
        type:0
      },
    cancelToken: new axios.CancelToken(function (cancel) {
      //cancel参数是一个函数，调用该函数取消请求
      cancelgetBanner.cancelgetBanner = cancel
    })
  })
}

export { getBanner,cancelgetBanner }