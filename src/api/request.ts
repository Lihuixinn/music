/**
 * 配置axios
 */
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios'
import { BASE_URL, TIMEOUT } from '../config/index'

function request(config: AxiosRequestConfig): AxiosPromise<any> {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true
  })

  // 请求拦截
  instance.interceptors.request.use(function(config){
     // 在发送请求之前做些什么
      return config
    },
    (error: any) => {
    // 对请求错误做些什么
      console.log(error)
    }
  )

  // 响应拦截
  instance.interceptors.response.use(
    (response: AxiosResponse<any>) => {
      // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么    
      return response.data
    },
    (error: any) => {

    }
  )

  return instance(config)
}

export default request
