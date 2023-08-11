/**
 * 二维码登录请求接口
 */

import axios, { Canceler } from 'axios'
import request from './request'
import { timestamp } from '../utils'


interface IC {
  cancelCreateQRkey?: Canceler
}

const cancelQR: IC = {}

/**
 * 生成二维码key，用于生成二维码图片和验证
 */
function createQRkey() {
  return request({
    url: `/login/qr/key`,
    method: 'POST',
    withCredentials: true,
    headers: {
      // "Access-Control-Allow-Origin":"*",
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    params: {
      timestamp: timestamp // 将时间戳作为请求参数
    },
    cancelToken: new axios.CancelToken(function (cancel) {
      //cancel参数是一个函数，调用该函数取消请求
      cancelQR.cancelCreateQRkey = cancel
    })
  })
}

/**
 * 生成二维码图片
 */
function createQRCode(key:string) {
  return request({
    url: `/login/qr/create`,
    method: 'POST',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // "Access-Control-Allow-Origin":"*"
    },
    params: {
      timestamp: timestamp ,// 将时间戳作为请求参数
      key,
      qrimg: key
    },
  })
}

/**
 * 轮询验证登录
 * 800为二维码过期,
 * 801为等待扫码,
 * 802为待确认,
 * 803为授权登录成功(803状态码下会返回cookies)
 */
function checkQRCodeStatus(key: string) {
  return request({
    url: `/login/qr/check`,
    method: 'POST',
    withCredentials: true,
    headers: {
      // "Access-Control-Allow-Origin":"*",
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    params: {
      timestamp: timestamp ,// 将时间戳作为请求参数
      key
    },
  })
}

export {
  cancelQR,
  createQRkey,
  createQRCode,
  checkQRCodeStatus
}
