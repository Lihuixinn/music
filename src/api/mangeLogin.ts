/**
 * 登录管理相关请求接口
 */
import axios, { Canceler } from 'axios'
import request from './request'
import { timestamp } from '../utils'

interface IC {
  cancelGetLoginStatus?: Canceler
}

const cancel: IC = {}

/**
 * 刷新登录
 */
function refreshLogin() {
  return request({
    url: `/login/refresh`,
    params: {
        timestamp: timestamp ,// 将时间戳作为请求参数
      },
  })
}

/**
 * 退出登录
 */
function logout() {
  return request({
    url: `/logout`,
    params: {
        timestamp: timestamp ,// 将时间戳作为请求参数
      },

  })
}

/**
 * 获取登录状态
 */
function getLoginStatus() {
  return request({
    url: `/login/status`,
    params: {
        timestamp: timestamp ,
      },
    cancelToken: new axios.CancelToken(function (_cancel) {
      //cancel参数是一个函数，调用该函数取消请求
      cancel.cancelGetLoginStatus = _cancel
    })
  })
}

export {
  cancel,
  refreshLogin,
  logout,
  getLoginStatus
}
